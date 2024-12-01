// material-ui
import { TableCell, TableHead, TableRow, Typography } from "@mui/material";
// react-table
import { flexRender, HeaderGroup, Table } from "@tanstack/react-table";

type TableHeaderProps<T> = {
  table: Table<T>;
};
export default function TableHeader<T>({ table }: TableHeaderProps<T>) {
  return (
    <TableHead>
      {table.getHeaderGroups().map((headerGroup: HeaderGroup<any>) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableCell key={header.id} {...header.column.columnDef.meta}>
              <Typography variant="h6">
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </Typography>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableHead>
  );
}
