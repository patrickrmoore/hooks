import * as React from "react";
import {
  GroupingState as DGroupingState,
  Grouping
} from "@devexpress/dx-react-grid";
import createContainer from "constate";
import { useLocalStorage } from "./local-storage";

export function useGrouping() {
  const [grouping, setGrouping] = useLocalStorage<Grouping[]>("grouping", []);
  const [expandedGroups, setExpandedGroups] = useLocalStorage<string[]>(
    "expandedGroups",
    []
  );
  return { grouping, setGrouping, expandedGroups, setExpandedGroups };
}

export const GroupingContainer = createContainer(useGrouping);

export const GroupingState = () => {
  const {
    grouping,
    setGrouping,
    expandedGroups,
    setExpandedGroups
  } = React.useContext(GroupingContainer.Context);
  console.log("grouping");
  return (
    <DGroupingState
      grouping={grouping}
      onGroupingChange={setGrouping}
      expandedGroups={expandedGroups}
      onExpandedGroupsChange={setExpandedGroups}
    />
  );
};
