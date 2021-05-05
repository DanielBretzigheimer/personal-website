import { Box, Chip, Drawer, IconButton, makeStyles, Typography } from "@material-ui/core";
import { FilterOutline } from "mdi-material-ui";
import React, { useState } from "react";
import ResumeIcon from "mdi-material-ui/FileAccountOutline";
import TimelineFilter from "../../model/TimelineFilter";
import CategoryHeader from "../CategoryHeader";
import ChipCollection from "../ChipCollection";
import TimelineFilters from "./timeline-filters/TimelineFilters";
import { useTranslation } from "react-i18next";
import { maxTeamSizeValue } from "../../model/TimelineItemContent";

interface TimelineHeaderProps {
  filters: Array<TimelineFilter>;
  visibleItemCount: number;
  removeFilter: (filter: TimelineFilter | Array<TimelineFilter>) => void;
  addFilter: (filter: TimelineFilter) => void;
}

const useStyle = makeStyles(() => ({
  drawer: {
    maxWidth: "500px",
  },
}));

export default function TimelineFilterHeader(props: TimelineHeaderProps) {
  const classes = useStyle();
  const { t } = useTranslation();
  const [filtersDrawerOpen, setFiltersDrawerOpen] = useState(false);

  function getFilterLabel(filter: TimelineFilter) {
    if (filter.type === "teamSize" && Array.isArray(filter.value)) {
      const [start, end] = filter.value;
      return t("team-size-filter", {
        start,
        end: end > maxTeamSizeValue ? `${maxTeamSizeValue - 1}+` : end,
      });
    } else if (filter.type === "type" && typeof filter.value === "string") {
      return t("type-filter", { value: t(filter.value.toLocaleLowerCase()) });
    } else if (typeof filter.value === "string") {
      return t(filter.value);
    }

    return filter.value;
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
      <Box display="flex" alignItems="baseline">
        <Box flexGrow={1}>
          <CategoryHeader>
            <ResumeIcon fontSize="large" color="secondary" />
            {t("curriculum-vitae")}
          </CategoryHeader>
        </Box>
        <IconButton onClick={() => setFiltersDrawerOpen(true)}>
          <FilterOutline />
        </IconButton>
      </Box>
      <Drawer
        className={classes.drawer}
        open={filtersDrawerOpen}
        onClose={() => setFiltersDrawerOpen(false)}
        anchor="right"
      >
        {filtersDrawerContent()}
      </Drawer>
      {props.filters.length > 0 ? (
        <Box>
          <Typography>{t("active-filters")}</Typography>
          <ChipCollection>
            {props.filters.map((f, i) => (
              <Chip key={i} label={getFilterLabel(f)} onDelete={() => props.removeFilter(f)} />
            ))}
          </ChipCollection>
        </Box>
      ) : null}
    </>
  );
}
