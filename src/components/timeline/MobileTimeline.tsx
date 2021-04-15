import { makeStyles } from "@material-ui/core";
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

const useStyle = makeStyles(() => ({
  timeline: {
    padding: 0,
  },
  timelineContent: {
    paddingLeft: 0,
    textAlign: "left",
  },
}));

export default function MobileTimeline(props: TimelineProps) {
  const classes = useStyle();

  return (
    <Timeline align="left" className={classes.timeline}>
      {props.items.map((item, index) => {
        const isLast = index === props.items.length - 1;
        return (
          <TimelineItem key={index}>
            <TimelineOppositeContent className={classes.timelineContent}>
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
