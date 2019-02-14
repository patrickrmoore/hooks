import * as React from "react";
import {
  IntegratedSorting as DIntegratedSorting,
  Sorting
} from "@devexpress/dx-react-grid";
import { TableContainer } from "./table-context";
import { TypedDataColumn, DataColumnType } from "./models";

export const IntegratedSorting = () => {
  const { columns } = React.useContext(TableContainer.Context);

  return React.useMemo(() => {
    console.log("sorting extensions");
    const extensions = generateSortingExtensions(columns);
    return <DIntegratedSorting columnExtensions={extensions} />;
  }, [columns]);
};

export function generateSortingExtensions(
  columns: TypedDataColumn[]
): DIntegratedSorting.ColumnExtension[] {
  return columns.map(
    column =>
      ({
        columnName: column.name,
        compare: getComparer(column)
      } as DIntegratedSorting.ColumnExtension)
  );
}

function getComparer(column: TypedDataColumn) {
  if (
    column.type === DataColumnType.number ||
    column.type === DataColumnType.date
  ) {
    return compareNumber;
  }

  if (column.type === DataColumnType.boolean) {
    return compareBoolean;
  }
  return compareString;
}

function compareBoolean(a = false, b = false) {
  if (a === b) {
    return 0;
  }
  return a < b ? -1 : 1;
}

function compareNumber(
  a = Number.NEGATIVE_INFINITY,
  b = Number.NEGATIVE_INFINITY
) {
  if (a === b) {
    return 0;
  }
  return a < b ? -1 : 1;
}

function compareString(a = "", b = "") {
  const lowerCaseA = a.toLocaleLowerCase();
  const lowerCaseB = b.toLocaleLowerCase();
  if (lowerCaseA === lowerCaseB) {
    return 0;
  }
  return lowerCaseA < lowerCaseB ? -1 : 1;
}
