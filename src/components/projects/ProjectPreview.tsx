import { Box } from "@mui/material";
import { BigProjectCard } from "./BigProjectCard";

export function ProjectPreview() {
  return (
    <Box className="project-preview" display="flex" justifyContent="center" mt="5vmin" mb="5vmin">
      <BigProjectCard index={0}>
        <img src="/images/projects/hega.png" />
      </BigProjectCard>
      <BigProjectCard index={1}>
        <img src="/images/projects/website.png" />
      </BigProjectCard>
      <BigProjectCard index={2}>
        <img src="/images/projects/mui.png" />
      </BigProjectCard>
      <BigProjectCard index={3}>
        <img src="/images/projects/club.png" />
      </BigProjectCard>
    </Box>
  );
}
