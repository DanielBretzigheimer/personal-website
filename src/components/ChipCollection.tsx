import { Box, makeStyles } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  chipList: {
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    padding: 0,
    marginLeft: theme.spacing(-0.5),
    marginRight: theme.spacing(-0.5),
    marginBlockStart: 0,
  },
  chip: {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    marginTop: theme.spacing(1),
  },
}));

interface ChipCollectionProps {
  chips: Array<React.ReactNode>;
}

export default function ChipCollection(props: ChipCollectionProps) {
  const classes = useStyle();

  return (
    <Box component="ul" className={classes.chipList}>
      {props.chips.map((chip, i) => (
        <li key={i} className={classes.chip}>
          {chip}
        </li>
      ))}
    </Box>
  );
}
