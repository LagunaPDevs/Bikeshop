// material-ui
import { Card, Paper, Table, TableContainer } from "@mui/material";

// third-party
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import TableHeader from "./third-party/TableHeader";

// project imports
import { ReactTableProps } from "../types/table";
import StandardTableBody from "./StandardTableBody";

export default function DenseTable<T>({ columns, data }: ReactTableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Card>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHeader table={table} />
          <StandardTableBody table={table} />
        </Table>
      </TableContainer>
    </Card>
  );
}
