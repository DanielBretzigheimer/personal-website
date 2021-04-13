import {
  Box,
  Card,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import React, { ReactNode } from "react";
import CategoryHeader from "../CategoryHeader";
import HeartIcon from "mdi-material-ui/Heart";
import MovieIcon from "mdi-material-ui/Movie";
import GamingIcon from "mdi-material-ui/GoogleController";
import ShootingIcon from "mdi-material-ui/Pistol";
import TravelIcon from "mdi-material-ui/Airplane";
import MotorbikeIcon from "mdi-material-ui/Motorbike";
import SwimIcon from "mdi-material-ui/Swim";

interface Interest {
  icon: ReactNode;
  title: string;
}

export default function InterestOverview() {
  const interests: Array<Interest> = [
    {
      icon: <ShootingIcon fontSize="large" />,
      title: "Sportschießen",
    },
    {
      icon: <SwimIcon fontSize="large" />,
      title: "Schwimmen",
    },
    {
      icon: <GamingIcon fontSize="large" />,
      title: "Gaming",
    },
    {
      icon: <TravelIcon fontSize="large" />,
      title: "Reisen",
    },
    {
      icon: <MovieIcon fontSize="large" />,
      title: "Filme",
    },
    {
      icon: <MotorbikeIcon fontSize="large" />,
      title: "Motorradfahren",
    },
  ];

  return (
    <>
      <CategoryHeader>
        <HeartIcon fontSize="large" color="secondary" /> Interessen
      </CategoryHeader>
      <Card>
        <CardContent>
          <Typography>
            Neben meinem Beruf als Software Entwickler bin ich in unserem{" "}
            <Link href="https://www.sg-eisenbach1958.de" target="_blank">
              Schützenverein
            </Link>{" "}
            als Jugendleiter und EDV Beauftragter tätig. In den Sommer Monaten
            gehe ich nach der Arbeit gerne im Badeseen schwimmen. Sollte das
            Wetter mal nicht passen bin ich auch großer Filmliebhaber oder
            spiele auch mal gerne eine Runde am Computer. In meinem Urlaub Reise
            und Erkunde ich gerne die Länder Europas.
          </Typography>
        </CardContent>

        <Grid container>
          {interests.map((interest, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Box textAlign="center">
                <Box>{interest.icon}</Box>
                <Typography>{interest.title}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Card>
    </>
  );
}
