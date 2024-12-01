// material-ui
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid2,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

// form handlers
import { FieldArray, Formik } from "formik";
import useWheelRuleForm from "../../hooks/useWheelRuleForm";

// project imports
import CheckboxField from "../../components/CheckboxField";
import RuleNameField from "../../components/RuleNameField";

export default function WheelRuleForm() {
  const { initialValues, onSubmit } = useWheelRuleForm();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ isSubmitting, handleChange, handleSubmit, values }) => (
        <Box component="form" onSubmit={handleSubmit}>
          <RuleNameField
            id="name"
            value={values.name}
            onChange={handleChange}
          />
          <Grid2 container>
            <Typography variant="subtitle1">Select wheel type:</Typography>
            <FormControl fullWidth>
              <RadioGroup row name="wheelType" onChange={handleChange}>
                <FormControlLabel
                  value="road"
                  control={<Radio checked={values.wheelType === "road"} />}
                  label="Road"
                />
                <FormControlLabel
                  value="mountain"
                  control={<Radio checked={values.wheelType === "mountain"} />}
                  label="Mountain"
                />
                <FormControlLabel
                  value="fat"
                  control={<Radio checked={values.wheelType === "fat"} />}
                  label="Fat bike wheel"
                />
              </RadioGroup>
            </FormControl>
          </Grid2>
          <Grid2>
            <Typography variant="subtitle1">
              Select available rim colors:
            </Typography>
            <Grid2 container>
              <FieldArray
                name="availableRimColors"
                render={(arrayHelpers) =>
                  values.rimColors.map((color, index) => (
                    <CheckboxField
                      key={color.rimColor}
                      id="color"
                      checked={color.enabled}
                      label={color.rimColor}
                      onChange={(e, checked) => {
                        handleChange(e);
                        color.enabled = checked;
                        arrayHelpers.replace(index, {
                          enabled: checked,
                          rimColor: color.rimColor,
                        });
                      }}
                    />
                  ))
                }
              />
            </Grid2>
          </Grid2>
          <Box sx={{ mt: 2 }}>
            <Button
              fullWidth
              variant="contained"
              type="submit"
              disabled={isSubmitting}
            >
              Set rule
            </Button>
          </Box>
        </Box>
      )}
    </Formik>
  );
}
