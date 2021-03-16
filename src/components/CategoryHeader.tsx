import { Box, Typography } from "@material-ui/core";
import React, { ReactNode } from "react";

interface CategoryHeaderProps {
  children?: ReactNode;
}

export default function CategoryHeader(props: CategoryHeaderProps) {
  return (
    <Box textAlign="center">
      <Typography variant="h3">{props.children}</Typography>
    </Box>
  );
}
