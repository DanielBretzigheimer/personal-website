import { Box, Card, Grid } from "@material-ui/core";
import { TuneVertical } from "mdi-material-ui";
import React from "react";
import CategoryHeader from "../CategoryHeader";
import SkillLine from "./SkillLine";
import SkillTitle from "./SkillTitle";

interface SkillsProps {
  onSelection: (skill: string) => void;
}

export default function Skills(props: SkillsProps) {
  return (
    <Box>
      <CategoryHeader>
        <TuneVertical fontSize="large" color="secondary" /> Skills
      </CategoryHeader>
      <Card>
        <Box marginTop={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} xl={4}>
              <SkillTitle title="Programmiersprachen" />
              <SkillLine onClick={props.onSelection} skill="C#" value={100} />
              <SkillLine onClick={props.onSelection} skill="SQL" value={90} />
              <SkillLine onClick={props.onSelection} skill="JavaScript" value={90} />
              <SkillLine onClick={props.onSelection} skill="TypeScript" value={90} />
              <SkillLine onClick={props.onSelection} skill="Java" value={60} />
              <SkillLine onClick={props.onSelection} skill="Python" value={50} />
              <SkillLine onClick={props.onSelection} skill="Android (Java)" value={50} />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <SkillTitle title="Frameworks" />
              <SkillLine onClick={props.onSelection} skill=".NET Core" value={100} />
              <SkillLine onClick={props.onSelection} skill="ASP.NET Core" value={90} />
              <SkillLine onClick={props.onSelection} skill="React" value={70} />
              <SkillLine onClick={props.onSelection} skill="Vue.js" value={60} />
              <SkillLine onClick={props.onSelection} skill="AngularJS" value={50} />
              <SkillLine onClick={props.onSelection} skill="Angular" value={30} />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <SkillTitle title="Datenbanken" />
              <SkillLine onClick={props.onSelection} skill="PostgreSQL" value={100} />
              <SkillLine onClick={props.onSelection} skill="Microsoft SQL Server" value={50} />
              <SkillLine onClick={props.onSelection} skill="MariaDB" value={40} />
              <SkillLine onClick={props.onSelection} skill="MySQL" value={30} />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <SkillTitle title="Entwicklungsumgebung" />
              <SkillLine onClick={props.onSelection} skill="Visual Studio" value={100} />
              <SkillLine onClick={props.onSelection} skill="Visual Studio Code" value={100} />
              <SkillLine onClick={props.onSelection} skill="Eclipse" value={70} />
              <SkillLine onClick={props.onSelection} skill="Android Studio" value={50} />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <SkillTitle title="Sonstiges" />
              <SkillLine onClick={props.onSelection} skill="Git" value={100} />
              <SkillLine onClick={props.onSelection} skill="HTML" value={100} />
              <SkillLine onClick={props.onSelection} skill="CSS" value={100} />
              <SkillLine onClick={props.onSelection} skill="SCSS" value={90} />
              <SkillLine onClick={props.onSelection} skill="Razor (CSHTML)" value={90} />
              <SkillLine onClick={props.onSelection} skill="WPF" value={70} />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <SkillTitle title="Betriebssysteme" />
              <SkillLine onClick={props.onSelection} skill="Microsoft Windows" value={90} />
              <SkillLine onClick={props.onSelection} skill="Android" value={60} />
              <SkillLine onClick={props.onSelection} skill="iOS" value={60} />
              <SkillLine onClick={props.onSelection} skill="Linux (Ubuntu)" value={40} />
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
}
