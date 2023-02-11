import { Box, Chip, Drawer, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FilterOutline } from "mdi-material-ui";
import React, { useState } from "react";
import TimelineFilter from "../../model/TimelineFilter";
import CategoryHeader from "../CategoryHeader";
import ChipCollection from "../ChipCollection";
import TimelineFilters from "./timeline-filters/TimelineFilters";
import { useTranslation } from "react-i18next";
import { maxTeamSizeValue } from "../../model/TimelineItemContent";
import { StickyHeader } from "../StickyHeader";

interface TimelineHeaderProps {
  filters: Array<TimelineFilter>;
  visibleItemCount: number;
  removeFilter: (filter: TimelineFilter | Array<TimelineFilter>) => void;
  addFilter: (filter: TimelineFilter) => void;
}

export default function TimelineFilterHeader(props: TimelineHeaderProps) {
  const { t } = useTranslation();
  const [filtersDrawerOpen, setFiltersDrawerOpen] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));

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

  return (
    <>
      <StickyHeader id="curriculum-vitae-header">
        <Box display="flex" alignItems="baseline">
          <Box flexGrow={1}>
            <CategoryHeader>{t("curriculum-vitae")}</CategoryHeader>
          </Box>
          <IconButton onClick={() => setFiltersDrawerOpen(true)} size="large">
            <FilterOutline />
          </IconButton>
        </Box>
      </StickyHeader>
      <Drawer
        variant={isDesktop ? "temporary" : "temporary"}
        open={filtersDrawerOpen}
        onClose={() => setFiltersDrawerOpen(false)}
        anchor="right"
      >
        <TimelineFilters
          addFilter={props.addFilter}
          removeFilter={props.removeFilter}
          filters={props.filters}
          visibleItemCount={props.visibleItemCount}
          onClose={() => setFiltersDrawerOpen(false)}
        />
      </Drawer>
      {props.filters.length > 0 ? (
        <Box marginLeft={2} marginRight={2}>
          <Typography>{t("active-filters")}</Typography>
          <ChipCollection>
            {props.filters.map((f, i) => (
              <Chip
                variant="outlined"
                key={i}
                label={getFilterLabel(f)}
                onDelete={() => props.removeFilter(f)}
              />
            ))}
          </ChipCollection>
        </Box>
      ) : null}
    </>
  );
}
