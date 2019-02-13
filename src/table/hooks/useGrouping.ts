import { useLocalStorage } from "./useLocalStorage";
import { Grouping } from "@devexpress/dx-react-grid";

export function useGrouping(templateName: string) {
  const [grouping, setGrouping] = useLocalStorage<Grouping[]>(
    `${templateName}.grouping`,
    []
  );
  const [expandedGroups, setExpandedGroups] = useLocalStorage<string[]>(
    `${templateName}.grouping.expanded`,
    []
  );
  return { grouping, setGrouping, expandedGroups, setExpandedGroups };
}
