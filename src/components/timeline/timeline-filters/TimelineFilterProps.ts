import TimelineFilter from "../../../model/TimelineFilter";

export default interface TimelineFilterProps {
  filters: Array<TimelineFilter>;
  addFilter: (filter: TimelineFilter) => void;
  removeFilter: (filter: TimelineFilter | Array<TimelineFilter>) => void;
}
