import { createContext, useEffect, useReducer } from "react";

// services
import { getProducts } from "../services/apiProducts";
import { getEnabledRules } from "../services/apiRules";

// reducer
import {
  bikeCreatorReducer,
  initialBikeCreator,
} from "./bike-creator-reducer/bike-creator-reducer";
// actions
import {
  RESET_SIMULATOR,
  SET_AVAILABLE_PRODUCTS_AND_RULES,
  SET_SELECTED_CHAIN,
  SET_SELECTED_FINISH,
  SET_SELECTED_FRAME,
  SET_SELECTED_RIM,
  SET_SELECTED_WHEEL,
} from "./bike-creator-reducer/actions";

// types
import { BicycleRule } from "../types/rules";
import { BikeCreatorContextType } from "../types/bike-creator";
import { Chain, Finish, Frame, Rim, Wheel } from "../types/bicycle";

// utils
import {
  setAvailableChoices,
  setChoicesAfterRules,
} from "../utils/bikeCreatorUtils";
export const BikeCreatorContext = createContext<BikeCreatorContextType | null>(
  null
);

export function BikeCreatorProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [state, dispatch] = useReducer(bikeCreatorReducer, initialBikeCreator);

  useEffect(() => {
    getAvailableRulesAndProducts();
  }, []);

  async function getAvailableRulesAndProducts() {
    const rules = await getProductRules();
    const productList = await getProductList();
    dispatch({
      type: SET_AVAILABLE_PRODUCTS_AND_RULES,
      payload: {
        ...state!,
        isLoading: false,
        initialProductList: productList,
        bicycleRules: rules ?? [],
      },
    });
  }
  async function getProductRules(): Promise<BicycleRule[] | undefined> {
    try {
      const result = await getEnabledRules();
      if (result) {
        return result;
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function getProductList() {
    try {
      const result = await getProducts();
      if (result) {
        const categorizedProducts = setAvailableChoices(result);
        return categorizedProducts;
      }
    } catch (e) {
      console.log(e);
    }
  }

  function simulateAnotherBike() {
    dispatch({
      type: RESET_SIMULATOR,
    });
  }

  function setSelectedFrame(selected: Frame) {
    // Check if there is some rule that applies to current selected frame
    const ruleOfCurrentFrame = state!.bicycleRules.find(
      (rule) => rule.type === "frame" && rule.value === selected.type
    )?.conditions;
    let ruledProductList = state!.ruledProductList;
    if (ruleOfCurrentFrame) {
      // Rules returns the available choices and if there is extra charges
      // in some of the bicycle part
      const categorizedRules = setChoicesAfterRules(ruleOfCurrentFrame);

      const updateWheels = categorizedRules.wheels.map((w) => {
        const ruledWheel = state!.initialProductList.wheels.find(
          (cat) => cat.type === w.type
        );
        return { ...w, price: (ruledWheel?.price || 0) + w.price };
      });

      const updateFrameFinishes = categorizedRules.finishes.map((f) => {
        const ruledFinish = state!.initialProductList.finishes.find(
          (cat) => cat.type === f.type
        );
        return { ...f, price: (ruledFinish?.price || 0) + f.price };
      });

      const updateChains = categorizedRules.chains.map((c) => {
        const ruledChain = state!.initialProductList.chains.find(
          (cat) => cat.type === c.type
        );
        return { ...c, price: (ruledChain?.price || 0) + c.price };
      });
      ruledProductList = {
        ...ruledProductList,
        wheels: [...updateWheels],
        finishes: [...updateFrameFinishes],
        chains: [...updateChains],
      };
    }
    dispatch({
      type: SET_SELECTED_FRAME,
      payload: {
        ...state!,
        selectedFrame: selected,
        ruledProductList,
      },
    });
  }
  function setSelectedWheel(selected: Wheel) {
    const ruleOfCurrentWheel = state!.bicycleRules.find(
      (rule) => rule.type === "wheel" && rule.value === selected.type
    )?.conditions;
    let ruledProductList = state!.ruledProductList;
    if (ruleOfCurrentWheel) {
      // Rules returns the available choices and if there is extra charges
      // in rim colors
      const categorizedRules = setChoicesAfterRules(ruleOfCurrentWheel);

      const availableRims = categorizedRules.rims.reduce((acc, color) => {
        const ruledColor = state!.initialProductList.rims.find(
          (r) => r.type === color.type
        );
        if (ruledColor) acc.push(ruledColor);
        return acc;
      }, [] as Rim[]);
      ruledProductList = { ...ruledProductList, rims: [...availableRims] };
    }
    dispatch({
      type: SET_SELECTED_WHEEL,
      payload: {
        ...state!,
        selectedWheel: selected,
        ruledProductList,
      },
    });
  }

  function setSelectedFrameFinish(selected: Finish) {
    dispatch({
      type: SET_SELECTED_FINISH,
      payload: { ...state!, selectedFrameFinish: selected },
    });
  }

  function setSelectedRim(selected: Rim) {
    dispatch({
      type: SET_SELECTED_RIM,
      payload: { ...state!, selectedRim: selected },
    });
  }

  function setSelectedChain(selected: Chain) {
    dispatch({
      type: SET_SELECTED_CHAIN,
      payload: { ...state!, selectedChain: selected },
    });
  }

  return (
    <BikeCreatorContext.Provider
      value={{
        ...state!,
        setSelectedChain,
        setSelectedFrame,
        setSelectedRim,
        setSelectedFrameFinish,
        setSelectedWheel,
        simulateAnotherBike,
      }}
    >
      {children}
    </BikeCreatorContext.Provider>
  );
}
