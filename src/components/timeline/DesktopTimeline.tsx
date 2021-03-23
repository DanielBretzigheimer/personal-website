import {
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
} from "@material-ui/lab";
import Timeline from "@material-ui/lab/Timeline";
import React from "react";
import TimelineCard from "./TimelineCard";
import TimelineProps from "./TimelineProps";

export default function DesktopTimeline(props: TimelineProps) {
  return (
    <Timeline align="alternate">
      {props.items.map((item, index) => {
        const isLast = index === props.items.length - 1;
        return (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary">{item.icon}</TimelineDot>
              {isLast ? <></> : <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <TimelineCard item={item} />
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
