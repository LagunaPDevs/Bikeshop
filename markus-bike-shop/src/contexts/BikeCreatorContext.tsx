import { createContext, useEffect, useState } from "react";
import { BikeCreatorContextType } from "../types/context";
import { Chain, Finish, Frame, Rim, Wheel } from "../types/bicycle";
import { getProducts } from "../services/apiProducts";
import { BicycleRule } from "../types/rules";
import { getRules } from "../services/apiRules";
import {
  setAvailableChoices,
  setChoicesAfterRules,
} from "../utils/bikeCreatorUtils";
import useStepper from "../hooks/useStepper";

export const BikeCreatorContext = createContext<BikeCreatorContextType | null>(
  null
);

export function BikeCreatorProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const { step, handleNext, setStep } = useStepper();
  const [isLoading, setIsLoading] = useState(true);
  const [rules, setRules] = useState<BicycleRule[]>([]);
  const [frames, setFrames] = useState<Frame[]>([]);
  const [frameFinishes, setFrameFinishes] = useState<Finish[]>([]);
  const [wheels, setWheels] = useState<Wheel[]>([]);
  const [chains, setChains] = useState<Chain[]>([]);
  const [rims, setRims] = useState<Rim[]>([]);
  const [selectedFrame, setSelectedFrame] = useState<Frame | undefined>();
  const [selectedFrameFinish, setSelectedFrameFinish] = useState<
    Finish | undefined
  >();
  const [selectedWheel, setSelectedWheel] = useState<Wheel | undefined>();
  const [selectedRim, setSelectedRim] = useState<Rim | undefined>();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getAvailableRulesAndProducts();
  }, []);

  useEffect(() => {
    if (!selectedFrame) return;
    // Sum to the price
    setTotalPrice((prev) => prev + selectedFrame.price);
    // Check if there is some rule that applies to current selected frame
    const ruleOfCurrentFrame = rules.find(
      (rule) => rule.type === "frame" && rule.value === selectedFrame.type
    )?.conditions;

    if (!ruleOfCurrentFrame) return;

    // Rules returns the available choices and if there is extra charges
    // in some of the bicycle part
    const categorizedRules = setChoicesAfterRules(ruleOfCurrentFrame);

    const updateWheels = categorizedRules.wheels.map((w) => {
      const ruledWheel = wheels.find((cat) => cat.type === w.type);
      return { ...w, price: (ruledWheel?.price || 0) + w.price };
    });

    const updateFrameFinishes = categorizedRules.finishes.map((f) => {
      const ruledFinish = frameFinishes.find((cat) => cat.finish === f.finish);
      return { ...f, price: (ruledFinish?.price || 0) + f.price };
    });

    const updateChains = categorizedRules.chains.map((c) => {
      const ruledChain = chains.find((cat) => cat.type === c.type);
      return { ...c, price: (ruledChain?.price || 0) + c.price };
    });

    setWheels(updateWheels);
    setFrameFinishes(updateFrameFinishes);
    setChains(updateChains);
  }, [selectedFrame]);

  useEffect(() => {
    if (!selectedWheel) return;
    // Sum to the price
    setTotalPrice((prev) => prev + selectedWheel.price);
    const ruleOfCurrentWheel = rules.find(
      (rule) => rule.type === "wheel" && rule.value === selectedWheel.type
    )?.conditions;

    if (!ruleOfCurrentWheel) return; // Early exit if no matching rule

    // Rules returns the available choices and if there is extra charges
    // in rim colors
    const categorizedRules = setChoicesAfterRules(ruleOfCurrentWheel);

    const availableRims = categorizedRules.colors.reduce((acc, color) => {
      const ruledColor = rims.find((r) => r.color === color);
      if (ruledColor) acc.push(ruledColor);
      return acc;
    }, [] as Rim[]);

    setRims(availableRims);
  }, [selectedWheel]);

  useEffect(() => {
    if (!selectedFrameFinish) return;
    // Sum to the price
    setTotalPrice((prev) => prev + selectedFrameFinish.price);
  }, [selectedFrameFinish]);

  useEffect(() => {
    if (!selectedRim) return;
    //Sum to the price
    setTotalPrice((prev) => prev + selectedRim.price);
  }, [selectedRim]);

  async function getAvailableRulesAndProducts() {
    setIsLoading(true);
    await getProductRules();
    await getProductList();
    setIsLoading(false);
  }
  async function getProductRules() {
    try {
      const result = await getRules();
      if (result) {
        setRules(result);
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
        setFrames(categorizedProducts.frames);
        setFrameFinishes(categorizedProducts.finishes);
        setChains(categorizedProducts.chains);
        setWheels(categorizedProducts.wheels);
        setRims(categorizedProducts.rims);
      }
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  }

  const enableButton =
    (step === 0 && selectedFrame !== undefined) ||
    (step === 1 && selectedFrameFinish !== undefined) ||
    (step === 2 && selectedWheel !== undefined) ||
    (step === 3 && selectedRim !== undefined);

  function simulateAnotherBike() {
    setStep(0);
    setSelectedFrame(undefined);
    setSelectedFrameFinish(undefined);
    setSelectedRim(undefined);
    setSelectedWheel(undefined);
  }

  return (
    <BikeCreatorContext.Provider
      value={{
        isLoading,
        step,
        handleNext,
        enableButton,
        totalPrice,
        frames,
        frameFinishes,
        wheels,
        chains,
        rims,
        selectedFrame,
        selectedFrameFinish,
        selectedRim,
        selectedWheel,
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
