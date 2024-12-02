import { WheelRuleFormType } from "../types/form";
import { BicycleRule, RuleCondition } from "../types/rules";

import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
});

export const initialValues: WheelRuleFormType = {
  name: "",
  wheelType: "road",
  rimColors: [
    { enabled: true, rimColor: "red" },
    { enabled: true, rimColor: "black" },
    { enabled: true, rimColor: "blue" },
  ],
};

export function wheelRuleToBicycleRule(
  wheelRule: WheelRuleFormType
): BicycleRule {
  const conditions: RuleCondition[] = [];
  const colorList: string[] = [];
  wheelRule.rimColors.map((color) => {
    if (color.enabled) colorList.push(color.rimColor);
  });
  if (colorList.length > 0) conditions.push({ colors: colorList });
  return {
    name: wheelRule.name,
    isActive: true,
    type: "wheel",
    value: wheelRule.wheelType,
    conditions,
  };
}
