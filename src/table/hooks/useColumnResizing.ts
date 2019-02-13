import { useLocalStorage } from "./useLocalStorage";
import { TableColumnWidthInfo } from "@devexpress/dx-react-grid";
import { TypedDataColumn } from "../models";

export function createDefaultColumnSizes(
  columns: TypedDataColumn[]
): TableColumnWidthInfo[] {
  return columns.map(column => {
    return {
      columnName: column.name,
      width: 200
    } as TableColumnWidthInfo;
  });
}

export function useColumnResizing(
  templateName: string,
  columns: TypedDataColumn[]
) {
  const [columnWidths, setColumnWidths] = useLocalStorage<
    TableColumnWidthInfo[]
  >(`${templateName}.columnSizing`, createDefaultColumnSizes(columns));

  return { columnWidths, setColumnWidths };
}
