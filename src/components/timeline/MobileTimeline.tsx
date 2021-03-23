import {
  Timeline,
  TimelineConnector,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import React from "react";
import TimelineCard from "./TimelineCard";
import TimelineProps from "./TimelineProps";

export default function MobileTimeline(props: TimelineProps) {
  return (
    <Timeline align="left">
      {props.items.map((item, index) => {
        const isLast = index === props.items.length - 1;
        return (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <TimelineCard item={item} />
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">{item.icon}</TimelineDot>
              {isLast ? <></> : <TimelineConnector />}
            </TimelineSeparator>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
