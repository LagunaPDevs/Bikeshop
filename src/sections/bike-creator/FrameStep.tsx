import {
  FormControl,
  FormControlLabel,
  Grid2,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import useBikeCreator from "../../hooks/useBikeCreator";
import { frameTypeToTitle } from "../../utils/bikeCreatorUtils";

export default function FrameStep() {
  const { frames, selectedFrame, setSelectedFrame } = useBikeCreator();
  return (
    <Grid2>
      <FormControl>
        <RadioGroup>
          {frames.map((frame) => {
            return (
              <FormControlLabel
                key={frame.type}
                control={
                  <Radio
                    checked={selectedFrame?.type === frame.type}
                    onChange={() => {
                      setSelectedFrame(frame);
                    }}
                  />
                }
                value={frame.type}
                label={
                  <Grid2
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography>{frameTypeToTitle(frame.type)}</Typography>
                    <Typography variant="subtitle1">{frame.price}€</Typography>
                  </Grid2>
                }
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </Grid2>
  );
}
