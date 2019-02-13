import * as React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { Sorting, Grouping } from "@devexpress/dx-react-grid";

export function useSorting(
  grouping: Grouping[],
  setCurrentPage: (page: number) => any
) {
  const [sorting, setSorting] = useLocalStorage<Sorting[]>("sorting2", []);

  const setNewSorting = (newSorting: Sorting[]) => {
    setSorting(newSorting);
    if (sorting.length || newSorting.length) {
      if (sorting.length && newSorting.length) {
        if (
          sorting[0].columnName !== newSorting[0].columnName ||
          sorting[0].direction !== newSorting[0].direction
        ) {
          setCurrentPage(0);
        }
      } else {
        setCurrentPage(0);
      }
    }
  };

  const groupedSorting = React.useMemo(
    () => createGroupedSorting(grouping, sorting),
    [grouping, sorting]
  );
  return { sorting: groupedSorting, setSorting: setNewSorting };
}

export function createGroupedSorting(grouping: Grouping[], sorting: Sorting[]) {
  const newSorting: Sorting[] = [];
  for (let index = 0; index < grouping.length; index++) {
    const sortedColumn = sorting.length > index ? sorting[index] : undefined;
    const groupedColumn = grouping.length > index ? grouping[index] : undefined;

    if (
      groupedColumn &&
      sortedColumn &&
      sortedColumn.columnName === groupedColumn.columnName
    ) {
      newSorting.push(sortedColumn);
    }

    if (
      groupedColumn &&
      (!sortedColumn || sortedColumn.columnName !== groupedColumn.columnName)
    ) {
      newSorting.push({
        columnName: groupedColumn.columnName,
        direction: "asc"
      });
    }
  }

  const lastSortedColumn = sorting[sorting.length - 1];

  if (
    newSorting
      .map(sort => sort.columnName)
      .indexOf(lastSortedColumn.columnName) === -1
  ) {
    newSorting.push(lastSortedColumn);
  }

  return newSorting;
}
