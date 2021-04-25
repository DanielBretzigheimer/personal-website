import { Slider, Typography } from "@material-ui/core";
import React from "react";
import TimelineItems from "../../../data/TimelineItems";
import TimelineFilterProps from "./TimelineFilterProps";

export default function TeamSizeFilter(props: TimelineFilterProps) {
  const maxTeamSize = TimelineItems().reduce((max, i) => Math.max(max, i.teamSize ?? 0), 0);
  const marks = [];

  for (let i = 0; i <= maxTeamSize; i++) {
    marks.push({ value: i, label: i.toString() });
  }

  function teamSizeFilterChanged(value: number[]) {}

  return (
    <>
      <Typography>Team größe</Typography>
      <Slider
        value={[0, maxTeamSize]}
        max={maxTeamSize}
        marks={marks}
        valueLabelDisplay={"auto"}
        onChange={(_event, value) =>
          typeof value !== "number" ? teamSizeFilterChanged(value) : null
        }
      />
    </>
  );
}
