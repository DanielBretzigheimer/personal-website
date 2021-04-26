import { Slider, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import TimelineItems from "../../../data/TimelineItems";
import TimelineFilterProps from "./TimelineFilterProps";

export default function TeamSizeFilter(props: TimelineFilterProps) {
  const maxTeamSize = TimelineItems().reduce((max, i) => Math.max(max, i.teamSize ?? 1), 1);
  const [teamSizeFilterValues, setTeamSizeFilterValues] = useState([0, maxTeamSize]);
  const marks = [];

  useEffect(() => {
    const currentFilter = props.filters.find((f) => f.type === "teamSize");
    setTeamSizeFilterValues(
      currentFilter && Array.isArray(currentFilter.value) ? currentFilter.value : [0, maxTeamSize]
    );
  }, [props.filters, maxTeamSize]);

  for (let i = 0; i <= maxTeamSize; i++) {
    marks.push({ value: i, label: i.toString() });
  }

  function teamSizeFilterChanged(value: number[]) {
    setTeamSizeFilterValues(value);

    if (value[0] === 0 && value[1] === maxTeamSize) {
      const teamSizeFilter = props.filters.find((f) => f.type === "teamSize");
      if (teamSizeFilter) props.removeFilter(teamSizeFilter);
    } else {
      props.addFilter({ type: "teamSize", value });
    }
  }

  return (
    <>
      <Typography>Teamgröße</Typography>
      <Slider
        value={teamSizeFilterValues}
        min={0}
        max={maxTeamSize}
        marks={marks}
        valueLabelDisplay={"auto"}
        onChange={(_event, value) =>
          typeof value !== "number" ? setTeamSizeFilterValues(value) : null
        }
        onChangeCommitted={(_event, value) =>
          typeof value !== "number" ? teamSizeFilterChanged(value) : null
        }
      />
    </>
  );
}
