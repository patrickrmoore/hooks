import * as React from "react";
import { PagingState as DPagingState } from "@devexpress/dx-react-grid";
import { PagingPanel as DPagingPanel } from "@devexpress/dx-react-grid-bootstrap4";
import createContainer from "constate";
import { useLocalStorage } from "./local-storage";

export function usePagination() {
  const [currentPage, setCurrentPage] = useLocalStorage("currentPage", 0);
  const [pageSize, setPageSize] = useLocalStorage("pageSize", 15);
  const [pageSizes, setPageSizes] = React.useState([1, 15, 25, 50]);

  return { currentPage, setCurrentPage, pageSizes, pageSize, setPageSize };
}

export const PaginationContainer = createContainer(usePagination);

export const PagingState = () => {
  const {
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize
  } = React.useContext(PaginationContainer.Context);
  console.log("pagination");
  return (
    <DPagingState
      currentPage={currentPage}
      onCurrentPageChange={setCurrentPage}
      pageSize={pageSize}
      onPageSizeChange={setPageSize}
    />
  );
};

export const PagingPanel = () => {
  const { pageSizes } = React.useContext(PaginationContainer.Context);
  return <DPagingPanel pageSizes={pageSizes} />;
};
