import { Grid2, OutlinedInput, Typography } from "@mui/material";

type PriceIncrementFieldProps = {
  id: string;
  value: any;
  onChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
};

export default function PriceIncrementField({
  id,
  value,
  onChange,
}: PriceIncrementFieldProps) {
  return (
    <Grid2 container alignItems="center" spacing={2}>
      <Typography>Enter price increment (€):</Typography>
      <OutlinedInput
        type="number"
        name={id}
        value={value}
        onChange={onChange}
        inputProps={{ min: 0 }}
      />
    </Grid2>
  );
}
