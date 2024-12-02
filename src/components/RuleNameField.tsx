import { Grid2, OutlinedInput, Typography } from "@mui/material";

type RuleNameFieldProps = {
  id: string;
  value: string;
  onChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
};
export default function RuleNameField({
  id,
  value,
  onChange,
}: RuleNameFieldProps) {
  return (
    <Grid2 container spacing={2}>
      <Typography variant="subtitle1">Rule name:</Typography>
      <OutlinedInput
        fullWidth
        id={id}
        name={id}
        value={value}
        onChange={onChange}
      />
    </Grid2>
  );
}
