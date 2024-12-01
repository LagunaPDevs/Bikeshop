import { Chain, Finish, Rim, Wheel } from "../types/bicycle";

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
