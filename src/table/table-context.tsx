import * as React from "react";
import createContainer from "constate";
import { useGrouping } from "./hooks/useGrouping";
import { useSorting } from "./hooks/useSorting";
import { usePagination } from "./hooks/usePaging";
import { TypedDataColumn } from "./models";
import { useColumnResizing } from "./hooks/useColumnResizing";
import { useColumnOrdering } from "./hooks/useColumnOrdering";
import { useColumnVisibility } from "./hooks/useColumnVisibility";

export function useTableContext(
  columns: TypedDataColumn[],
  templateName: string
) {
  const grouping = useGrouping(templateName);
  const paging = usePagination(templateName);
  const sorting = useSorting(
    templateName,
    grouping.grouping,
    paging.setCurrentPage
  );
  const sizing = useColumnResizing(templateName, columns);
  const order = useColumnOrdering(templateName, columns);
  const visibility = useColumnVisibility(templateName, columns);

  return {
    templateName,
    columns,
    grouping,
    sorting,
    paging,
    sizing,
    order,
    visibility
  };
}

export const TableContainer = createContainer(
  ({
    columns,
    templateName
  }: {
    columns: TypedDataColumn[];
    templateName: string;
  }) => useTableContext(columns, templateName)
);

export const TableContext: React.FunctionComponent<{
  currentTemplate: string;
  columns: TypedDataColumn[];
}> = ({ columns, children, currentTemplate }) => (
  <TableContainer.Provider
    templateName={currentTemplate}
    columns={columns}
    key={currentTemplate}
  >
    {children}
  </TableContainer.Provider>
);
