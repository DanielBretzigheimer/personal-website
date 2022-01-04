import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

interface SkillTitleProps {
  title: string;
}

export default function SkillTitle(props: SkillTitleProps) {
  const { t } = useTranslation();

  return (
    <Box textAlign="center">
      <Typography variant="h5">{t(props.title)}</Typography>
    </Box>
  );
}
