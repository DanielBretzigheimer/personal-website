import { Box, LinearProgress, Typography } from "@material-ui/core";
import React from "react";

export interface SkillLineProps {
  skill: string;
  value: number;
}

export default function SkillLine(props: SkillLineProps) {
  return (
    <Box marginTop={1.5} marginBottom={1.5}>
      <Box display="flex">
        <Box flexGrow={1}>
          <Typography>{props.skill}</Typography>
        </Box>
        <Typography>{props.value} %</Typography>
      </Box>
      <LinearProgress variant="determinate" value={props.value} />
    </Box>
  );
}
