// material-ui
import {
  FormControl,
  Grid2,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

// project imports
import FrameRuleForm from "./FrameRuleForm";
import WheelRuleForm from "./WheelRuleForm";
import useAddRuleForm from "../../hooks/useAddRuleForm";

export default function AddRuleForm() {
  const { formType, handleSelectableValueChange } = useAddRuleForm();
  return (
    <Grid2 container spacing={2}>
      <Typography variant="subtitle1">Product rule type:</Typography>
      <FormControl fullWidth>
        <Select
          name="type"
          value={formType}
          onChange={handleSelectableValueChange}
        >
          <MenuItem value="frame">Frame</MenuItem>
          <MenuItem value="wheel">Wheel</MenuItem>
        </Select>
      </FormControl>

      {formType === "frame" && <FrameRuleForm />}
      {formType === "wheel" && <WheelRuleForm />}
    </Grid2>
  );
}
