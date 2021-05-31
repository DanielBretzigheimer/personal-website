import TimelineFilter from "../model/TimelineFilter";
import { TimelineItemContent } from "../model/TimelineItemContent";

export default function Filter(item: TimelineItemContent, filters: Array<TimelineFilter>) {
  if (filters.length === 0) return true;

  const keywordFilters = filters.filter((f) => f.type === "keyword").map((f) => f.value);
  const typeFilters = filters.filter((f) => f.type === "type").map((f) => f.value);
  const teamSize = filters.find((f) => f.type === "teamSize");

  const hasKeyword =
    (keywordFilters.length === 0 ||
      item.skills?.some((skill) => keywordFilters.includes(skill.name))) ??
    false;
  const hasType = typeFilters.length === 0 || typeFilters.includes(item.type);
  const hasTeamSize =
    !teamSize ||
    (item.teamSize && teamSize.value[0] <= item.teamSize && teamSize.value[1] >= item.teamSize);

  return hasKeyword && hasType && hasTeamSize;
}
