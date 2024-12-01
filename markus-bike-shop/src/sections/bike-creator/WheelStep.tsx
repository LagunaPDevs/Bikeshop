import {
  FormControl,
  FormControlLabel,
  Grid2,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import useBikeCreator from "../../hooks/useBikeCreator";

export default function WheelStep() {
  const { wheels, selectedWheel, setSelectedWheel } = useBikeCreator();
  return (
    <Grid2>
      <FormControl>
        <RadioGroup>
          {wheels.map((wheel) => {
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
                    <Typography>{wheel.type}</Typography>
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
