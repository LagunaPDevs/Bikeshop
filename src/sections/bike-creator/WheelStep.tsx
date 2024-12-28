import {
  FormControl,
  FormControlLabel,
  Grid2,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

import useBikeCreator from "../../hooks/useBikeCreator";
import { wheelTypeToTitle } from "../../utils/bikeCreatorUtils";

export default function WheelStep() {
  const { ruledProductList, selectedWheel, setSelectedWheel } =
    useBikeCreator();
  return (
    <Grid2>
      <FormControl>
        <RadioGroup>
          {ruledProductList.wheels.map((wheel) => {
            return (
              <FormControlLabel
                key={wheel.type}
                control={
                  <Radio
                    checked={selectedWheel?.type === wheel.type}
                    onChange={() => {
                      setSelectedWheel(wheel);
                    }}
                  />
                }
                label={
                  <Grid2
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography>{wheelTypeToTitle(wheel.type)}</Typography>
                    <Typography variant="subtitle1">{wheel.price}€</Typography>
                  </Grid2>
                }
                value={wheel.type}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </Grid2>
  );
}
