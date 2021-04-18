import { Box, Card, CardContent, Chip, Typography } from "@material-ui/core";
import React from "react";
import TimelineItemContent from "../../model/TimelineItemContent";
import ChipCollection from "../ChipCollection";

interface TimelineCardProps {
  item: TimelineItemContent;
  activeFilters: Array<string>;
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
        <ChipCollection
          chips={keywords.map((keyword) => {
            const color = props.activeFilters.includes(keyword) ? "secondary" : "default";
            return <Chip variant="outlined" color={color} label={keyword} />;
          })}
        />
      );
    }

    return null;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{props.item.title}</Typography>
        <Typography variant="caption">{props.item.caption}</Typography>
        {getContent()}
        {getKeywords()}
      </CardContent>
    </Card>
  );
}
