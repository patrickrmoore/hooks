import * as React from "react";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableGroupRow,
  DragDropProvider,
  Toolbar,
  GroupingPanel,
  PagingPanel,
  ColumnChooser
} from "@devexpress/dx-react-grid-bootstrap4";
import { TypedDataColumn } from "./models";

import { IntegratedPaging } from "@devexpress/dx-react-grid";
import { TableContainer, TableContext } from "./table-context";
import { SortingState } from "./sorting-state";
import { PagingState } from "./paging-state";
import { GroupingState } from "./grouping-state";
import { ColumnResizing } from "./column-resizing";
import { ColumnReordering } from "./column-reordering";
import { ColumnVisibility } from "./column-visibility";
import { IntegratedSorting } from "./sorting-extensions";
import {
  NumberFormatProvider,
  DateFormatProvider,
  BooleanFormatProvider
} from "./column-providers";
import { IntegratedGrouping } from "./grouping-extensions";
import { GroupCellContent } from "./group-cell";

export interface TableProps {
  columns: TypedDataColumn[];
  rows: any[];
}

export const EntityTable = ({ columns, rows }: TableProps) => {
  console.log("table");
  return (
    <Grid rows={rows} columns={columns}>
      <NumberFormatProvider />
      <DateFormatProvider />
      <BooleanFormatProvider />
      <DragDropProvider />
      <SortingState />
      <IntegratedSorting />
      <GroupingState />
      <IntegratedGrouping />
      <PagingState />
      <IntegratedPaging />
      <Table />
      <ColumnReordering />
      <ColumnResizing />
      <TableHeaderRow showSortingControls showGroupingControls />
      <ColumnVisibility />
      <TableGroupRow contentComponent={GroupCellContent} />
      <Toolbar />
      <GroupingPanel showGroupingControls showSortingControls />
      <ColumnChooser />
      <PagingPanel pageSizes={[1, 15, 25, 50, 0]} />
    </Grid>
  );
};

export default ({ columns, rows }: TableProps) => {
  console.log("table container");
  const [currentTemplate, setCurrentTemplate] = React.useState("test2");
  return (
    <>
      <select
        value={currentTemplate}
        onChange={e => setCurrentTemplate(e.target.value)}
      >
        <option value="test1">Test 1</option>
        <option value="test2">Test 2</option>
        <option value="test3">Test 3</option>
      </select>
      <TableContext currentTemplate={currentTemplate} columns={columns}>
        <EntityTable columns={columns} rows={rows} />
      </TableContext>
    </>
  );
};
