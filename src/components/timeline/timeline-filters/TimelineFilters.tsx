import { Box, Button, Divider, Grid, IconButton, Typography } from "@material-ui/core";
import { Close } from "mdi-material-ui";
import React from "react";
import TeamSizeFilter from "./TeamSizeFilter";
import TimelineFilterProps from "./TimelineFilterProps";
import TypeFilter from "./TypeFilter";

interface TimelineFiltersProps extends TimelineFilterProps {
  visibleItemCount: number;
  onClose: () => void;
}

export default function TimelineFilters(props: TimelineFiltersProps) {
  // "keyword" | "teamSize" | "text" | "type"

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
          Zurücksetzen
        </Button>
        <Box flexGrow={1} textAlign="center">
          <Typography>Ergebnisse: {props.visibleItemCount}</Typography>
        </Box>
        <IconButton onClick={props.onClose}>
          <Close />
        </IconButton>
      </Box>
      <Divider />
      <Box margin={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TypeFilter
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
          <Grid item xs={12}></Grid>
        </Grid>
      </Box>
    </>
  );
}
