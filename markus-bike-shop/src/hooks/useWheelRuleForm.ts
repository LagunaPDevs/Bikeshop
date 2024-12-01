import { WheelRuleFormType } from "../types/form";

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

  const onSubmit = (values: WheelRuleFormType) => {
    console.log(values);
  };
  return { initialValues, onSubmit };
}
