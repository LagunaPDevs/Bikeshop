import {
  Chain,
  ChainType,
  Finish,
  FinishType,
  FrameType,
  Rim,
  Wheel,
  WheelType,
} from "../types/bicycle";
import {
  diamond,
  eightSpeed,
  fatBikeWheel,
  fullSuspension,
  matte,
  mountain,
  road,
  shiny,
  singleSpeed,
  stepThrough,
} from "./constants/form_constants";

export function setAvailableChoices(result: any) {
  return result.reduce(
    (acc: any, p: any) => {
      switch (p.type) {
        case "chain":
          acc.chains.push(p.product);
          break;
        case "finish":
          acc.finishes.push(p.product);
          break;
        case "frame":
          acc.frames.push(p.product);
          break;
        case "rim":
          acc.rims.push(p.product);
          break;
        case "wheel":
          acc.wheels.push(p.product);
          break;
        default:
      }
      return acc;
    },
    {
      chains: [],
      finishes: [],
      frames: [],
      rims: [],
      wheels: [],
    }
  );
}

export function setChoicesAfterRules(result: any): {
  chains: Chain[];
  finishes: Finish[];
  colors: string[];
  rims: Rim[];
  wheels: Wheel[];
} {
  const categorizedProducts = result.reduce(
    (acc: any, r: any) => {
      const [key, value] = Object.entries(r)[0];
      switch (key) {
        case "chain":
          acc.chains.push(value as Chain);
          break;
        case "finish":
          acc.finishes.push(value as Finish);
          break;
        case "colors":
          acc.colors = value as string[];
          break;
        case "rim":
          acc.rims.push(value as Rim);
          break;
        case "wheel":
          acc.wheels.push(value as Wheel);
          break;
        default:
      }
      return acc;
    },
    {
      chains: [],
      finishes: [],
      colors: [],
      rims: [],
      wheels: [],
    }
  );

  return categorizedProducts;
}

export function frameTypeToTitle(frameType: FrameType) {
  switch (frameType) {
    case "diamond":
      return diamond;
    case "full-suspension":
      return fullSuspension;
    case "step-through":
      return stepThrough;
  }
}

export function frameFinishToTitle(frameFinish: FinishType) {
  switch (frameFinish) {
    case "matte":
      return matte;
    case "shiny":
      return shiny;
  }
}

export function wheelTypeToTitle(wheelType: WheelType) {
  switch (wheelType) {
    case "fat":
      return fatBikeWheel;
    case "mountain":
      return mountain;
    case "road":
      return road;
  }
}

export function chainTypeToTitle(chainType: ChainType) {
  switch (chainType) {
    case "8-speed":
      return eightSpeed;
    case "single-speed":
      return singleSpeed;
  }
}