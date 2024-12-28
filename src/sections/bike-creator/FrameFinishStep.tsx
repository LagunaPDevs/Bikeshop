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
  const { ruledProductList, selectedFrameFinish, setSelectedFrameFinish } =
    useBikeCreator();

  return (
    <Grid2>
      <FormControl>
        <RadioGroup>
          {ruledProductList.finishes.map((finish) => {
            return (
              <FormControlLabel
                key={finish.type}
                control={
                  <Radio
                    checked={selectedFrameFinish?.type === finish.type}
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
                    <Typography>{frameFinishToTitle(finish.type)}</Typography>
                    <Typography variant="subtitle1">{finish.price}€</Typography>
                  </Grid2>
                }
                value={finish.type}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </Grid2>
  );
}
