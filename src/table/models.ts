import { Column } from "@devexpress/dx-react-grid";

export enum DataColumnType {
  text,
  number,
  date,
  boolean
}

export interface TypedDataColumn extends Column {
  type: DataColumnType;
}
