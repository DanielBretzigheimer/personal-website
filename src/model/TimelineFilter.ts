export default interface TimelineFilter {
  type: "keyword" | "teamSize" | "text" | "type";
  value: string | number[];
}
