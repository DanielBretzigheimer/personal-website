import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  InputLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "@material-ui/core";
import MailIcon from "mdi-material-ui/EmailOutline";
import WebsiteIcon from "mdi-material-ui/Earth";
import PhoneIcon from "mdi-material-ui/PhoneOutline";
import LocationIcon from "mdi-material-ui/MapMarkerOutline";
import BirthIcon from "mdi-material-ui/CalendarOutline";
import ProfilePicture from "../../images/Profile_Picture.jpg";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
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
              <Typography variant="h4">Daniel Bretzigheimer</Typography>
              <Typography variant="subtitle1">Frontend Developer</Typography>
            </Box>
          </Box>
        </CardContent>
        <Divider />
        <CardContent>
          <Typography>
            Willkommen auf meiner persönlichen Webseite. Ich habe diese Seite aus 2 Gründen
            erstellt. Einerseits wollte ich eine Testanwendung mit React erstellen, um mich mehr mit
            der Technologie und ihren Möglichkeiten auseinanderzusetzen. Andererseits habe ich zu
            dieser Zeit auch meine Bewerbungsunterlagen aktualisiert und habe die Situation genutzt
            um hier meine allgemeinen Informationen und meinem Lebenslauf darzustellen. Zusätzlich
            bietet mir die Seite die Möglichkeit meiner Kreativität freien Lauf zu lassen.
          </Typography>
        </CardContent>
        <Divider />
        <CardContent>
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
