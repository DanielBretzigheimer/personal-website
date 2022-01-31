import MailIcon from "mdi-material-ui/EmailOutline";
import WebsiteIcon from "mdi-material-ui/Earth";
import PhoneIcon from "mdi-material-ui/PhoneOutline";
import LocationIcon from "mdi-material-ui/MapMarkerOutline";
import BirthIcon from "mdi-material-ui/CalendarOutline";
import { Box, Grid, InputLabel, Link, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export function Biography() {
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
    </>
  );
}
