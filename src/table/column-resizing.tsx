import * as React from "react";

import { TableContainer } from "./table-context";
import { TableColumnResizing } from "@devexpress/dx-react-grid-bootstrap4";

export const ColumnResizing = () => {
  const { columnWidths, setColumnWidths } = React.useContext(
    TableContainer.Context
  ).sizing;

  return React.useMemo(() => {
    console.log("sizing");
    return (
      <TableColumnResizing
        columnWidths={columnWidths}
        onColumnWidthsChange={setColumnWidths}
      />
    );
  }, [columnWidths]);
};
