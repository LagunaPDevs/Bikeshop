import { Chain, Finish, Frame, Rim, Wheel } from "./bicycle";

export type BikeCreatorContextType = {
  isLoading: boolean;
  step: number;
  handleNext: () => void;
  enableButton: boolean;
  frames: Frame[];
  frameFinishes: Finish[];
  wheels: Wheel[];
  chains: Chain[];
  rims: Rim[];
  totalPrice: number;
  selectedFrame?: Frame;
  selectedFrameFinish?: Finish;
  selectedWheel?: Wheel;
  selectedRim?: Rim;
  setSelectedFrame: React.Dispatch<React.SetStateAction<Frame | undefined>>;
  setSelectedFrameFinish: React.Dispatch<
    React.SetStateAction<Finish | undefined>
  >;
  setSelectedWheel: React.Dispatch<React.SetStateAction<Wheel | undefined>>;
  setSelectedRim: React.Dispatch<React.SetStateAction<Rim | undefined>>;
  simulateAnotherBike: () => void;
};
