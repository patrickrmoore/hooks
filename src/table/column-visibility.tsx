import * as React from "react";

import { TableContainer } from "./table-context";
import { TableColumnVisibility } from "@devexpress/dx-react-grid-bootstrap4";

export const ColumnVisibility = () => {
  const { hiddenColumns, setHiddenColumns } = React.useContext(
    TableContainer.Context
  ).visibility;

  return React.useMemo(() => {
    console.log("visibility");
    return (
      <TableColumnVisibility
        hiddenColumnNames={hiddenColumns}
        onHiddenColumnNamesChange={setHiddenColumns}
      />
    );
  }, [hiddenColumns]);
};
