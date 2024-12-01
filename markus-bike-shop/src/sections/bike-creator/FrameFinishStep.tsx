import {
  FormControl,
  FormControlLabel,
  Grid2,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import useBikeCreator from "../../hooks/useBikeCreator";
import { frameFinishToTitle } from "../../utils/bikeCreatorUtils";

export default function FrameFinishStep() {
  const { frameFinishes, selectedFrameFinish, setSelectedFrameFinish } =
    useBikeCreator();
  return (
    <Grid2>
      <FormControl>
        <RadioGroup>
          {frameFinishes.map((finish) => {
            return (
              <FormControlLabel
                key={finish.finish}
                control={
                  <Radio
                    checked={selectedFrameFinish?.finish === finish.finish}
                    onChange={() => {
                      setSelectedFrameFinish(finish);
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
                    <Typography>{frameFinishToTitle(finish.finish)}</Typography>
                    <Typography variant="subtitle1">{finish.price}€</Typography>
                  </Grid2>
                }
                value={finish.finish}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </Grid2>
  );
}
