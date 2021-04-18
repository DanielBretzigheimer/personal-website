import { Box, Typography } from "@material-ui/core";
import React from "react";

interface SkillTitleProps {
  title: string;
}

export default function SkillTitle(props: SkillTitleProps) {
  return (
    <Box textAlign="center">
      <Typography variant="h5">{props.title}</Typography>
    </Box>
  );
}
