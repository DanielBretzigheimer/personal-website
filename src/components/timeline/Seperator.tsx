import { TimelineConnector, TimelineDot, TimelineSeparator } from "@material-ui/lab";
import React from "react";
import { TimelineItemContent } from "../../model/TimelineItemContent";
import EducationIcon from "mdi-material-ui/SchoolOutline";
import ProjectIcon from "mdi-material-ui/StarOutline";
import { Tooltip } from "@material-ui/core";

interface SeperatorProps {
  isLast: boolean;
  item: TimelineItemContent;
}

export default function Seperator(props: SeperatorProps) {
  const color =
    props.item.type === "Work" ? "primary" : props.item.type === "Private" ? "secondary" : "grey";

  function getIcon() {
    switch (props.item.type) {
      case "Work":
        return <ProjectIcon />;
      case "Private":
        return <ProjectIcon />;
      case "Education":
        return <EducationIcon />;
    }
  }

  function getTitle() {
    switch (props.item.type) {
      case "Work":
        return "Arbeit";
      case "Private":
        return "Privat";
      case "Education":
        return "Bildung";
    }
  }

  return (
    <TimelineSeparator>
      <TimelineDot color={color} variant="outlined">
        <Tooltip title={getTitle()}>{getIcon()}</Tooltip>
      </TimelineDot>
      {props.isLast ? <></> : <TimelineConnector />}
    </TimelineSeparator>
  );
}
