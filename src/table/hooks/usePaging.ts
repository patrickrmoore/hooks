import { useLocalStorage } from "./useLocalStorage";
import * as React from "react";

export function usePagination(templateName: string) {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [pageSize, setPageSize] = useLocalStorage(
    `${templateName}.pageSize`,
    15
  );

  return { currentPage, setCurrentPage, pageSize, setPageSize };
}
