import {
  TimelineConnector,
  TimelineDot,
  TimelineSeparator,
} from "@material-ui/lab";
import React from "react";
import TimelineItemContent from "../../model/TimelineItemContent";
import EducationIcon from "mdi-material-ui/SchoolOutline";
import ProjectIcon from "mdi-material-ui/StarOutline";

interface SeperatorProps {
  isLast: boolean;
  item: TimelineItemContent;
}

export default function Seperator(props: SeperatorProps) {
  const color =
    props.item.type === "Work"
      ? "primary"
      : props.item.type === "Private"
      ? "secondary"
      : "grey";

  return (
    <TimelineSeparator>
      <TimelineDot color={color} variant="outlined">
        {props.item.type === "Education" ? <EducationIcon /> : <ProjectIcon />}
      </TimelineDot>
      {props.isLast ? <></> : <TimelineConnector />}
    </TimelineSeparator>
  );
}
