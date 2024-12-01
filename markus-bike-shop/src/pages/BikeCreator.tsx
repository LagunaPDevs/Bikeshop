import { Box, Grid2, Typography } from "@mui/material";
import BikeCreatorStepper from "../sections/bike-creator/BikeCreatorStepper";
import { BikeCreatorProvider } from "../contexts/BikeCreatorContext";

export default function BikeCreator() {
  return (
    <BikeCreatorProvider>
      <Box sx={{ p: 4 }}>
        <Typography variant="h4">Bike creator</Typography>
        <Grid2 container direction="column" spacing={2}>
          <BikeCreatorStepper />
        </Grid2>
      </Box>
    </BikeCreatorProvider>
  );
}
