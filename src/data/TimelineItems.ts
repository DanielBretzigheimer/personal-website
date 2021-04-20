import TimelineItemContent from "../model/TimelineItemContent";

export default function (): Array<TimelineItemContent> {
  const now = new Date();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const nowString = `${month}/${now.getFullYear()}`;

  return [
    {
      title: "Schulische Ausbildung",
      caption: "09/2002 - 07/2012",
      content: "Johannes-Obernburger-Volksschule\nMain-Limes-Realschule\nAbschluss: Mittlere Reife",
      type: "Education",
      show: true,
    },
    {
      title: "Berufsausbildung",
      caption: "09/2012 - 07/2015",
      content: "Ausbildung als Fachinformatiker Anwendungsentwicklung bei APE Engineering GmbH",
      type: "Education",
      show: true,
    },
    {
      title: "Maschinensteuerungssoftware",
      caption: "2013 - 2015",
      content:
        "Software zur Auswertung und Konfiguration von Garnreinigungsmaschinen mit Komunikation über eine BUS Schnittstelle.",
      type: "Work",
      keywords: ["C#", "Visual Studio", "Subversion", "Unittests", "WPF", "Microsoft Windows"],
      show: true,
    },
    {
      title: "Windows Service Entwicklung",
      caption: "2014",
      content:
        "Windows Service zur Erstellung von XML Dateien, die mithilfe der Variablen eines OPC UA Servers gefüllt werden. Die XML Dateien werden anschließend anhand einer XSD Datei auf Fehler geprüft und auf dem Dateisystem abgelegt.",
      type: "Work",
      keywords: ["C#", "Visual Studio", "Subversion", "OPC UA", "XML", "XSD", "Microsoft Windows"],
      show: true,
    },
    {
      title: "Datenbank Versionsverwaltung",
      caption: "2015",
      content:
        "Software die PostgreSQL Datenbank Unterschiede zwischen einer vorherigen Version und der aktuellen Datenbank als Änderungs SQL-Dateien ablegt.",
      type: "Work",
      keywords: [
        "C#",
        "SQL",
        "PostgreSQL",
        "Visual Studio",
        "Git",
        "Unittests",
        "WPF",
        "Microsoft Windows",
      ],
      show: true,
    },
    {
      title: "Betriebsdatenerfassung",
      caption: "2015 - 2019",
      content:
        "Betriebsdatenerfassung im Client/Server Prinzip mit REST Schnittstelle inklusive Berichte, Trends, Live-Monitoring, Produktionsplanung und der Verwaltung von Maschineneinstellungen.",
      type: "Work",
      keywords: ["C#", "SQL", "PostgreSQL", "Visual Studio", "Git", "Unittests", "WPF"],
      show: true,
    },
    {
      title: "Maschinen Übersicht",
      caption: "2016 - 2017",
      content:
        "Software zur Anzeige aller Maschinen einer Fabrik als Webanwendung und integriert in Betriebsdatenerfassung. Maschinen können per drag and drop auf der Übersicht plaziert werden und zeigen die aktuellen Produktionsdaten.",
      type: "Work",
      keywords: [
        "Java",
        "JavaScript",
        "Eclipse",
        "Git",
        "HTML",
        "CSS",
        "GWT",
        "Microsoft Windows",
        "Android",
        "iOS",
      ],
      show: true,
    },
    {
      title: "Update Verwaltungssoftware",
      caption: "2018",
      content:
        "Die Software dient sowohl als Auslieferungsserver von Software Updates für die Betriebsdatenerfassungs Software, als auch als zentrale Anlaufstelle für Telemetrie Daten. Die Webanwendung erlaubt das hochladen von Software Updates und die individuelle Zuweisung an Kunden. Zusätzlich können die gesammelten Telemetriedaten angezeigt und grafische ausgewertet werden.",
      type: "Work",
      keywords: [
        "C#",
        "SQL",
        "TypeScript",
        ".NET Core",
        "ASP.NET Core",
        "PostgreSQL",
        "Visual Studio",
        "Git",
        "Polymer",
        "HTML",
        "CSS",
        "Razor (CSHTML)",
        "Unittests",
        "Linux (Ubuntu)",
      ],
      show: true,
    },
    {
      title: "Order Management System",
      caption: "2018 - 2021",
      content:
        "Bestellungsverwaltungssystem für interne Bestellungen als Webanwendung mit REST Schnittstelle und PostgreSQL Datenbank.",
      type: "Work",
      keywords: [
        "C#",
        "SQL",
        "TypeScript",
        ".NET Core",
        "ASP.NET Core",
        "PostgreSQL",
        "Visual Studio",
        "Git",
        "HTML",
        "SCSS",
        "Razor (CSHTML)",
        "Unittests",
        "Microsoft Windows",
      ],
      show: true,
    },
    {
      title: "Microsoft Certified Professional Prüfung",
      caption: "03/2019",
      content:
        'Im März 2019 habe ich erfolgreich die MCP Prüfung 483 "Programming in C#" abgeschlossen.',
      type: "Education",
      show: true,
    },
    {
      title: "Automatische UI Tests",
      caption: "2020",
      content:
        "Erstellung von automatischen UI Tests für das Order Management System mit Selenium. Die Tests werden automatisch nach dem Build Vorgang ausgeführt und prüfen die Grundfunktionen der Anwendung.",
      type: "Work",
      keywords: ["C#", ".NET Core", "Visual Studio", "Git", "Selenium"],
      show: true,
    },
    {
      title: "Datenanalyse und Benutzerverwaltungs Anwendung",
      caption: "2020",
      content:
        "Erstellung einer Webanwendung zur Anzeige von Berichten und Verwaltung von Benutzern.",
      type: "Work",
      keywords: [
        "C#",
        "TypeScript",
        ".NET Core",
        "ASP.NET Core",
        "Microsoft SQL Server",
        "Visual Studio",
        "Git",
        "HTML",
        "SCSS",
        "Razor (CSHTML)",
        "Microsoft Windows",
      ],
      show: true,
    },
    {
      title: "Unterstützung bei der Ausbildung der Azubis",
      caption: "2020",
      content:
        "Zusätzlich zu meinem normalen Arbeitsalltag, helfe ich seit mitte 2020 bei der Ausbildung der Azubis mit. Hierzu gehört unter anderem das Erstellen von Aufgaben und die Beantwortung von Fragen.",
      type: "Work",
      show: true,
    },
    {
      title: "Fitnessspiel Anwendung",
      caption: "2020",
      content:
        "Entwicklung einer Anwendung bei der mit einem Beamer ein Spielfeld an eine Wand projeziert wird und der Spieler sich darauf befindlichen Objekten ausweichen bzw. diese fangen muss. Die Steuerung der Anwendung erfolgt über eine React App mit einer Websocket Verbindung.",
      type: "Work",
      keywords: [
        "Python",
        "TypeScript",
        "React",
        "Visual Studio Code",
        "Git",
        "Nvidia Jetson",
        "Intel Realsense",
        "Websocket",
        "Linux (Ubuntu)",
      ],
      show: true,
    },
    {
      title: "Video Player Anwendung",
      caption: "2020",
      content:
        "Entwicklung einer Software zum Anzeigen von Videos auf einem Beamer, die über eine RabbitMQ Nachricht empfangen werden.",
      type: "Work",
      keywords: ["Python", "Visual Studio Code", "RabbitMQ", "Linux (Ubuntu)"],
      show: true,
    },
    {
      title: "Browsergame Entwicklung",
      caption: `03/2020 - ${nowString}`,
      content:
        "Seit März 2020 gehöre ich dem ehrenamtlichen Entwicklerteam des Browsergames Hidden Empire Galaxy Adventures an. Hier wurde ich mit dem erstellen der nächsten Version (V5) beauftragt, die für das Jahr 2023 geplant ist.",
      type: "Private",
      keywords: ["TypeScript", "Vue.js", "Visual Studio Code", "Git", "HTML", "SCSS", "Websocket"],
      show: true,
    },
    {
      title: "Webanwendung zur Assetverwaltung",
      caption: `12/2020 - ${nowString}`,
      content:
        "Unterstützung für die Weiterentwicklung einer AngularJS Web-App zur Assetverwaltung. Entwicklung von erweiterten Tabellen Funktionen wie eine Spaltenkonfiguration und Bearbeitungsmodus (Datagrid).",
      type: "Work",
      keywords: [
        "JavaScript",
        "TypeScript",
        "SQL",
        "AngularJS",
        "Microsoft SQL Server",
        "Visual Studio Code",
        "MariaDB",
        "Git",
        "HTML",
        "SCSS",
        "Android",
        "iOS",
      ],
      show: true,
    },
    {
      title: "Compliance Schulung",
      caption: "02/2021",
      type: "Education",
      show: true,
    },
    {
      title: "Persönliche Webseite",
      caption: `03/2021 - ${nowString}`,
      content:
        "Als kleines Übungsprojekt für React gestartet, ist diese Webseite entstanden. Zusätzlich benutze ich diese Website um neue Web Technologien auszutesten.",
      type: "Private",
      keywords: [
        "TypeScript",
        "React",
        "Visual Studio Code",
        "Git",
        "HTML",
        "SCSS",
        "Microsoft Windows",
      ],
      show: true,
    },
  ];
}
