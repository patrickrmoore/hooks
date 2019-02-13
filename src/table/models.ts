import { Column } from "@devexpress/dx-react-grid";

export enum DataColumnType {
  text,
  number,
  date
}

export interface TypedDataColumn extends Column {
  type: DataColumnType;
}
