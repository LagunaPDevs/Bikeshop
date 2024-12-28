import {
  BikeCreatorReducerActionProps,
  BikeCreatorReducerProps,
} from "../../types/bike-creator";

import {
  RESET_SIMULATOR,
  SET_AVAILABLE_PRODUCTS_AND_RULES,
  SET_SELECTED_CHAIN,
  SET_SELECTED_FINISH,
  SET_SELECTED_FRAME,
  SET_SELECTED_RIM,
  SET_SELECTED_WHEEL,
} from "./actions";

export const initialBikeCreator: BikeCreatorReducerProps = {
  isLoading: true,
  initialProductList: {
    frames: [],
    finishes: [],
    rims: [],
    wheels: [],
    chains: [],
  },
  ruledProductList: {
    frames: [],
    finishes: [],
    rims: [],
    wheels: [],
    chains: [],
  },
  totalPrice: 0,
  bicycleRules: [],
};

export const bikeCreatorReducer = (
  state = initialBikeCreator,
  action: BikeCreatorReducerActionProps
) => {
  switch (action.type) {
    case SET_AVAILABLE_PRODUCTS_AND_RULES: {
      const { isLoading, initialProductList, bicycleRules } = action.payload!;
      return {
        ...state,
        isLoading,
        initialProductList,
        ruledProductList: initialProductList,
        bicycleRules,
      };
    }
    case SET_SELECTED_FRAME: {
      const { selectedFrame, ruledProductList } = action.payload!;
      return {
        ...state,
        selectedFrame,
        totalPrice: state.totalPrice + (selectedFrame?.price ?? 0),
        ruledProductList,
      };
    }
    case SET_SELECTED_FINISH: {
      const { selectedFrameFinish, ruledProductList } = action.payload!;
      return {
        ...state,
        selectedFrameFinish,
        ruledProductList,
        totalPrice: state.totalPrice + (selectedFrameFinish?.price ?? 0),
      };
    }
    case SET_SELECTED_WHEEL: {
      const { selectedWheel, ruledProductList } = action.payload!;
      return {
        ...state,
        selectedWheel,
        ruledProductList,
        totalPrice: state.totalPrice + (selectedWheel?.price ?? 0),
      };
    }
    case SET_SELECTED_RIM: {
      const { selectedRim, ruledProductList } = action.payload!;
      return {
        ...state,
        selectedRim,
        ruledProductList,
        totalPrice: state.totalPrice + (selectedRim?.price ?? 0),
      };
    }
    case SET_SELECTED_CHAIN: {
      const { selectedChain, ruledProductList } = action.payload!;
      return {
        ...state,
        selectedChain,
        ruledProductList,
        totalPrice: state.totalPrice + (selectedChain?.price ?? 0),
      };
    }
    case RESET_SIMULATOR: {
      return {
        ...state,
        ruledProductList: state.initialProductList,
        selectedFrame: undefined,
        selectedFrameFinish: undefined,
        selectedWheel: undefined,
        selectedRim: undefined,
        selectedChain: undefined,
        totalPrice: 0,
      };
    }
  }
};
