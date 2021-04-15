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
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const nowString = `${month}/${now.getFullYear()}`;

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
      keywords: [
        "C#",
        "Visual Studio",
        "Unittests",
        "WPF",
        "Microsoft Windows",
      ],
    },
    {
      title: "Datenbank Versionsverwaltung",
      caption: "2014",
      content: "Datenbank Versionsverwaltungssoftware für PostgreSQL",
      icon: <ProjectIcon />,
      type: "Work",
      keywords: [
        "C#",
        "SQL",
        "PostgreSQL",
        "Visual Studio",
        "Unittests",
        "WPF",
        "Microsoft Windows",
      ],
    },
    {
      title: "Windows Service Entwicklung",
      caption: "2015",
      content: "Windows Service zum Erstellen von XML Dateien",
      icon: <ProjectIcon />,
      type: "Work",
      keywords: [
        "C#",
        "Visual Studio",
        "OPC UA",
        "XML",
        "XSD",
        "Microsoft Windows",
      ],
    },
    {
      title: "Betriebsdatenerfassung",
      caption: "2015 - 2019",
      content: "Betriebsdatenerfassung im Client/Server Prinzip mit REST",
      icon: <ProjectIcon />,
      type: "Work",
      keywords: [
        "C#",
        "SQL",
        "PostgreSQL",
        "Visual Studio",
        "Unittests",
        "WPF",
      ],
    },
    {
      title: "Maschinen Übersicht",
      caption: "2016 - 2017",
      content:
        "Software zur Anzeige aller Maschinen einer Fabrik als Webanwendung und integriert in Betriebsdatenerfassung",
      icon: <ProjectIcon />,
      type: "Work",
      keywords: [
        "Java",
        "JavaScript",
        "Eclipse",
        "HTML",
        "CSS",
        "GWT",
        "Microsoft Windows",
        "Android",
        "iOS",
      ],
    },
    {
      title: "Update Verwaltungssoftware",
      caption: "2018",
      content:
        "Die Software dient sowohl als Auslieferungsserver von Software Updates für die Betriebsdatenerfassungs Software als auch als zentrale Anlaufstelle für Telemetrie Daten. Die Webanwendung erlaubt das hochladen von Software Updates und die individuelle Zuweisung an Kunden. Zusätzlich erlaubt die Anwendung die Anzeige und grafische Auswertung der gesammelten Telemetriedaten.",
      icon: <ProjectIcon />,
      type: "Work",
      keywords: [
        "C#",
        "SQL",
        "TypeScript",
        ".NET Core",
        "ASP.NET Core",
        "PostgreSQL",
        "Visual Studio",
        "Polymer",
        "HTML",
        "CSS",
        "Unittests",
        "Linux (Ubuntu)",
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
        "C#",
        "SQL",
        "TypeScript",
        ".NET Core",
        "ASP.NET Core",
        "PostgreSQL",
        "Visual Studio",
        "HTML",
        "SCSS",
        "Razor",
        "Unittests",
        "Microsoft Windows",
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
        "Erstellung von automatischen UI Tests für das Order Management System mit Selenium",
      icon: <ProjectIcon />,
      type: "Work",
      keywords: ["C#", ".NET Core", "Visual Studio", "Selenium"],
    },
    {
      title: "Datenanalyse und Benutzerverwaltungs Anwendung",
      caption: "2020",
      content:
        "Erstellung einer Software zur Anzeige von Berichten und der Verwaltung von Benutzern",
      icon: <ProjectIcon />,
      type: "Work",
      keywords: [
        "C#",
        "TypeScript",
        ".NET Core",
        "ASP.NET Core",
        "Microsoft SQL Server",
        "Visual Studio",
        "HTML",
        "SCSS",
        "Microsoft Windows",
      ],
    },
    {
      title: "Unterstützung bei der Ausbildung der Azubis",
      caption: "2020",
      content:
        "Zusätzlich zu meinem normalen Arbeitsalltag wurde ich damit beauftragt, bei der Ausbildung der Azubis auszuhelfen. Hierzu gehört unter anderem das Erstellen von Aufgaben für die Auszubildenden und die Beantwortung von Fragen",
      icon: <ProjectIcon />,
      type: "Work",
    },
    {
      title: "Fitnessspiel Anwendung",
      caption: "2020",
      content:
        "Entwicklung einer Anwendung bei der mit einem Beamer ein Spielfeld an eine Wand projeziert wird und der Spieler darauf befindlichen Objekten ausweichen bzw. diese fangen muss. Die Steuerung der Anwendung erfolgt über eine React App.",
      icon: <ProjectIcon />,
      type: "Work",
      keywords: [
        "Python",
        "TypeScript",
        "React",
        "Visual Studio Code",
        "Nvidia Jetson",
        "Intel Realsense",
        "Websocket",
        "Linux (Ubuntu)",
      ],
    },
    {
      title: "Video Player Anwendung",
      caption: "2020",
      content:
        "Entwicklung einer Software zum Anzeigen von Videos auf einem Beamer, die über eine RabbitMQ Nachricht gesendet werden",
      icon: <ProjectIcon />,
      type: "Work",
      keywords: ["Python", "Visual Studio Code", "RabbitMQ", "Ubuntu"],
    },
    {
      title: "Assetverwaltungs Webanwendung",
      caption: "2020 - 2021",
      content:
        "Unterstützung für die Weiterentwicklung einer AngularJS Web-App zur Assetverwaltung",
      icon: <ProjectIcon />,
      type: "Work",
      keywords: [
        "JavaScript",
        "TypeScript",
        "SQL",
        "AngularJS",
        "Microsoft SQL Server",
        "Visual Studio Code",
        "MariaDB",
        "HTML",
        "SCSS",
        "Android",
        "iOS",
      ],
    },
    {
      title: "Browsergame Entwicklung",
      caption: `03/2020 - ${nowString}`,
      content:
        "Seit März 2020 gehöre ich dem ehrenamtlichen Entwicklerteam des Browsergames Hidden Empire Galaxy Adventures an.",
      icon: <ProjectIcon />,
      type: "Private",
      keywords: [
        "TypeScript",
        "Vue.js",
        "Visual Studio Code",
        "HTML",
        "SCSS",
        "Websocket",
      ],
    },
    {
      title: "Compliance Schulung",
      caption: "02/2021",
      icon: <EducationIcon />,
      type: "Education",
    },
    {
      title: "Persönliche Webseite",
      caption: `03/2021 - ${nowString}`,
      content:
        "Als kleines Übungsprojekt für React gestartet, ist diese Webseite entstanden.",
      icon: <ProjectIcon />,
      type: "Private",
      keywords: ["TypeScript", "React", "HTML", "SCSS"],
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
