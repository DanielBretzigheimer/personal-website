import { Box, CardContent, Grid, Link, Typography } from "@mui/material";
import { ReactNode } from "react";
import CategoryHeader from "../CategoryHeader";
import HeartIcon from "mdi-material-ui/Heart";
import MovieIcon from "mdi-material-ui/Movie";
import GamingIcon from "mdi-material-ui/ControllerClassicOutline";
import ShootingIcon from "mdi-material-ui/Pistol";
import TravelIcon from "mdi-material-ui/Airplane";
import MotorbikeIcon from "mdi-material-ui/Motorbike";
import SwimIcon from "mdi-material-ui/Swim";
import { Trans, useTranslation } from "react-i18next";
import { GlassCard } from "../GlassCard";

interface Interest {
  icon: ReactNode;
  title: string;
}

export default function InterestOverview() {
  const { t } = useTranslation();
  const interests: Array<Interest> = [
    {
      icon: <ShootingIcon fontSize="large" />,
      title: t("sport-shooting"),
    },
    {
      icon: <SwimIcon fontSize="large" />,
      title: t("swimming"),
    },
    {
      icon: <GamingIcon fontSize="large" />,
      title: t("gaming"),
    },
    {
      icon: <TravelIcon fontSize="large" />,
      title: t("traveling"),
    },
    {
      icon: <MovieIcon fontSize="large" />,
      title: t("movies"),
    },
    {
      icon: <MotorbikeIcon fontSize="large" />,
      title: t("motorcycling"),
    },
  ];

  return (
    <>
      <CategoryHeader>
        <HeartIcon fontSize="large" color="secondary" /> {t("interests")}
      </CategoryHeader>
      <GlassCard>
        <CardContent>
          <Typography>
            <Trans
              i18nKey="interests-description"
              components={{
                1: <Link href="https://www.sg-eisenbach1958.de" target="_blank" />,
              }}
            />
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
      </GlassCard>
    </>
  );
}
