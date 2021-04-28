import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  InputLabel,
  makeStyles,
  Typography,
  Link,
} from "@material-ui/core";
import React from "react";
import MailIcon from "mdi-material-ui/EmailOutline";
import WebsiteIcon from "mdi-material-ui/Earth";
import PhoneIcon from "mdi-material-ui/PhoneOutline";
import LocationIcon from "mdi-material-ui/MapMarkerOutline";
import BirthIcon from "mdi-material-ui/CalendarOutline";
import ProfilePicture from "../../images/Profile_Picture.jpg";
import { Github, Gitlab, StackOverflow } from "mdi-material-ui";
import { Trans, useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  titleName: {
    hyphens: "manual",
  },
}));

export default function ProfileCard() {
  const classes = useStyles();
  const { t } = useTranslation();
  const profileInfoLines = [
    {
      label: t("mail"),
      icon: <MailIcon />,
      text: "dbretzigheimer95@gmail.com",
      link: "mailto:dbretzigheimer95@gmail.com",
    },
    {
      label: t("website"),
      icon: <WebsiteIcon />,
      text: "https://daniel-bretzigheimer.dev",
      link: "https://daniel-bretzigheimer.netlify.app/",
    },
    {
      label: t("phone"),
      icon: <PhoneIcon />,
      text: "+49 151 14446626",
      link: "tel:+4915114446626",
    },
    {
      label: t("address"),
      icon: <LocationIcon />,
      text: `Bergstraße 26, 63785 Obernburg, ${t("germany")}`,
    },
    {
      label: t("birthdate"),
      icon: <BirthIcon />,
      text: "20.11.1995",
    },
  ];

  return (
    <>
      <Card>
        <CardContent>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Avatar src={ProfilePicture} className={classes.large} />
            <Box marginLeft={2}>
              <Typography variant="h4" className={classes.titleName}>
                Daniel Bretzigheimer
              </Typography>
              <Typography variant="subtitle1">Frontend Developer</Typography>
            </Box>
          </Box>
        </CardContent>
        <Divider />
        <CardContent>
          <Typography>
            <Trans
              i18nKey="welcome-content"
              components={{
                1: <Link href="https://gitlab.com/dbretzigheimer95/personal-website" />,
              }}
            />
          </Typography>
        </CardContent>
        <Divider />
        <CardContent>
          <Typography variant="h5">{t("about-me")}</Typography>
          <Typography>{t("about-me-content")}</Typography>
          <Box>
            <Link href="https://github.com/DanielBretzigheimer">
              <IconButton>
                <Github />
              </IconButton>
            </Link>
            <Link href="https://gitlab.com/dbretzigheimer95">
              <IconButton>
                <Gitlab />
              </IconButton>
            </Link>
            <Link href="https://stackoverflow.com/users/2119579/daniel-bretzigheimer">
              <IconButton>
                <StackOverflow />
              </IconButton>
            </Link>
          </Box>
        </CardContent>
        <Divider />
        <CardContent>
          <Typography variant="h5">{t("bio")}</Typography>
          <Grid container>
            {profileInfoLines.map((pi, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box display="flex" marginTop={1.5}>
                    <Box marginTop="16px">{pi.icon}</Box>
                    <Box marginLeft={1.5}>
                      <InputLabel shrink={true}>{pi.label}</InputLabel>
                      <Typography>
                        {pi.link ? <Link href={pi.link}>{pi.text}</Link> : pi.text}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
