import { Box, Grid2, Typography } from "@mui/material";

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
    <Box>
      <BikeItemPrice
        title="Frame"
        item={selectedFrame?.type}
        price={selectedFrame?.price}
      />
      <BikeItemPrice
        title="Frame finish"
        item={selectedFrameFinish?.type}
        price={selectedFrameFinish?.price}
      />
      <BikeItemPrice
        title="Wheel"
        item={selectedWheel?.type}
        price={selectedWheel?.price}
      />
      <BikeItemPrice
        title="Rim color"
        item={selectedRim?.type}
        price={selectedRim?.price}
      />
      <Grid2 container justifyContent="space-between">
        <Typography variant="h6">Total</Typography>
        <Typography variant="h6">{totalPrice}€</Typography>
      </Grid2>
    </Box>
  );
}
