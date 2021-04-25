import TimelineFilter from "../../model/TimelineFilter";
import TimelineItemContent from "../../model/TimelineItemContent";

export default interface TimelineProps {
  items: Array<TimelineItemContent>;
  filters: Array<TimelineFilter>;
}
