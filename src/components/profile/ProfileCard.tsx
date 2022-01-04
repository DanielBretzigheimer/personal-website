import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  InputLabel,
  Typography,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import MailIcon from "mdi-material-ui/EmailOutline";
import WebsiteIcon from "mdi-material-ui/Earth";
import PhoneIcon from "mdi-material-ui/PhoneOutline";
import LocationIcon from "mdi-material-ui/MapMarkerOutline";
import BirthIcon from "mdi-material-ui/CalendarOutline";
import ProfilePicture from "../../images/Profile_Picture.jpg";
import { Trans, useTranslation } from "react-i18next";
import ProfileLinks from "./ProfileLinks";

export default function ProfileCard() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(() => theme.breakpoints.down("md"));

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
      text: "https://www.daniel-bretzigheimer.dev",
      link: "https://www.daniel-bretzigheimer.dev",
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: isMobile ? "row" : "column",
            }}
          >
            <Avatar
              src={ProfilePicture}
              className="profile-picture"
              sx={{
                width: theme.spacing(isMobile ? 7 : 14),
                height: theme.spacing(isMobile ? 7 : 14),
              }}
            />
            <Box
              className="profile-name"
              sx={isMobile ? { marginLeft: theme.spacing(2) } : { textAlign: "center" }}
            >
              <Typography sx={{ hyphens: "manual" }} variant="h4">
                Daniel Bretzigheimer
              </Typography>
              <Typography variant="subtitle1">Frontend Developer</Typography>
            </Box>
          </Box>
        </CardContent>
        <Divider />
        <CardContent>
          <Typography variant="h5">{t("about-me")}</Typography>
          <Typography>
            <Trans
              i18nKey="about-me-content"
              components={{
                1: <Link href="https://material.io/design" />,
                2: <Link href="#github-material-ui" />,
                3: <Link href="https://www.hiddenempire.de/" />,
              }}
            />
          </Typography>
          <ProfileLinks />
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
