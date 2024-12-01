import { insertRule } from "../services/apiRules";
import { WheelRuleFormType } from "../types/form";
import { wheelRuleToBicycleRule } from "../utils/wheelRuleFormUtils";

export default function useWheelRuleForm() {
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
      return result;
    } catch (e) {
      console.log(e);
    }
  };
  return { initialValues, onSubmit };
}
