import {
  Chain,
  Finish,
  FrameType,
  RimColor,
  Wheel,
  WheelType,
} from "./bicycle";
import { BicycleRuleType } from "./rules";

export type BicycleRuleForm = {
  name: string;
  type: BicycleRuleType;
  value: string;
  conditions: any;
};

export type FrameRuleFormType = {
  name: string;
  frameType: FrameType;
  matteFinish: AvailableFinish;
  shinyFinish: AvailableFinish;
  fatWheels: AvailableWheel;
  mountainWheels: AvailableWheel;
  roadWheels: AvailableWheel;
  eightSpeedChain: AvailableChain;
  singleSpeedChain: AvailableChain;
};

export type WheelRuleFormType = {
  name: string;
  wheelType: WheelType;
  rimColors: AvailableRimColor[];
};

export type AvailableFinish = {
  enabled: boolean;
  finish: Finish;
};

export type AvailableWheel = {
  enabled: boolean;
  wheel: Wheel;
};

export type AvailableChain = {
  enabled: boolean;
  chain: Chain;
};
export type AvailableRimColor = {
  enabled: boolean;
  rimColor: RimColor;
};
