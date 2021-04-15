import {
  Box,
  Card,
  CardContent,
  Chip,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import TimelineItemContent from "./TimelineItemContent";

const useStyle = makeStyles((theme) => ({
  chipList: {
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    padding: 0,
    marginLeft: theme.spacing(-0.5),
    marginRight: theme.spacing(-0.5),
  },
  chip: {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    marginTop: theme.spacing(1),
  },
}));

interface TimelineCardProps {
  item: TimelineItemContent;
}

export default function TimelineCard(props: TimelineCardProps) {
  const classes = useStyle();

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
        <Box component="ul" className={classes.chipList}>
          {keywords.map((keyword) => (
            <li key={keyword}>
              <Chip
                variant="outlined"
                label={keyword}
                className={classes.chip}
              />
            </li>
          ))}
        </Box>
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
