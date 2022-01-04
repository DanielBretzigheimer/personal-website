import React from "react";
import { Box, IconButton, Link, Tooltip } from "@mui/material";
import { Github, Gitlab, StackOverflow } from "mdi-material-ui";
import { useTranslation } from "react-i18next";

export default function ProfileLinks() {
  const { t } = useTranslation();

  return (
    <Box>
      <Tooltip title={t("github").toString()}>
        <Link href="https://github.com/DanielBretzigheimer">
          <IconButton size="large">
            <Github />
          </IconButton>
        </Link>
      </Tooltip>
      <Tooltip title={t("gitlab").toString()}>
        <Link href="https://gitlab.com/dbretzigheimer95">
          <IconButton size="large">
            <Gitlab />
          </IconButton>
        </Link>
      </Tooltip>
      <Tooltip title={t("stack-overflow").toString()}>
        <Link href="https://stackoverflow.com/users/2119579/daniel-bretzigheimer">
          <IconButton size="large">
            <StackOverflow />
          </IconButton>
        </Link>
      </Tooltip>
    </Box>
  );
}
