import { Chip, Typography } from "@material-ui/core";
import React from "react";
import TimelineItems from "../../../data/TimelineItems";
import ChipCollection from "../../ChipCollection";
import TimelineFilterProps from "./TimelineFilterProps";

export default function TypeFilter(props: TimelineFilterProps) {
  const types = Array.from(new Set<string>(TimelineItems().map((item) => item.type)));

  function addFilter(type: "keyword" | "teamSize" | "type", value: string) {
    props.addFilter({ type, value });
  }

  function typeToLabel(type: string) {
    switch (type) {
      case "Education":
        return "Bildung";
      case "Work":
        return "Beruflich";
      case "Private":
        return "Privat";
      default:
        return type;
    }
  }

  return (
    <>
      <Typography variant="h6">Typ</Typography>
      <ChipCollection>
        {types.map((type, i) => {
          const filter = props.filters.find((f) => f.type === "type" && f.value === type);
          const color = filter ? "primary" : "default";
          return (
            <Chip
              key={i}
              label={typeToLabel(type)}
              onClick={() => (filter ? props.removeFilter(filter) : addFilter("type", type))}
              color={color}
            />
          );
        })}
      </ChipCollection>
    </>
  );
}
