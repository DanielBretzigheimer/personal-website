import { Box, Typography } from "@material-ui/core";
import React from "react";
import Imprint from "../imprint/Imprint";

export default function Footer() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" marginTop={1}>
      <Typography variant="caption">© by Daniel Bretzigheimer</Typography>
      <Imprint />
    </Box>
  );
}
