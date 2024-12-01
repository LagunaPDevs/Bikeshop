// material-ui
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid2,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

// form handlers
import { Formik } from "formik";

// project imports
import PriceIncrementField from "../../components/PriceIncrementField";
import CheckboxField from "../../components/CheckboxField";
import RuleNameField from "../../components/RuleNameField";
import useFrameRuleForm from "../../hooks/useFrameRuleForm";

type FrameRuleForm = {};

export default function FrameRuleForm() {
  const { initialValues, onSubmit, validationSchema } = useFrameRuleForm();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ isSubmitting, handleChange, handleSubmit, values, errors }) => (
        <Box component="form" onSubmit={handleSubmit}>
          <RuleNameField
            id="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <FormHelperText>{errors.name}</FormHelperText>}
          <Grid2 container alignItems="center">
            <Typography variant="subtitle1">Select frame type:</Typography>
            <FormControl fullWidth>
              <RadioGroup row name="frameType" onChange={handleChange}>
                <FormControlLabel
                  value="full-suspension"
                  control={
                    <Radio checked={values.frameType === "full-suspension"} />
                  }
                  label="Full suspension"
                />
                <FormControlLabel
                  value="diamond"
                  control={<Radio checked={values.frameType === "diamond"} />}
                  label="Diamond"
                />
                <FormControlLabel
                  value="step-through"
                  control={
                    <Radio checked={values.frameType === "step-through"} />
                  }
                  label="Step-through"
                />
              </RadioGroup>
            </FormControl>
          </Grid2>
          <Grid2>
            <Typography variant="subtitle1">
              Select available frame finish:
            </Typography>
            <Grid2 container>
              <Grid2>
                <FormControl fullWidth>
                  <CheckboxField
                    id="matteFinish.enabled"
                    checked={values.matteFinish.enabled}
                    onChange={handleChange}
                    label="Matte"
                  />
                  <CheckboxField
                    id="shinyFinish.enabled"
                    checked={values.shinyFinish.enabled}
                    onChange={handleChange}
                    label="Shiny"
                  />
                </FormControl>
              </Grid2>
              <Grid2>
                <PriceIncrementField
                  id="matteFinish.finish.price"
                  value={values.matteFinish.finish.price}
                  onChange={handleChange}
                />
                <PriceIncrementField
                  id="shinyFinish.finish.price"
                  value={values.shinyFinish.finish.price}
                  onChange={handleChange}
                />
              </Grid2>
            </Grid2>
          </Grid2>
          <Grid2>
            <Typography variant="subtitle1">
              Select available wheels:
            </Typography>
            <Grid2 container>
              <Grid2>
                <FormControl fullWidth>
                  <CheckboxField
                    id="roadWheels.enabled"
                    checked={values.roadWheels.enabled}
                    onChange={handleChange}
                    label="Road"
                  />
                  <CheckboxField
                    id="mountainWheels.enabled"
                    checked={values.mountainWheels.enabled}
                    onChange={handleChange}
                    label="Mountain"
                  />
                  <CheckboxField
                    id="fatWheels.enabled"
                    checked={values.fatWheels.enabled}
                    onChange={handleChange}
                    label="Fat bike wheel"
                  />
                </FormControl>
              </Grid2>
              <Grid2>
                <PriceIncrementField
                  id="roadWheels.wheel.price"
                  value={values.roadWheels.wheel.price}
                  onChange={handleChange}
                />
                <PriceIncrementField
                  id="mountainWheels.wheel.price"
                  value={values.mountainWheels.wheel.price}
                  onChange={handleChange}
                />
                <PriceIncrementField
                  id="fatWheels.wheel.price"
                  value={values.fatWheels.wheel.price}
                  onChange={handleChange}
                />
              </Grid2>
            </Grid2>
          </Grid2>
          <Grid2>
            <Typography variant="subtitle1">Select available chain:</Typography>
            <Grid2 container>
              <Grid2>
                <FormControl fullWidth>
                  <CheckboxField
                    id="singleSpeedChain.enabled"
                    checked={values.singleSpeedChain.enabled}
                    onChange={handleChange}
                    label="Single speed"
                  />
                  <CheckboxField
                    id="eightSpeedChain.enabled"
                    checked={values.eightSpeedChain.enabled}
                    onChange={handleChange}
                    label="8-speed"
                  />
                </FormControl>
              </Grid2>
              <Grid2>
                <PriceIncrementField
                  id="singleSpeedChain.chain.price"
                  value={values.singleSpeedChain.chain.price}
                  onChange={handleChange}
                />
                <PriceIncrementField
                  id="eightSpeedChain.chain.price"
                  value={values.eightSpeedChain.chain.price}
                  onChange={handleChange}
                />
              </Grid2>
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
