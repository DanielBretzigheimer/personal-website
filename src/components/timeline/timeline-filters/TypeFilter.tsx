import { Chip, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import TimelineItems from "../../../data/TimelineItems";
import ChipCollection from "../../ChipCollection";
import TimelineFilterProps from "./TimelineFilterProps";

export default function TypeFilter(props: TimelineFilterProps) {
  const { t } = useTranslation();
  const types = Array.from(new Set<string>(TimelineItems().map((item) => item.type)));

  function addFilter(type: "keyword" | "teamSize" | "type", value: string) {
    props.addFilter({ type, value });
  }

  return (
    <>
      <Typography variant="h6">{t("type")}</Typography>
      <ChipCollection>
        {types.map((type, i) => {
          const active = props.filters.find((f) => f.type === "type" && f.value === type);
          const color = type === "Work" ? "primary" : type === "Private" ? "secondary" : "default";
          return (
            <Chip
              key={i}
              label={t(type.toLocaleLowerCase())}
              onClick={() => (active ? props.removeFilter(active) : addFilter("type", type))}
              color={color}
              variant={active ? "filled" : "outlined"}
            />
          );
        })}
      </ChipCollection>
    </>
  );
}
