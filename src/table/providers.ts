import * as React from "react";
import { TypedDataColumn, DataColumnType } from "./models";

interface FilteredColumns {
  numberColumns: TypedDataColumn[];
  textColumns: TypedDataColumn[];
  dateColumns: TypedDataColumn[];
}

export function filterColumns(columns: TypedDataColumn[]) {
  const filteredColumns: FilteredColumns = {
    numberColumns: [],
    textColumns: [],
    dateColumns: []
  };

  columns.forEach(column => {
    if (column.type === DataColumnType.text)
      filteredColumns.textColumns.push(column);
    if (column.type === DataColumnType.date)
      filteredColumns.dateColumns.push(column);
    if (column.type === DataColumnType.number)
      filteredColumns.numberColumns.push(column);
  });

  return columns;
}
