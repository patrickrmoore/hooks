import * as React from "react";
import { TypedDataColumn, DataColumnType } from "./models";

const defaultColumns: TypedDataColumn[] = [
  { name: "firstName", title: "First Name", type: DataColumnType.text },
  { name: "lastName", title: "Last Name", type: DataColumnType.text },
  { name: "age", title: "Age", type: DataColumnType.number }
];

const defaultRows: any[] = [
  { firstName: "Patrick", lastName: "Moore", age: 28 },
  { firstName: "Elise", lastName: "Moore", age: 27 },
  { firstName: "Andrew", lastName: "Moore", age: 32 }
];

export default () => {
  const [columns, setColumns] = React.useState<TypedDataColumn[]>(
    defaultColumns
  );
  const [rows, setRows] = React.useState<any[]>(defaultRows);

  return { columns, rows, setColumns, setRows };
};
