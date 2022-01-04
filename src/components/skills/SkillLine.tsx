import { Box, ButtonBase, LinearProgress, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Skill from "../../model/Skill";

export interface SkillLineProps {
  skill: Skill;
  onClick: (skill: Skill) => void;
}

export default function SkillLine(props: SkillLineProps) {
  const { t } = useTranslation();

  return (
    <ButtonBase
      sx={{ width: "100%", textAlign: "unset" }}
      onClick={() => props.onClick(props.skill)}
    >
      <Box margin={1.5} width="100%">
        <Box display="flex">
          <Box flexGrow={1}>
            <Typography>{t(props.skill.name)}</Typography>
          </Box>
          <Typography>{props.skill.value} %</Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={props.skill.value}
          sx={{ borderRadius: 5, height: 10 }}
        />
      </Box>
    </ButtonBase>
  );
}
