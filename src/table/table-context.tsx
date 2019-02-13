import * as React from "react";
import createContainer from "constate";
import { useGrouping } from "./hooks/useGrouping";
import { useSorting } from "./hooks/useSorting";
import { usePagination } from "./hooks/usePaging";
import { TypedDataColumn } from "./models";
import { useColumnResizing } from "./hooks/useColumnResizing";

export function useTableContext(columns: TypedDataColumn[]) {
  const grouping = useGrouping();
  const paging = usePagination();
  const sorting = useSorting(grouping.grouping, paging.setCurrentPage);
  const sizing = useColumnResizing(columns);

  return { grouping, sorting, paging, sizing };
}

export const TableContainer = createContainer(
  ({ columns }: { columns: TypedDataColumn[] }) => useTableContext(columns),
  value => [value.grouping, value.paging, value.sorting]
);

export const TableContext: React.FunctionComponent<{
  columns: TypedDataColumn[];
}> = ({ columns, children }) => (
  <TableContainer.Provider columns={columns}>
    {children}
  </TableContainer.Provider>
);
