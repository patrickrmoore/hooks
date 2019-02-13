import * as React from "react";

import { TableContainer } from "./table-context";
import { TableColumnReordering } from "@devexpress/dx-react-grid-bootstrap4";

export const ColumnReordering = () => {
  const { columnOrder, setColumnOrder } = React.useContext(
    TableContainer.Context
  ).order;

  return React.useMemo(() => {
    console.log("order");
    return (
      <TableColumnReordering
        order={columnOrder}
        onOrderChange={setColumnOrder}
      />
    );
  }, [columnOrder]);
};
