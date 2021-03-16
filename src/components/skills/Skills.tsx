import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { TuneVertical } from "mdi-material-ui";
import React from "react";
import CategoryHeader from "../CategoryHeader";
import SkillLine from "./SkillLine";

export default function Skills() {
  return (
    <Box>
      <CategoryHeader>
        <TuneVertical fontSize="large" color="secondary" /> Skills
      </CategoryHeader>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} xl={4}>
              <Box textAlign="center">
                <Typography variant="h5">Programmiersprachen</Typography>
              </Box>
              <SkillLine skill="C#" value={100} />
              <SkillLine skill="SQL" value={90} />
              <SkillLine skill="JavaScript" value={90} />
              <SkillLine skill="TypeScript" value={90} />
              <SkillLine skill="Java" value={60} />
              <SkillLine skill="Python" value={50} />
              <SkillLine skill="Android (Java)" value={50} />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <Box textAlign="center">
                <Typography variant="h5">Frameworks</Typography>
              </Box>
              <SkillLine skill=".NET Core" value={100} />
              <SkillLine skill="ASP.NET Core" value={90} />
              <SkillLine skill="React" value={70} />
              <SkillLine skill="Vue.js" value={60} />
              <SkillLine skill="AngularJS" value={50} />
              <SkillLine skill="Angular" value={30} />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <Box textAlign="center">
                <Typography variant="h5">Datenbanken</Typography>
              </Box>
              <SkillLine skill="PostgreSQL" value={100} />
              <SkillLine skill="Microsoft SQL Server" value={50} />
              <SkillLine skill="MariaDB" value={40} />
              <SkillLine skill="MySQL" value={30} />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <Box textAlign="center">
                <Typography variant="h5">Entwicklungsumgebung</Typography>
              </Box>
              <SkillLine skill="Visual Studio" value={100} />
              <SkillLine skill="Visual Studio Code" value={100} />
              <SkillLine skill="Eclipse" value={70} />
              <SkillLine skill="Android Studio" value={50} />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <Box textAlign="center">
                <Typography variant="h5">Betriebssysteme</Typography>
              </Box>
              <SkillLine skill="Microsoft Windows" value={90} />
              <SkillLine skill="Linux (Ubuntu)" value={40} />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <Box textAlign="center">
                <Typography variant="h5">Sonstiges</Typography>
              </Box>
              <SkillLine skill="HTML" value={100} />
              <SkillLine skill="CSS" value={100} />
              <SkillLine skill="Razor (CSHTML)" value={90} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
