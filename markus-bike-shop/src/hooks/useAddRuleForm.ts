import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { ProductType } from "../types/product";

export default function useAddRuleForm() {
  const [formType, setFormType] = useState<ProductType>("frame");

  const handleSelectableValueChange = (
    v: SelectChangeEvent<"bicycle" | "frame" | "wheel" | "rim">
  ) => {
    const value = v.target.value as ProductType;
    setFormType(value);
  };

  return { formType, handleSelectableValueChange };
}
