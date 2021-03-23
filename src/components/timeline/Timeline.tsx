import { Hidden } from "@material-ui/core";
import React from "react";
import CategoryHeader from "../CategoryHeader";
import ResumeIcon from "mdi-material-ui/FileAccountOutline";
import EducationIcon from "mdi-material-ui/SchoolOutline";
import BookEducationIcon from "mdi-material-ui/BookEducationOutline";
import MobileTimeline from "./MobileTimeline";
import DesktopTimeline from "./DesktopTimeline";
import TimelineItemContent from "./TimelineItemContent";
import ProjectIcon from "mdi-material-ui/StarOutline";

export default function TimelineOverview() {
  const now = new Date();
  const nowString = `${(now.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${now.getFullYear()}`;
  const timelineItems: Array<TimelineItemContent> = [
    {
      title: "Schulische Ausbildung",
      caption: "09/2002 - 07/2012",
      content:
        "Johannes-Obernburger-Volksschule\nMain-Limes-Realschule\nAbschluss: Mittlere Reife",
      icon: <EducationIcon />,
    },
    {
      title: "Berufsausbildung",
      caption: "09/2012 - 07/2015",
      content:
        "Ausbildung als Fachinformatiker Anwendungsentwicklung bei APE Engineering GmbH",
      icon: <EducationIcon />,
    },
    {
      title: "Microsoft Certified Professional Prüfung",
      caption: "03/2019",
      icon: <EducationIcon />,
    },
    {
      title: "Compliance Schulung",
      caption: "02/2021",
      icon: <EducationIcon />,
    },
    {
      title: "Persönliche Webseite",
      caption: "03/2021",
      content:
        "Als kleines Übungsprojekt für React gestartet, ist diese Webseite entstanden.",
      icon: <BookEducationIcon />,
    },
    {
      title: "Browsergame Entwicklung",
      caption: `03/2020 - ${nowString}`,
      content:
        "Seit März 2020 gehöre ich dem ehrenamtlichen Entwicklerteam des Browsergames Hidden Empire an.",
      icon: <ProjectIcon />,
    },
  ];

  return (
    <>
      <CategoryHeader>
        <ResumeIcon fontSize="large" />
        Lebenslauf
      </CategoryHeader>
      <Hidden mdDown>
        <DesktopTimeline items={timelineItems} />
      </Hidden>
      <Hidden mdUp>
        <MobileTimeline items={timelineItems} />
      </Hidden>
    </>
  );
}
