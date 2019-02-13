import * as React from "react";
import {
  GroupingState as DGroupingState,
  Grouping
} from "@devexpress/dx-react-grid";
import { TableContainer } from "./table-context";

export const GroupingState = () => {
  const {
    grouping: { grouping, setGrouping, expandedGroups, setExpandedGroups },
    paging: { setCurrentPage },
    sorting: { setSorting }
  } = React.useContext(TableContainer.Context);

  return React.useMemo(() => {
    console.log("grouping");
    return (
      <DGroupingState
        grouping={grouping}
        onGroupingChange={grouping => {
          setGrouping(grouping);
          setCurrentPage(0);
        }}
        expandedGroups={expandedGroups}
        onExpandedGroupsChange={setExpandedGroups}
      />
    );
  }, [grouping, expandedGroups]);
};
