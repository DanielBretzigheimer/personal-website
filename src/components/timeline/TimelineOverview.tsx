import { Hidden, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MobileTimeline from "./MobileTimeline";
import DesktopTimeline from "./DesktopTimeline";
import Skills from "../skills/Skills";
import TimelineItems from "../../data/TimelineItems";
import Skill from "../../model/Skill";
import TimelineFilterHeader from "./TimelineHeader";
import TimelineFilter from "../../model/TimelineFilter";
import Filter from "../../services/FilterService";

export default function TimelineOverview() {
  const [timelineItems, setTimelineItems] = useState(TimelineItems());
  const [filters, setFilters] = useState(new Array<TimelineFilter>());

  useEffect(() => {
    const filtered = TimelineItems().filter((item) => Filter(item, filters));
    setTimelineItems(filtered);
  }, [filters]);

  function addSkillFilter(skill: Skill) {
    addFilter({ type: "keyword", value: skill.name });
  }

  function addFilter(filter: TimelineFilter) {
    setFilters([...filters, filter]);
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
          <span>Keine Einträge für diese Filter gefunden. </span>
          <span role="img" aria-label="Trauriger Smiley">
            😥
          </span>
        </Typography>
      )}
    </>
  );
}
