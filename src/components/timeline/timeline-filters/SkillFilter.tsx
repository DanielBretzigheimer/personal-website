import { Box, Chip, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import SkillData from "../../../data/SkillData";
import ChipCollection from "../../ChipCollection";
import TimelineFilterProps from "./TimelineFilterProps";

export default function SkillFilter(props: TimelineFilterProps) {
  const { t } = useTranslation();
  const skillGroups = SkillData();

  function addFilter(value: string) {
    props.addFilter({ type: "keyword", value: value });
  }

  return (
    <>
      <Typography variant="h6">{t("skill")}</Typography>
      {skillGroups.map((group, i) => (
        <Box key={i}>
          <Typography>{t(group.name)}</Typography>
          <ChipCollection>
            {group.skills.map((skill, i) => {
              const active = props.filters.find(
                (f) => f.type === "keyword" && f.value === skill.name
              );
              const color = active ? "primary" : "default";
              return (
                <Chip
                  key={i}
                  label={t(skill.name)}
                  onClick={() => (active ? props.removeFilter(active) : addFilter(skill.name))}
                  color={color}
                  variant={active ? "filled" : "outlined"}
                />
              );
            })}
          </ChipCollection>
        </Box>
      ))}
    </>
  );
}
