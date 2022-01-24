import { Box, Stack } from "@mui/material";
import React from "react";

interface ChipCollectionProps {
  children: Array<React.ReactNode>;
}

export default function ChipCollection(props: ChipCollectionProps) {
  return (
    <Stack direction="row" gap={1} marginBottom={1} marginTop={1} flexWrap="wrap">
      {props.children.map((chip, i) => (
        <Box key={i}>{chip}</Box>
      ))}
    </Stack>
  );
}
