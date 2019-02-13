import * as React from "react";
import { PagingState as DPagingState } from "@devexpress/dx-react-grid";
import { TableContainer } from "./table-context";

export const PagingState = () => {
  const {
    paging: { currentPage, setCurrentPage, pageSize, setPageSize }
  } = React.useContext(TableContainer.Context);

  return React.useMemo(() => {
    console.log("pagination");
    return (
      <DPagingState
        currentPage={currentPage}
        onCurrentPageChange={setCurrentPage}
        pageSize={pageSize}
        onPageSizeChange={setPageSize}
      />
    );
  }, [currentPage, pageSize]);
};
