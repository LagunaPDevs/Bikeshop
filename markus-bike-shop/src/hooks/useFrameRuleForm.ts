import { useNavigate } from "react-router";

// database
import { insertRule } from "../services/apiRules";

// project imports
import { FrameRuleFormType } from "../types/form";
import {
  initialValues,
  validationSchema,
  frameRuleToBicycleRule,
} from "../utils/frameRuleFormUtils";
import { rulesPath } from "../utils/constants/route_constants";

export default function useFrameRuleForm() {
  const navigate = useNavigate();
  const onSubmit = async (values: FrameRuleFormType) => {
    try {
      const result = await insertRule(frameRuleToBicycleRule(values));
      navigate(rulesPath);
      return result;
    } catch (e) {
      console.log(e);
    }
  };

  return { initialValues, validationSchema, onSubmit };
}
