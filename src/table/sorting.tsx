import * as React from "react";
import {
  SortingState as DSortingState,
  Sorting
} from "@devexpress/dx-react-grid";
import createContainer from "constate";
import { useLocalStorage } from "./local-storage";

export function useSorting() {
  const [sorting, setSorting] = useLocalStorage<Sorting[]>("sorting", []);
  return { sorting, setSorting };
}

export const SortingContainer = createContainer(useSorting);

export const SortingState = () => {
  const { sorting, setSorting } = React.useContext(SortingContainer.Context);
  console.log("sorting");
  return <DSortingState sorting={sorting} onSortingChange={setSorting} />;
};
