import { FrameRuleFormType } from "../types/form";
import { BicycleRule, RuleCondition } from "../types/rules";

import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
});

export const initialValues: FrameRuleFormType = {
  name: "",
  frameType: "full-suspension",
  matteFinish: {
    enabled: true,
    finish: {
      finish: "matte",
      price: 0,
    },
  },
  shinyFinish: {
    enabled: true,
    finish: {
      finish: "shiny",
      price: 0,
    },
  },

  roadWheels: {
    enabled: true,
    wheel: {
      type: "road",
      price: 0,
    },
  },
  mountainWheels: {
    enabled: true,
    wheel: {
      type: "mountain",
      price: 0,
    },
  },
  fatWheels: {
    enabled: true,
    wheel: {
      type: "fat",
      price: 0,
    },
  },

  eightSpeedChain: {
    enabled: true,
    chain: {
      type: "8-speed",
      price: 0,
    },
  },
  singleSpeedChain: {
    enabled: true,
    chain: {
      type: "single-speed",
      price: 0,
    },
  },
};

export function frameRuleToBicycleRule(
  frameRule: FrameRuleFormType
): BicycleRule {
  const conditions: RuleCondition[] = [];
  if (frameRule.eightSpeedChain.enabled) {
    conditions.push({ chain: frameRule.eightSpeedChain.chain });
  }
  if (frameRule.singleSpeedChain.enabled) {
    conditions.push({ chain: frameRule.singleSpeedChain.chain });
  }
  if (frameRule.matteFinish.enabled) {
    conditions.push({ finish: frameRule.matteFinish.finish });
  }
  if (frameRule.shinyFinish.enabled) {
    conditions.push({ finish: frameRule.shinyFinish.finish });
  }
  if (frameRule.fatWheels.enabled) {
    conditions.push({ wheel: frameRule.fatWheels.wheel });
  }
  if (frameRule.mountainWheels.enabled) {
    conditions.push({ wheel: frameRule.mountainWheels.wheel });
  }
  if (frameRule.roadWheels.enabled) {
    conditions.push({ wheel: frameRule.roadWheels.wheel });
  }
  return {
    name: frameRule.name,
    isActive: true,
    type: "frame",
    value: frameRule.frameType,
    conditions,
  };
}
