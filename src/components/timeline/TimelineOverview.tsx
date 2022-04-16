import { Hidden, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import MobileTimeline from "./MobileTimeline";
import DesktopTimeline from "./DesktopTimeline";
import Skills from "../skills/Skills";
import TimelineItems from "../../data/TimelineItems";
import Skill from "../../model/Skill";
import TimelineFilterHeader from "./TimelineHeader";
import TimelineFilter from "../../model/TimelineFilter";
import Filter from "../../services/FilterService";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/system";

export default function TimelineOverview() {
  const { t } = useTranslation();
  const [timelineItems, setTimelineItems] = useState(TimelineItems());
  const [filters, setFilters] = useState(new Array<TimelineFilter>());
  const timelineBox = useRef<HTMLElement>();

  useEffect(() => {
    const filtered = TimelineItems().filter((item) => Filter(item, filters));
    setTimelineItems(filtered);
  }, [filters]);

  function addSkillFilter(skill: Skill) {
    if (filters.some((f) => f.type === "keyword" && f.value === skill.name)) return;

    addFilter({ type: "keyword", value: skill.name });
    if (timelineBox.current) timelineBox.current.scrollIntoView({ behavior: "smooth" });
  }

  function addFilter(filter: TimelineFilter) {
    if (filter.type === "teamSize" && filters.some((f) => f.type === "teamSize")) {
      // only one teamSize filter is allowed
      const currentFilter = filters.find((f) => f.type === "teamSize");
      setFilters([...filters.filter((f) => f !== currentFilter), filter]);
    } else {
      setFilters([...filters, filter]);
    }
  }

  function removeFilter(filter: TimelineFilter | Array<TimelineFilter>) {
    if (Array.isArray(filter)) {
      setFilters(filters.filter((f) => !filter.includes(f)));
    } else {
      setFilters(filters.filter((f) => f !== filter));
    }
  }

  return (
    <>
      <Skills onSelection={addSkillFilter} />
      <Box ref={timelineBox} ml={-1} mr={-1}>
        <TimelineFilterHeader
          filters={filters}
          addFilter={addFilter}
          removeFilter={removeFilter}
          visibleItemCount={timelineItems.length}
        />
        {timelineItems.length > 0 ? (
          <>
            <Hidden mdDown>
              <DesktopTimeline items={timelineItems} filters={filters} />
            </Hidden>
            <Hidden mdUp>
              <MobileTimeline items={timelineItems} filters={filters} />
            </Hidden>
          </>
        ) : (
          <Typography>
            <span>{t("no-timeline-items")}</span>
            <span role="img" aria-label="Trauriger Smiley">
              😥
            </span>
          </Typography>
        )}
      </Box>
    </>
  );
}
