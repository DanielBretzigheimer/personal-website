import { Slider, Typography } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import TimelineItems from "../../../data/TimelineItems";
import { maxTeamSizeValue } from "../../../model/TimelineItemContent";
import TimelineFilterProps from "./TimelineFilterProps";

export default function TeamSizeFilter(props: TimelineFilterProps) {
  const { t } = useTranslation();
  const maxTeamSize = TimelineItems().reduce((max, i) => Math.max(max, i.teamSize ?? 1), 1);
  const maxSliderValue = Math.min(maxTeamSize, maxTeamSizeValue);
  const [teamSizeFilterValues, setTeamSizeFilterValues] = useState([0, maxSliderValue]);
  const marks = new Array<{ value: number; label: ReactNode }>();

  useEffect(() => {
    const currentFilter = props.filters.find((f) => f.type === "teamSize");
    setTeamSizeFilterValues(
      currentFilter && Array.isArray(currentFilter.value)
        ? currentFilter.value
        : [0, maxSliderValue]
    );
  }, [props.filters, maxSliderValue]);

  for (let i = 0; i <= maxSliderValue; i++) {
    marks.push({ value: i, label: i === maxSliderValue ? `${i - 1}+` : i.toString() });
  }

  function teamSizeFilterChanged(value: number[]) {
    setTeamSizeFilterValues(value);

    const [start, end] = value;
    if (start === 0 && end === maxSliderValue) {
      const teamSizeFilter = props.filters.find((f) => f.type === "teamSize");
      if (teamSizeFilter) props.removeFilter(teamSizeFilter);
    } else if (end === maxSliderValue) {
      props.addFilter({ type: "teamSize", value: [start, maxTeamSize] });
    } else {
      props.addFilter({ type: "teamSize", value });
    }
  }

  function labelFormat(value: number) {
    return marks.find((m) => m.value === value)?.label ?? "-";
  }

  return (
    <>
      <Typography variant="h6">{t("team-size")}</Typography>
      <Slider
        value={teamSizeFilterValues}
        min={0}
        max={maxSliderValue}
        marks={marks}
        valueLabelFormat={labelFormat}
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
