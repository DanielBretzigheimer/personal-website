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
          const filter = props.filters.find((f) => f.type === "type" && f.value === type);
          const color = filter ? "primary" : "default";
          return (
            <Chip
              key={i}
              label={t(type.toLocaleLowerCase())}
              onClick={() => (filter ? props.removeFilter(filter) : addFilter("type", type))}
              color={color}
            />
          );
        })}
      </ChipCollection>
    </>
  );
}
