import { Box, Card, CardContent, Chip, Tooltip, Typography } from "@material-ui/core";
import { AccountGroupOutline, AccountMultipleOutline, AccountOutline } from "mdi-material-ui";
import React from "react";
import TimelineFilter from "../../model/TimelineFilter";
import TimelineItemContent from "../../model/TimelineItemContent";
import ChipCollection from "../ChipCollection";

interface TimelineCardProps {
  item: TimelineItemContent;
  activeFilters: Array<TimelineFilter>;
}

export default function TimelineCard(props: TimelineCardProps) {
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
    const keywords = props.item.keywords;
    if (keywords) {
      return (
        <ChipCollection>
          {keywords.map((keyword, i) => {
            const color = props.activeFilters.map((f) => f.value).includes(keyword)
              ? "secondary"
              : "default";
            return <Chip key={i} variant="outlined" color={color} label={keyword} />;
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

      return (
        <Tooltip placement="left" title={`${props.item.teamSize} Entwickler`}>
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
