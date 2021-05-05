import { Box, Button, Divider, Grid, IconButton, Typography } from "@material-ui/core";
import { Close } from "mdi-material-ui";
import React from "react";
import { useTranslation } from "react-i18next";
import SkillFilter from "./SkillFilter";
import TeamSizeFilter from "./TeamSizeFilter";
import TimelineFilterProps from "./TimelineFilterProps";
import TypeFilter from "./TypeFilter";

interface TimelineFiltersProps extends TimelineFilterProps {
  visibleItemCount: number;
  onClose: () => void;
}

export default function TimelineFilters(props: TimelineFiltersProps) {
  const { t } = useTranslation();

  function resetFilters() {
    props.removeFilter(props.filters);
  }

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        marginLeft={2}
        marginRight={2}
        marginTop={1}
        marginBottom={1}
      >
        <Button color="primary" onClick={resetFilters}>
          {t("reset")}
        </Button>
        <Box flexGrow={1} textAlign="center">
          <Typography>
            {t("results")}: {props.visibleItemCount}
          </Typography>
        </Box>
        <IconButton onClick={props.onClose}>
          <Close />
        </IconButton>
      </Box>
      <Divider />
      <Box padding={3}>
        <Grid container>
          <Grid item xs={12}>
            <TypeFilter
              addFilter={props.addFilter}
              removeFilter={props.removeFilter}
              filters={props.filters}
            />
          </Grid>
          <Grid item xs={12}>
            <SkillFilter
              addFilter={props.addFilter}
              removeFilter={props.removeFilter}
              filters={props.filters}
            />
          </Grid>
          <Grid item xs={12}>
            <TeamSizeFilter
              addFilter={props.addFilter}
              removeFilter={props.removeFilter}
              filters={props.filters}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
