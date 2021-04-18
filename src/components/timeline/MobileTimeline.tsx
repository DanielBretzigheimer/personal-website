import { makeStyles } from "@material-ui/core";
import { Timeline, TimelineItem, TimelineOppositeContent } from "@material-ui/lab";
import React from "react";
import Seperator from "./Seperator";
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
              <TimelineCard item={item} activeFilters={props.filters} />
            </TimelineOppositeContent>
            <Seperator isLast={isLast} item={item} />
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
