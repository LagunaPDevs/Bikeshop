// material-ui
import Typography from "@mui/material/Typography";
import { Grid2 } from "@mui/material";

// ==============================|| EMPTY TABLE - NO DATA ||============================== //

export default function EmptyTable({ msg }: { msg: string }) {
  return (
    <Grid2 container alignItems="center" justifyContent="center" spacing={1}>
      <Typography align="center" variant="h4">
        {msg}
      </Typography>
    </Grid2>
  );
}
