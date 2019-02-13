import * as React from "react";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableGroupRow,
  DragDropProvider,
  Toolbar,
  GroupingPanel
} from "@devexpress/dx-react-grid-bootstrap4";
import { TypedDataColumn } from "./models";
import { PagingState, PagingPanel, PaginationContainer } from "./paging";
import { SortingState, SortingContainer } from "./sorting";
import { GroupingState, GroupingContainer } from "./grouping";
import {
  IntegratedPaging,
  IntegratedSorting,
  IntegratedGrouping
} from "@devexpress/dx-react-grid";

export interface TableProps {
  columns: TypedDataColumn[];
  rows: any[];
}

export default React.memo(({ columns, rows }: TableProps) => {
  console.log("table");
  return (
    <PaginationContainer.Provider>
      <SortingContainer.Provider>
        <GroupingContainer.Provider>
          <Grid rows={rows} columns={columns}>
            <DragDropProvider />
            <SortingState />
            <IntegratedSorting />
            <PagingState />
            <IntegratedPaging />
            <GroupingState />
            <IntegratedGrouping />
            <Table />
            <TableHeaderRow showSortingControls showGroupingControls />
            <TableGroupRow />
            <Toolbar />
            <GroupingPanel showGroupingControls />
            <PagingPanel />
          </Grid>
        </GroupingContainer.Provider>
      </SortingContainer.Provider>
    </PaginationContainer.Provider>
  );
});
