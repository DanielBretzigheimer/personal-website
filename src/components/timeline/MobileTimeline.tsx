import { Timeline, TimelineItem, TimelineOppositeContent } from "@mui/lab";
import React from "react";
import Seperator from "./Seperator";
import TimelineCard from "./TimelineCard";
import TimelineProps from "./TimelineProps";

export default function MobileTimeline(props: TimelineProps) {
  return (
    <Timeline position="left">
      {props.items.map((item, index) => {
        const isLast = index === props.items.length - 1;
        return (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <TimelineCard item={item} activeFilters={props.filters} />
            </TimelineOppositeContent>
            <Seperator isLast={isLast} item={item} />
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
