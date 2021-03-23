import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            sagittis dignissim orci nec efficitur. Curabitur nunc nisl, tempus
            eget faucibus posuere, pharetra sed enim. Aenean rhoncus tellus
            neque, eu posuere nibh dictum in. Morbi non leo purus. Curabitur
            tincidunt accumsan ex, sagittis sollicitudin nisl volutpat ut.
            Integer tristique rhoncus augue, a volutpat purus rhoncus et. Nullam
            vel accumsan orci, molestie egestas nisl. Fusce a odio vitae arcu
            dapibus viverra.
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
