import SkillGroup from "../model/SkillGroup";

export default function (): Array<SkillGroup> {
  return [
    // programming-language
    {
      name: "Programmiersprachen",
      skills: [
        { name: "C#", value: 100 },
        { name: "SQL", value: 90 },
        { name: "JavaScript", value: 90 },
        { name: "TypeScript", value: 90 },
        { name: "Java", value: 60 },
        { name: "Python", value: 50 },
        { name: "Android (Java)", value: 50 },
      ],
    },
    {
      name: "Frameworks",
      skills: [
        { name: ".NET Core", value: 100 },
        { name: "ASP.NET Core", value: 90 },
        { name: "React", value: 70 },
        { name: "Vue.js", value: 60 },
        { name: "AngularJS", value: 50 },
        { name: "Angular", value: 30 },
      ],
    },
    {
      name: "Datenbanken",
      skills: [
        { name: "PostgreSQL", value: 100 },
        { name: "Microsoft SQL Server", value: 50 },
        { name: "MariaDB", value: 40 },
        { name: "MySQL", value: 30 },
      ],
    },
    {
      name: "Entwicklungsumgebungen",
      skills: [
        { name: "Visual Studio", value: 100 },
        { name: "Visual Studio Code", value: 100 },
        { name: "Eclipse", value: 70 },
        { name: "Android Studio", value: 50 },
      ],
    },
    {
      name: "Sonstiges",
      skills: [
        { name: "Git", value: 100 },
        { name: "HTML", value: 100 },
        { name: "CSS", value: 100 },
        { name: "SCSS", value: 90 },
        { name: "Razor (CSHTML)", value: 90 },
        { name: "WPF", value: 70 },
      ],
    },
    {
      name: "Betriebssysteme",
      skills: [
        { name: "Microsoft Windows", value: 90 },
        { name: "Android", value: 60 },
        { name: "iOS", value: 60 },
        { name: "Linux (Ubuntu)", value: 40 },
      ],
    },
  ];
}
