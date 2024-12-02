import { useContext } from "react";
import { BikeCreatorContext } from "../contexts/BikeCreatorContext";

export default function useBikeCreator() {
  const context = useContext(BikeCreatorContext);
  if (!context) throw new Error("context must be use inside provider");

  return context;
}
