import * as React from "react";
import {
  SortingState as DSortingState,
  Sorting
} from "@devexpress/dx-react-grid";
import { TableContainer } from "./table-context";

export const SortingState = () => {
  const {
    sorting: { sorting, setSorting }
  } = React.useContext(TableContainer.Context);

  return React.useMemo(() => {
    console.log("sorting");
    return <DSortingState sorting={sorting} onSortingChange={setSorting} />;
  }, [sorting]);
};
