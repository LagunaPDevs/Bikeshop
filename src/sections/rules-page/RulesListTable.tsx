import { useMemo } from "react";

// material-ui
import { Button, CircularProgress, Grid2 } from "@mui/material";
// react-table
import { ColumnDef } from "@tanstack/react-table";
// project imports
import DenseTable from "../../components/DenseTable";
import { BicycleRule } from "../../types/rules";
import useRuleListTable from "../../hooks/useRuleListTable";
import TooltipButton from "../../components/TooltipButton";
// assets
import DeleteIcon from "@mui/icons-material/Delete";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

export default function RulesListTable() {
  const { isLoading, rules, removeRule, enableDisableRule, addNewRule } =
    useRuleListTable();

  const columns = useMemo<ColumnDef<BicycleRule>[]>(
    () => [
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Active",
        accessorKey: "isActive",
      },
      {
        header: "Type",
        accessorKey: "type",
      },
      {
        header: "Value",
        accessorKey: "value",
      },
      {
        header: "Action",
        accessorKey: "id",
        cell: (cell) => {
          return (
            <Grid2 container>
              <TooltipButton
                title="Delete rule"
                onClick={() => {
                  removeRule(cell.getValue() as number);
                }}
              >
                <DeleteIcon />
              </TooltipButton>
              <TooltipButton
                title="Disable/enable rule"
                onClick={() => {
                  enableDisableRule(cell.getValue() as number);
                }}
              >
                <PowerSettingsNewIcon />
              </TooltipButton>
            </Grid2>
          );
        },
      },
    ],
    []
  );
  return (
    <Grid2 container spacing={2} justifyContent="center">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid2 container direction="column">
          <Grid2 sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" onClick={addNewRule}>
              Add rule
            </Button>
          </Grid2>
          <DenseTable data={rules} columns={columns} />
        </Grid2>
      )}
    </Grid2>
  );
}
