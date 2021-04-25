import { Box, ButtonBase, LinearProgress, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Skill from "../../model/Skill";

const useStyle = makeStyles(() => ({
  progressBar: {
    borderRadius: 5,
    height: 10,
  },
  skillButton: {
    width: "100%",
    textAlign: "unset",
  },
}));

export interface SkillLineProps {
  skill: Skill;
  onClick: (skill: Skill) => void;
}

export default function SkillLine(props: SkillLineProps) {
  const classes = useStyle();

  return (
    <ButtonBase className={classes.skillButton} onClick={() => props.onClick(props.skill)}>
      <Box margin={1.5} width="100%">
        <Box display="flex">
          <Box flexGrow={1}>
            <Typography>{props.skill.name}</Typography>
          </Box>
          <Typography>{props.skill.value} %</Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={props.skill.value}
          className={classes.progressBar}
        />
      </Box>
    </ButtonBase>
  );
}
