import { Grid2, Typography } from "@mui/material";
import useBikeCreator from "../../hooks/useBikeCreator";
import BikeItemPrice from "../../components/BikeItemPrice";

export default function FinalPriceStep() {
  const {
    selectedFrame,
    selectedFrameFinish,
    selectedWheel,
    selectedRim,
    totalPrice,
  } = useBikeCreator();
  return (
    <Grid2 sx={{ width: "100%" }}>
      <BikeItemPrice
        title="Frame"
        item={selectedFrame?.type}
        price={selectedFrame?.price}
      />
      <BikeItemPrice
        title="Frame finish"
        item={selectedFrameFinish?.finish}
        price={selectedFrameFinish?.price}
      />
      <BikeItemPrice
        title="Wheel"
        item={selectedWheel?.type}
        price={selectedWheel?.price}
      />
      <BikeItemPrice
        title="Rim color"
        item={selectedRim?.color}
        price={selectedRim?.price}
      />
      <Grid2 container justifyContent="space-between">
        <Typography variant="h6">Total</Typography>
        <Typography variant="h6">{totalPrice}€</Typography>
      </Grid2>
    </Grid2>
  );
}
