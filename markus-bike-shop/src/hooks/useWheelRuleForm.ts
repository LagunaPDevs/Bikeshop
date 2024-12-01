import { useNavigate } from "react-router";

// database
import { insertRule } from "../services/apiRules";

// project imports
import { WheelRuleFormType } from "../types/form";
import {
  wheelRuleToBicycleRule,
  validationSchema,
} from "../utils/wheelRuleFormUtils";
import { rulesPath } from "../utils/constants/route_constants";

export default function useWheelRuleForm() {
  const navigate = useNavigate();
  const initialValues: WheelRuleFormType = {
    name: "",
    wheelType: "road",
    rimColors: [
      { enabled: true, rimColor: "red" },
      { enabled: true, rimColor: "black" },
      { enabled: true, rimColor: "blue" },
    ],
  };

  const onSubmit = async (values: WheelRuleFormType) => {
    try {
      const result = await insertRule(wheelRuleToBicycleRule(values));
      navigate(rulesPath);
      return result;
    } catch (e) {
      console.log(e);
    }
  };
  return { initialValues, validationSchema, onSubmit };
}
