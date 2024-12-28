import {
  Box,
  Button,
  Card,
  CircularProgress,
  Grid2,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";

import FrameStep from "./FrameStep";
import FrameFinishStep from "./FrameFinishStep";
import WheelStep from "./WheelStep";
import RimStep from "./RimStep";
import FinalPriceStep from "./FinalPriceStep";

import useBikeCreator from "../../hooks/useBikeCreator";
import useStepper from "../../hooks/useStepper";

export default function BikeCreatorStepper() {
  const { step, handleNext, setStep } = useStepper();
  const {
    selectedFrame,
    selectedFrameFinish,
    selectedRim,
    selectedWheel,
    isLoading,
    simulateAnotherBike,
  } = useBikeCreator();
  const steps = [
    { title: "Select frame", step: <FrameStep /> },
    { title: "Select frame finish", step: <Box /> },
    { title: "Select wheels", step: <Box /> },
    { title: "Select rim color", step: <Box /> },
    { title: "Done", step: <Box /> },
  ];

  const enableButton =
    (step === 0 && selectedFrame !== undefined) ||
    (step === 1 && selectedFrameFinish !== undefined) ||
    (step === 2 && selectedWheel !== undefined) ||
    (step === 3 && selectedRim !== undefined);

  return (
    <Grid2
      container
      direction="column"
      spacing={2}
      alignItems="center"
      sx={{ width: "100%" }}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid2 container spacing={2} direction="column">
          <Stepper activeStep={step}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};

              return (
                <Step key={index} {...stepProps}>
                  <StepLabel {...labelProps}>{label.title}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <Card>
            {step === 0 && <FrameStep />}
            {step === 1 && <FrameFinishStep />}
            {step === 2 && <WheelStep />}
            {step === 3 && <RimStep />}
            {step === 4 && <FinalPriceStep />}
          </Card>
        </Grid2>
      )}
      {step !== steps.length && enableButton && (
        <Button onClick={handleNext} variant="contained">
          Next
        </Button>
      )}
      {step === steps.length - 1 && (
        <Button
          onClick={() => {
            setStep(0);
            simulateAnotherBike();
          }}
        >
          Simulate another bike
        </Button>
      )}
    </Grid2>
  );
}
