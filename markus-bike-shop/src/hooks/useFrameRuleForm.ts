import { FrameRuleFormType } from "../types/form";

export default function useFrameRuleForm() {
  const initialValues: FrameRuleFormType = {
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

  const onSubmit = (values: FrameRuleFormType) => {
    console.log(values);
  };

  return { initialValues, onSubmit };
}
