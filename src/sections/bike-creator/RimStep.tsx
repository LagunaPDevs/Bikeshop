import {
  capitalize,
  FormControl,
  FormControlLabel,
  Grid2,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import useBikeCreator from "../../hooks/useBikeCreator";

export default function RimStep() {
  const { rims, selectedRim, setSelectedRim } = useBikeCreator();
  return (
    <Grid2>
      <FormControl>
        <RadioGroup>
          {rims.map((rim) => {
            return (
              <FormControlLabel
                key={rim.color}
                control={
                  <Radio
                    checked={rim.color === selectedRim?.color}
                    onChange={() => {
                      setSelectedRim(rim);
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
                    <Typography>{capitalize(rim.color)}</Typography>
                    <Typography variant="subtitle1">{rim.price}€</Typography>
                  </Grid2>
                }
                value={rim.color}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </Grid2>
  );
}
