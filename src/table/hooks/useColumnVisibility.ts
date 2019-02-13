import { useLocalStorage } from "./useLocalStorage";
import { TypedDataColumn } from "../models";
import * as React from "react";

export function useColumnVisibility(
  templateName: string,
  columns: TypedDataColumn[]
) {
  const [hiddenColumns, setHiddenColumns] = useLocalStorage<string[]>(
    `${templateName}.columnVisibility`,
    []
  );

  return { hiddenColumns, setHiddenColumns };
}

export function createDefaultColumnVisibility(
  columns: TypedDataColumn[],
  hiddenColumns: string[]
) {
  return columns.map(column => {
    return column.name;
  });
}
