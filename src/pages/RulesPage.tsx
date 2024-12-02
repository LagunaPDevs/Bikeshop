import { Box, Grid2, Typography } from "@mui/material";
import RulesListTable from "../sections/rules-page/RulesListTable";

export default function RulesList() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Rules list</Typography>
      <Grid2 container direction="column" spacing={2}>
        <RulesListTable />
      </Grid2>
    </Box>
  );
}
