import { Chain, Finish, Frame, Rim, Wheel } from "./bicycle";
import { BicycleRule } from "./rules";

export type BikeCreatorContextType = {
  isLoading: boolean;
  initialProductList: BikeProductList;
  ruledProductList: BikeProductList;
  totalPrice: number;
  selectedFrame?: Frame;
  selectedFrameFinish?: Finish;
  selectedWheel?: Wheel;
  selectedRim?: Rim;
  setSelectedFrame: (selected: Frame) => any;
  setSelectedFrameFinish: (selected: Finish) => any;
  setSelectedWheel: (selected: Wheel) => any;
  setSelectedRim: (selected: Rim) => any;
  setSelectedChain: (selected: Chain) => any;
  simulateAnotherBike: () => void;
};

export type BikeCreatorReducerProps = {
  isLoading: boolean;
  initialProductList: BikeProductList;
  ruledProductList: BikeProductList;
  totalPrice: number;
  selectedFrame?: Frame;
  selectedFrameFinish?: Finish;
  selectedWheel?: Wheel;
  selectedRim?: Rim;
  selectedChain?: Chain;
  bicycleRules: BicycleRule[];
};

export type BikeCreatorReducerActionProps = {
  type: string;
  payload?: BikeCreatorReducerProps;
};

export type BikeProductList = {
  frames: Frame[];
  finishes: Finish[];
  wheels: Wheel[];
  rims: Rim[];
  chains: Chain[];
};
