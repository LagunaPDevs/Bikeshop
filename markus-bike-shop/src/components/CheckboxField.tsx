import { Checkbox, FormControlLabel } from "@mui/material";

type CheckboxFieldProps = {
  id: string;
  checked: boolean;
  label: React.ReactNode;
  onChange:
    | ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void)
    | undefined;
};

export default function CheckboxField({
  id,
  checked,
  onChange,
  label,
}: CheckboxFieldProps) {
  return (
    <FormControlLabel
      control={<Checkbox id={id} checked={checked} onChange={onChange} />}
      label={label}
    />
  );
}
