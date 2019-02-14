import * as React from "react";
import { TableGroupRow } from "@devexpress/dx-react-grid";

export const GroupCellContent = ({
  column,
  row
}: TableGroupRow.ContentProps) => (
  <span>
    {column.name}
    {": "}
    <strong>{row.key}</strong>
  </span>
);
