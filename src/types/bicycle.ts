import { Part } from "./product";

export interface Bicycle {
  id: number;
  name: string;
  frame: Frame;
  finish: Finish;
  wheels: Wheel[];
  rim: Rim;
  chain: Chain;
  price: number;
}

export type Frame = Part<FrameType>;
export type Finish = Part<FinishType>;
export type Wheel = Part<WheelType>;
export type Rim = Part<RimColor>;
export type Chain = Part<ChainType>;

export type FrameType = "full-suspension" | "diamond" | "step-through";
export type FinishType = "matte" | "shiny";
export type WheelType = "road" | "mountain" | "fat";
export type RimColor = "red" | "black" | "blue";
export type ChainType = "single-speed" | "8-speed";
