import { TimelineItem, TimelineContent } from "@mui/lab";
import Timeline from "@mui/lab/Timeline";
import React from "react";
import Seperator from "./Seperator";
import TimelineCard from "./TimelineCard";
import TimelineProps from "./TimelineProps";
import "./DesktopTimeline.scss";

export default function DesktopTimeline(props: TimelineProps) {
  /**
   * Pointer Events have to be disabled for the timeline item to allow click through the margin. :(
   */
  return (
    <Timeline position="alternate">
      {props.items.map((item, index) => {
        const isLast = index === props.items.length - 1;
        return (
          <TimelineItem key={index} style={{ pointerEvents: "none" }}>
            <Seperator isLast={isLast} item={item} />
            <TimelineContent
              style={{ pointerEvents: "all" }}
              sx={{ marginBottom: isLast ? 0 : "-50px" }}
            >
              <TimelineCard item={item} activeFilters={props.filters} />
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
