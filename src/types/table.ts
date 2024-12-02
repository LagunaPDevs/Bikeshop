import { ColumnDef } from "@tanstack/react-table";

export interface ReactTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
}
