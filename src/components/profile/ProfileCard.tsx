import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ProfilePicture from "../../images/Profile_Picture.jpg";
import { useTranslation } from "react-i18next";
import { Biography } from "./Biography";
import { About } from "./About";
import ProfileLinks from "./ProfileLinks";

export default function ProfileCard() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(() => theme.breakpoints.down("md"));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: isMobile ? "top" : "center",
          flexDirection: isMobile ? "row" : "column",
          mt: isMobile ? 0 : 2,
          mb: 2,
        }}
      >
        <Avatar
          src={ProfilePicture}
          className="profile-picture"
          sx={{
            mt: isMobile ? 1 : 0,
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
          <Typography variant="subtitle1">{t("job-title")}</Typography>
          <ProfileLinks />
        </Box>
      </Box>
      <Card>
        <CardContent>
          <About />
        </CardContent>
        <CardContent>
          <Biography />
        </CardContent>
      </Card>
    </>
  );
}
