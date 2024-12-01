import { TableBody, TableCell, TableRow } from "@mui/material";
import { flexRender, Table } from "@tanstack/react-table";
import EmptyTable from "./third-party/EmptyTable";

type StandardTableBodyProps<T> = {
  table: Table<T>;
};
export default function StandardTableBody<T>({
  table,
}: StandardTableBodyProps<T>) {
  return (
    <TableBody>
      {table.getRowModel().rows.length > 0 ? (
        table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getAllCells().map((cell) => (
              <TableCell key={cell.id} {...cell.column.columnDef.meta}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={table.getAllColumns().length}>
            <EmptyTable msg="No data" />
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
}
