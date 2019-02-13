import * as React from "react";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableGroupRow,
  DragDropProvider,
  Toolbar,
  GroupingPanel,
  PagingPanel
} from "@devexpress/dx-react-grid-bootstrap4";
import { TypedDataColumn } from "./models";

import {
  IntegratedPaging,
  IntegratedSorting,
  IntegratedGrouping
} from "@devexpress/dx-react-grid";
import { TableContainer, TableContext } from "./table-context";
import { SortingState } from "./sorting-state";
import { PagingState } from "./paging-state";
import { GroupingState } from "./grouping-state";
import { ColumnResizing } from "./column-resizing";

export interface TableProps {
  columns: TypedDataColumn[];
  rows: any[];
}

export const EntityTable = ({ columns, rows }: TableProps) => {
  console.log("table");
  return (
    <Grid rows={rows} columns={columns}>
      <DragDropProvider />
      <SortingState />
      <IntegratedSorting />
      <GroupingState />
      <IntegratedGrouping />
      <PagingState />
      <IntegratedPaging />
      <Table />
      <ColumnResizing />
      <TableHeaderRow showSortingControls showGroupingControls />
      <TableGroupRow />
      <Toolbar />
      <GroupingPanel showGroupingControls showSortingControls />
      <PagingPanel pageSizes={[1, 15, 25, 50, 0]} />
    </Grid>
  );
};

export default ({ columns, rows }: TableProps) => {
  console.log("table container");
  return (
    <TableContext columns={columns}>
      <EntityTable columns={columns} rows={rows} />
    </TableContext>
  );
};
