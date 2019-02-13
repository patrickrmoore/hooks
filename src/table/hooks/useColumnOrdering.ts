import { useLocalStorage } from "./useLocalStorage";
import { TypedDataColumn } from "../models";

export function createDefaultColumnOrder(columns: TypedDataColumn[]) {
  return columns.map(column => {
    return column.name;
  });
}

export function useColumnOrdering(
  templateName: string,
  columns: TypedDataColumn[]
) {
  const [columnOrder, setColumnOrder] = useLocalStorage<string[]>(
    `${templateName}.columnOrder`,
    createDefaultColumnOrder(columns)
  );

  return { columnOrder, setColumnOrder };
}
