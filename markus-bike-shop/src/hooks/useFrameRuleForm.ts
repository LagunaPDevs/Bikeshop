import { insertRule } from "../services/apiRules";

import { FrameRuleFormType } from "../types/form";
import {
  initialValues,
  frameRuleToBicycleRule,
} from "../utils/frameRuleFormUtils";

export default function useFrameRuleForm() {
  const onSubmit = async (values: FrameRuleFormType) => {
    try {
      const result = await insertRule(frameRuleToBicycleRule(values));
      return result;
    } catch (e) {
      console.log(e);
    }
  };

  return { initialValues, onSubmit };
}
