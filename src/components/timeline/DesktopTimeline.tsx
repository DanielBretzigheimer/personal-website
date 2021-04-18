import { makeStyles } from "@material-ui/core";
import { TimelineItem, TimelineContent } from "@material-ui/lab";
import Timeline from "@material-ui/lab/Timeline";
import React from "react";
import Seperator from "./Seperator";
import TimelineCard from "./TimelineCard";
import TimelineProps from "./TimelineProps";

const useStyle = makeStyles(() => ({
  timelineContent: {
    marginBottom: "-50px",
  },
}));

export default function DesktopTimeline(props: TimelineProps) {
  const classes = useStyle();
  return (
    <Timeline align="alternate">
      {props.items.map((item, index) => {
        const isLast = index === props.items.length - 1;
        return (
          <TimelineItem key={index}>
            <Seperator isLast={isLast} item={item} />
            <TimelineContent className={isLast ? "" : classes.timelineContent}>
              <TimelineCard item={item} activeFilters={props.filters} />
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
