import TimelineFilter from "../model/TimelineFilter";
import TimelineItemContent from "../model/TimelineItemContent";

export default function Filter(item: TimelineItemContent, filters: Array<TimelineFilter>) {
  if (filters.length === 0) return true;

  const keywordFilters = filters.filter((f) => f.type === "keyword").map((f) => f.value);
  const typeFilters = filters.filter((f) => f.type === "type").map((f) => f.value);

  const hasKeyword =
    (keywordFilters.length === 0 ||
      item.keywords?.some((keyword) => keywordFilters.includes(keyword))) ??
    false;
  const hasType = typeFilters.length === 0 || typeFilters.includes(item.type);

  return hasKeyword && hasType;
}
