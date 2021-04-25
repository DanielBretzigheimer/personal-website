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
  const profileInfoLines = [
    {
      label: "Mail",
      icon: <MailIcon />,
      text: "dbretzigheimer95@gmail.com",
      link: "mailto:dbretzigheimer95@gmail.com",
    },
    {
      label: "Website",
      icon: <WebsiteIcon />,
      text: "https://daniel-bretzigheimer.dev",
      link: "https://daniel-bretzigheimer.netlify.app/",
    },
    {
      label: "Telefon",
      icon: <PhoneIcon />,
      text: "+49 151 14446626",
      link: "tel:+4915114446626",
    },
    {
      label: "Adresse",
      icon: <LocationIcon />,
      text: "Bergstraße 26, 63785 Obernburg, Germany",
    },
    {
      label: "Geburtsdatum",
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
            Willkommen auf meiner Webseite. Hier möchte ich mich und meine Fähigkeiten vorstellen.
            Zusätzlich soll die Seite als Beispiel Anwendung dienen, weshalb der Quellcode{" "}
            <Link href="https://gitlab.com/dbretzigheimer95/personal-website">hier</Link> öffentlich
            eingesehen werden kann.
          </Typography>
        </CardContent>
        <Divider />
        <CardContent>
          <Typography variant="h5">Über mich</Typography>
          <Typography>
            Mein Name ist Daniel Bretzigheimer und ich bin Software Entwickler in der nähe von
            Frankfurt am Main. Meine Leidenschaft ist die Frontend Entwicklung, allerdings habe ich
            auch Erfahrung in der Backend Erstellung inklusive der Datenabfrage über eine Datenbank.
          </Typography>
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
          <Typography variant="h5">Bio</Typography>
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
