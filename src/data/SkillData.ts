import SkillGroup from "../model/SkillGroup";

// programming languages
export const skillCsharp = { name: "c-sharp", value: 100 };
export const skillSql = { name: "sql", value: 90 };
export const skillJavaScript = { name: "java-script", value: 90 };
export const skillTypeScript = { name: "type-script", value: 90 };
export const skillJava = { name: "java", value: 60 };
export const skillPython = { name: "python", value: 50 };
export const skillAndroid = { name: "android", value: 50 };
export const skillCPlusPlus = { name: "c-plus-plus", value: 20 };

// frameworks
export const skillNetCore = { name: "net-core", value: 100 };
export const skillAspNetCore = { name: "asp-net-core", value: 90 };
export const skillReact = { name: "react", value: 70 };
export const skillVueJs = { name: "vue-js", value: 60 };
export const skillAngularJs = { name: "angular-js", value: 50 };
export const skillAngular = { name: "angular", value: 30 };

// databases
export const skillPostgreSql = { name: "postgre-sql", value: 100 };
export const skillMicrosoftSqlServer = { name: "microsoft-sql-server", value: 50 };
export const skillMariaDb = { name: "maria-db", value: 40 };
export const skillMySql = { name: "my-sql", value: 30 };

// ide
export const skillVisualStudio = { name: "visual-studio", value: 100 };
export const skillVisualStudioCode = { name: "visual-studio-code", value: 100 };
export const skillEclipse = { name: "eclipse", value: 70 };
export const skillAndroidStudio = { name: "android-studio", value: 50 };

// other
export const skillGit = { name: "git", value: 100 };
export const skillUnittest = { name: "unittest", value: 90 };
export const skillHtml = { name: "html", value: 100 };
export const skillCss = { name: "css", value: 100 };
export const skillScss = { name: "scss", value: 90 };
export const skillRazor = { name: "razor", value: 90 };
export const skillWpf = { name: "wpf", value: 70 };
export const skillSubversion = { name: "subversion", value: 50 };

export const skillOpcUa = { name: "opc-ua", value: 30 };
export const skillXml = { name: "xml", value: 80 };
export const skillXsd = { name: "xsd", value: 70 };
export const skillGwt = { name: "gwt", value: 60 };
export const skillPolymer = { name: "polymer", value: 40 };
export const skillSelenium = { name: "selenium", value: 90 };
export const skillNvidiaJetson = { name: "nvidia-jetson", value: 60 };
export const skillIntelRealSense = { name: "intel-real-sense", value: 60 };
export const skillWebsocket = { name: "web-socket", value: 100 };
export const skillRabbitMq = { name: "rabbit-mq", value: 30 };

// operating systems
export const skillWindows = { name: "microsoft-windows", value: 90 };
export const skillAndroidOperationSystem = { name: "android", value: 60 };
export const skillIos = { name: "ios", value: 60 };
export const skillLinux = { name: "linux", value: 40 };

export default function (): Array<SkillGroup> {
  return [
    // programming-language
    {
      name: "programming-languages",
      skills: [
        skillCsharp,
        skillSql,
        skillJavaScript,
        skillTypeScript,
        skillJava,
        skillPython,
        skillAndroid,
      ],
    },
    {
      name: "frameworks",
      skills: [skillNetCore, skillAspNetCore, skillReact, skillVueJs, skillAngularJs, skillAngular],
    },
    {
      name: "databases",
      skills: [skillPostgreSql, skillMicrosoftSqlServer, skillMariaDb, skillMySql],
    },
    {
      name: "integrated-development-environment",
      skills: [skillVisualStudio, skillVisualStudioCode, skillEclipse, skillAndroidStudio],
    },
    {
      name: "miscellaneous",
      skills: [skillGit, skillHtml, skillCss, skillScss, skillRazor, skillWpf],
    },
    {
      name: "operating-system",
      skills: [skillWindows, skillAndroid, skillIos, skillLinux],
    },
  ];
}
