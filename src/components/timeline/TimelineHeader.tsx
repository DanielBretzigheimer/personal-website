import { Box, Chip, Drawer, IconButton, Snackbar, Typography } from "@material-ui/core";
import { FilterOutline } from "mdi-material-ui";
import React, { useState } from "react";
import ResumeIcon from "mdi-material-ui/FileAccountOutline";
import TimelineFilter from "../../model/TimelineFilter";
import CategoryHeader from "../CategoryHeader";
import ChipCollection from "../ChipCollection";
import TimelineFilters from "./timeline-filters/TimelineFilters";
import IntersectionNotifier from "../IntersectionNotifier";

interface TimelineHeaderProps {
  filters: Array<TimelineFilter>;
  visibleItemCount: number;
  removeFilter: (filter: TimelineFilter | Array<TimelineFilter>) => void;
  addFilter: (filter: TimelineFilter) => void;
}

export default function TimelineFilterHeader(props: TimelineHeaderProps) {
  const [skillHelpOpen, setSkillHelpOpen] = useState(false);
  const [filtersDrawerOpen, setFiltersDrawerOpen] = useState(false);
  const timelineHelpShownKey = "Timeline_Help_Shown";
  let shown = localStorage.getItem(timelineHelpShownKey) === "true";

  function getFilterLabel(filter: TimelineFilter) {
    switch (filter.type) {
      case "teamSize":
        return `Teamgröße zwischen ${filter.value[0]} - ${filter.value[1]}`;
      case "type":
        return `Typ: ${filter.value}`;
      default:
        return filter.value;
    }
  }

  function onResumeShown() {
    if (!shown) {
      setSkillHelpOpen(true);
      localStorage.setItem(timelineHelpShownKey, "true");
      shown = true;
    }
  }

  function filtersDrawerContent() {
    return (
      <TimelineFilters
        addFilter={props.addFilter}
        removeFilter={props.removeFilter}
        filters={props.filters}
        visibleItemCount={props.visibleItemCount}
        onClose={() => setFiltersDrawerOpen(false)}
      />
    );
  }

  return (
    <>
      <IntersectionNotifier onShow={onResumeShown}>
        <Box display="flex" alignItems="baseline">
          <Box flexGrow={1}>
            <CategoryHeader>
              <ResumeIcon fontSize="large" color="secondary" />
              Lebenslauf
            </CategoryHeader>
          </Box>
          <IconButton onClick={() => setFiltersDrawerOpen(true)}>
            <FilterOutline />
          </IconButton>
        </Box>
      </IntersectionNotifier>
      <Drawer open={filtersDrawerOpen} onClose={() => setFiltersDrawerOpen(false)} anchor="right">
        {filtersDrawerContent()}
      </Drawer>
      {props.filters.length > 0 ? (
        <Box>
          <Typography>Aktive Filter:</Typography>
          <ChipCollection>
            {props.filters.map((f, i) => (
              <Chip key={i} label={getFilterLabel(f)} onDelete={() => props.removeFilter(f)} />
            ))}
          </ChipCollection>
        </Box>
      ) : null}
      <Snackbar
        open={skillHelpOpen}
        autoHideDuration={6000}
        onClose={() => setSkillHelpOpen(false)}
        message="Tipp: Zum Filtern auf Skill klicken"
      />
    </>
  );
}
