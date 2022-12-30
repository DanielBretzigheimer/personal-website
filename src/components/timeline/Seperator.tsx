import { TimelineConnector, TimelineDot, TimelineSeparator } from "@mui/lab";
import { TimelineItemContent } from "../../model/TimelineItemContent";
import EducationIcon from "mdi-material-ui/SchoolOutline";
import ProjectIcon from "mdi-material-ui/StarOutline";
import { Tooltip, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

interface SeperatorProps {
  isLast: boolean;
  item: TimelineItemContent;
}

export default function Seperator(props: SeperatorProps) {
  const { t } = useTranslation();
  const theme = useTheme();
  const color =
    props.item.type === "Work" ? "primary" : props.item.type === "Private" ? "secondary" : "grey";

  function getIcon() {
    switch (props.item.type) {
      case "Work":
        return <ProjectIcon />;
      case "Private":
        return <ProjectIcon />;
      case "Education":
        return <EducationIcon />;
    }
  }

  return (
    <TimelineSeparator sx={{ pointerEvents: "all" }}>
      <Tooltip title={t(props.item.type.toLowerCase()).toString()}>
        <TimelineDot
          color={color}
          variant="outlined"
          sx={{
            background:
              theme.palette.mode === "light"
                ? "rgba(255, 255, 255, 0.25)"
                : "rgba(30, 30, 30, 0.25)",
            backdropFilter: "blur(20px)",
          }}
        >
          {getIcon()}
        </TimelineDot>
      </Tooltip>
      {props.isLast ? <></> : <TimelineConnector />}
    </TimelineSeparator>
  );
}
