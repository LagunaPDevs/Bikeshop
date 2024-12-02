import { Box, Card, Typography } from "@mui/material";
import AddRuleForm from "../sections/add-rule/AddRuleForm";

export default function AddRule() {
  return (
    <Card>
      <Box sx={{ p: 4 }}>
        <Typography variant="h4">Add new rule</Typography>
        <AddRuleForm />
      </Box>
    </Card>
  );
}
