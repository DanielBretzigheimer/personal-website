export default interface TimelineFilter {
  type: "keyword" | "teamSize" | "type";
  value: string | number[];
}
