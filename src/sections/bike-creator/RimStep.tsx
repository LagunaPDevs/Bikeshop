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
  const { ruledProductList, selectedRim, setSelectedRim } = useBikeCreator();
  return (
    <Grid2>
      <FormControl>
        <RadioGroup>
          {ruledProductList.rims.map((rim) => {
            return (
              <FormControlLabel
                key={rim.type}
                control={
                  <Radio
                    checked={rim.type === selectedRim?.type}
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
                    <Typography>{capitalize(rim.type)}</Typography>
                    <Typography variant="subtitle1">{rim.price}€</Typography>
                  </Grid2>
                }
                value={rim.type}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </Grid2>
  );
}
