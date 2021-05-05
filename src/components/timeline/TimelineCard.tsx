import { Box, Card, CardContent, Chip, Tooltip, Typography } from "@material-ui/core";
import { AccountGroupOutline, AccountMultipleOutline, AccountOutline } from "mdi-material-ui";
import React from "react";
import { useTranslation } from "react-i18next";
import TimelineFilter from "../../model/TimelineFilter";
import TimelineItemContent, { maxTeamSizeValue } from "../../model/TimelineItemContent";
import ChipCollection from "../ChipCollection";

interface TimelineCardProps {
  item: TimelineItemContent;
  activeFilters: Array<TimelineFilter>;
}

export default function TimelineCard(props: TimelineCardProps) {
  const { t } = useTranslation();

  function getContent() {
    if (typeof props.item.content === "string") {
      return (
        <Box whiteSpace="pre-line">
          <Typography>{props.item.content}</Typography>
        </Box>
      );
    }

    return props.item.content;
  }

  function getKeywords() {
    const skills = props.item.skills;
    if (skills) {
      return (
        <ChipCollection>
          {skills.map((skill, i) => {
            const color = props.activeFilters.map((f) => f.value).includes(skill.name)
              ? "secondary"
              : "default";
            return <Chip key={i} variant="outlined" color={color} label={t(skill.name)} />;
          })}
        </ChipCollection>
      );
    }

    return null;
  }

  function getTeamSize() {
    if (props.item.teamSize) {
      const icon =
        props.item.teamSize === 1 ? (
          <AccountOutline />
        ) : props.item.teamSize === 2 ? (
          <AccountMultipleOutline />
        ) : (
          <AccountGroupOutline />
        );

      const teamSize =
        props.item.teamSize > maxTeamSizeValue ? `${maxTeamSizeValue - 1}+` : props.item.teamSize;
      return (
        <Tooltip placement="left" title={t("team-size-label", { teamSize }).toString()}>
          {icon}
        </Tooltip>
      );
    }

    return null;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{props.item.title}</Typography>
        <Box display="flex" alignItems="center">
          <Box flexGrow="1">
            <Typography variant="caption">{props.item.caption}</Typography>
          </Box>
          {getTeamSize()}
        </Box>
        {getContent()}
        {getKeywords()}
      </CardContent>
    </Card>
  );
}
