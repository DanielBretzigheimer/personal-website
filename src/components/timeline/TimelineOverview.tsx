import { Box, Chip, Hidden, Snackbar, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CategoryHeader from "../CategoryHeader";
import ResumeIcon from "mdi-material-ui/FileAccountOutline";
import MobileTimeline from "./MobileTimeline";
import DesktopTimeline from "./DesktopTimeline";
import Skills from "../skills/Skills";
import TimelineItems from "../../data/TimelineItems";
import ChipCollection from "../ChipCollection";
import IntersectionNotifier from "../IntersectionNotifier";

export default function TimelineOverview() {
  const [filters, setFilters] = useState(new Array<string>());
  const [timelineItems, setTimelineItems] = useState(TimelineItems());
  const [skillHelpOpen, setSkillHelpOpen] = useState(false);
  const timelineHelpShownKey = "Timeline_Help_Shown";
  let shown = localStorage.getItem(timelineHelpShownKey) === "true";

  useEffect(() => {
    const items = TimelineItems();
    const filtered = items.filter((item) => {
      return (
        filters.length === 0 ||
        (item.keywords?.some((keyword) => filters.includes(keyword)) ?? false)
      );
    });
    setTimelineItems(filtered);
  }, [filters]);

  function addFilter(filter: string) {
    if (filters.includes(filter)) return;

    setFilters([...filters, filter]);
  }

  function removeFilter(filter: string) {
    setFilters(filters.filter((f) => f !== filter));
  }

  function onResumeShown() {
    if (!shown) {
      setSkillHelpOpen(true);
      localStorage.setItem(timelineHelpShownKey, "true");
      shown = true;
    }
  }

  return (
    <>
      <Skills onSelection={addFilter} />
      <IntersectionNotifier onShow={onResumeShown}>
        <CategoryHeader>
          <ResumeIcon fontSize="large" color="secondary" />
          Lebenslauf
        </CategoryHeader>
      </IntersectionNotifier>
      {filters.length > 0 ? (
        <Box>
          <span>Aktive Filter:</span>
          <ChipCollection
            chips={filters.map((f, i) => (
              <Chip key={i} label={f} onDelete={() => removeFilter(f)} />
            ))}
          />
        </Box>
      ) : null}
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
      <Snackbar
        open={skillHelpOpen}
        autoHideDuration={6000}
        onClose={() => setSkillHelpOpen(false)}
        message="Drücken Sie auf einen Skill um diesen als Filter zu setzen"
      />
    </>
  );
}
