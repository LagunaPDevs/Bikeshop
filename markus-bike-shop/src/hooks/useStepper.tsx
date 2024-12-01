import { useState } from "react";

export default function useStepper() {
  const [step, setStep] = useState(0);
  const handleNext = () => {
    setStep((prev) => prev + 1);
  };
  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };
  return { step, handleNext, handlePrev, setStep };
}
