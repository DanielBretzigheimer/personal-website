import { Hidden } from "@material-ui/core";
import React from "react";
import CategoryHeader from "../CategoryHeader";
import ResumeIcon from "mdi-material-ui/FileAccountOutline";
import EducationIcon from "mdi-material-ui/SchoolOutline";
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
      type: "Education",
    },
    {
      title: "Berufsausbildung",
      caption: "09/2012 - 07/2015",
      content:
        "Ausbildung als Fachinformatiker Anwendungsentwicklung bei APE Engineering GmbH",
      icon: <EducationIcon />,
      type: "Education",
    },
    {
      title: "Maschinensteuerungssoftware",
      caption: "2013 - 2015",
      content:
        "Software zur Auswertung und Konfiguration von Garnreinigungsmaschinen mit Komunikation über eine BUS Schnittstelle",
      icon: <ProjectIcon />,
      type: "Work",
      keywords: ["C#.NET", "WPF", "Unittests"],
    },
    {
      title: "Datenbank Versionsverwaltung",
      caption: "2014",
      content: "Datenbank Versionsverwaltungssoftware für PostgreSQL",
      icon: <ProjectIcon />,
      type: "Work",
      keywords: ["C#.NET", "WPF", "PostgreSQL", "Unittests", "Material Design"],
    },
    {
      title: "Windows Service Entwicklung",
      caption: "2015",
      content: "Windows Service zum Erstellen von XML Dateien",
      icon: <ProjectIcon />,
      type: "Work",
      keywords: ["C#.NET", "OPC UA", "XML", "XSD"],
    },
    {
      title: "Betriebsdatenerfassung",
      caption: "2015 - 2019",
      content: "Betriebsdatenerfassung im Client/Server Prinzip mit REST",
      icon: <ProjectIcon />,
      type: "Work",
      keywords: ["C#.NET", "WPF", "PostgreSQL", "Unittests"],
    },
    {
      title: "Maschinen Übersicht",
      caption: "2016 - 2017",
      content:
        "Software zur Anzeige aller Maschinen einer Fabrik als Webanwendung und integriert in Betriebsdatenerfassung",
      icon: <ProjectIcon />,
      type: "Work",
      keywords: ["GWT", "JAVA", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Update Verwaltungssoftware",
      caption: "2018",
      content:
        "Update Verwaltungssoftware als Webserver mit Telemetriedaten und Kundenverwaltung",
      icon: <ProjectIcon />,
      type: "Work",
      keywords: [
        "C#.NET",
        "ASP.NET Core",
        "Polymer",
        "JavaScript",
        "HTML",
        "CSS",
        "PostgreSQL",
        "Unittests",
      ],
    },
    {
      title: "Order Management System",
      caption: "2018 - 2021",
      content:
        "Bestellungsverwaltungssystem für interne Bestellungen mit REST Schnittstelle und PostgreSQL Datenbank",
      icon: <ProjectIcon />,
      type: "Work",
      keywords: [
        "C#.NET",
        "ASP.NET Core",
        "TypeScript",
        "HTML",
        "CSS",
        "Razor",
        "PostgreSQL",
        "Unittests",
      ],
    },
    {
      title: "Microsoft Certified Professional Prüfung",
      caption: "03/2019",
      icon: <EducationIcon />,
      type: "Education",
    },
    {
      title: "Automatische UI Tests",
      caption: "2020",
      content:
        "Erstellung von automatischen UI Tests für Webanwendung mit Selenium",
      icon: <ProjectIcon />,
      type: "Work",
      keywords: ["C#.NET", "Selenium"],
    },
    {
      title: "Datenanalyse und Benutzerverwaltung",
      caption: "2020",
      content:
        "Erstellung einer Software zur Anzeige von Berichten und der Verwaltung von Benutzern",
      icon: <ProjectIcon />,
      type: "Work",
      keywords: ["C#.NET", "ASP.NET Core", "Microsoft SQL Server"],
    },
    {
      title: "Unterstützung bei der Ausbildung der Auszubildenden",
      caption: "2020",
      content:
        "Zusätzlich zu meinem normalen Arbeitsalltag wurde ich damit beauftragt, bei der Ausbildung der Azubis auszuhelfen. Hierzu gehört unter anderem das Erstellen von Aufgaben für die Auszubildenden und die Beantwortung von Fragen",
      icon: <ProjectIcon />,
      type: "Work",
      keywords: ["C#.NET", "ASP.NET Core", "Microsoft SQL Server"],
    },
    {
      title: "Fitnessspiel Anwendung",
      caption: "2020",
      content:
        "Entwicklung einer Anwendung bei der mit einem Beamer ein Spielfeld an eine Wand projeziert wird und der Spieler darauf befindlichen Objekten ausweichen bzw. diese fangen muss",
      icon: <ProjectIcon />,
      type: "Work",
      keywords: ["Python", "Nvidia Jetson", "Intel Realsense", "Ubuntu"],
    },
    {
      title: "Video Player Anwendung",
      caption: "2020",
      content:
        "Entwicklung einer Software zum Anzeigen von Videos auf einem Beamer, die über eine RabbitMQ Nachricht gesendet werden",
      icon: <ProjectIcon />,
      type: "Work",
      keywords: ["Python", "Ubuntu", "RabbitMQ"],
    },
    {
      title: "Assetverwaltungs Webanwendung",
      caption: "2020 - 2021",
      content:
        "Unterstützung für die Weiterentwicklung einer AngularJS Web-App zur Assetverwaltung",
      icon: <ProjectIcon />,
      type: "Work",
      keywords: ["AngularJS", "JavaScript", "TypeScript", "HTML", "SCSS"],
    },
    {
      title: "Browsergame Entwicklung",
      caption: `03/2020 - ${nowString}`,
      content:
        "Seit März 2020 gehöre ich dem ehrenamtlichen Entwicklerteam des Browsergames Hidden Empire Galaxy Adventures an.",
      icon: <ProjectIcon />,
      type: "Private",
      keywords: ["Vue.js", "TypeScript", "HTML", "SCSS"],
    },
    {
      title: "Compliance Schulung",
      caption: "02/2021",
      icon: <EducationIcon />,
      type: "Education",
    },
    {
      title: "Persönliche Webseite",
      caption: "03/2021",
      content:
        "Als kleines Übungsprojekt für React gestartet, ist diese Webseite entstanden.",
      icon: <ProjectIcon />,
      type: "Private",
      keywords: ["React", "TypeScript", "SCSS"],
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
