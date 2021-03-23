import { Box, Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import TimelineItemContent from "./TimelineItemContent";

interface TimelineCardProps {
  item: TimelineItemContent;
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

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{props.item.title}</Typography>
        <Typography variant="caption">{props.item.caption}</Typography>
        {getContent()}
      </CardContent>
    </Card>
  );
}
