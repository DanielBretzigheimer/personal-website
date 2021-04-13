import {
  Box,
  Card,
  CardContent,
  CardMedia,
  InputLabel,
  Typography,
} from "@material-ui/core";
import React from "react";
import ProfilePicture from "../../images/Profile_Picture.jpg";
import { Link } from "@material-ui/core";
import MailIcon from "mdi-material-ui/EmailOutline";
import WebsiteIcon from "mdi-material-ui/Earth";
import PhoneIcon from "mdi-material-ui/PhoneOutline";
import LocationIcon from "mdi-material-ui/MapMarkerOutline";
import BirthIcon from "mdi-material-ui/CalendarOutline";

export default function ProfileCard() {
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
      text: "bretzi.dev",
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
        <CardMedia
          component="img"
          style={{ height: "auto", display: "none" }}
          image={ProfilePicture}
          title="profile picture"
        />

        <CardContent>
          <Box>
            <Typography variant="h4">Daniel Bretzigheimer</Typography>
            <Typography variant="subtitle1">Frontend Developer</Typography>
          </Box>
          {profileInfoLines.map((pi, index) => {
            return (
              <Box
                display="flex"
                marginTop={1.5}
                key={index}
                alignItems="flex-end"
              >
                {pi.icon}
                <Box marginLeft={1.5}>
                  <InputLabel shrink={true}>{pi.label}</InputLabel>
                  <Typography>
                    {pi.link ? <Link href={pi.link}>{pi.text}</Link> : pi.text}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </CardContent>
      </Card>
    </>
  );
}
