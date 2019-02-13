import { useLocalStorage } from "./useLocalStorage";
import { Grouping } from "@devexpress/dx-react-grid";

export function useGrouping() {
  const [grouping, setGrouping] = useLocalStorage<Grouping[]>("grouping", []);
  const [expandedGroups, setExpandedGroups] = useLocalStorage<string[]>(
    "expandedGroups",
    []
  );
  return { grouping, setGrouping, expandedGroups, setExpandedGroups };
}
