import { Box, Link, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Imprint from "../imprint/Imprint";
import { version } from "../../../package.json";

export default function Footer() {
  const { t, i18n } = useTranslation();

  function setLanguage(lng: string) {
    i18n.changeLanguage(lng);
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" marginTop={1}>
      <Box>
        <Typography component="span">{t("language")}</Typography>
        {": "}
        <Link style={{ cursor: "pointer" }} onClick={() => setLanguage("de")}>
          DE
        </Link>
        {"  ·  "}
        <Link style={{ cursor: "pointer" }} onClick={() => setLanguage("en")}>
          EN
        </Link>
      </Box>
      <Typography variant="caption">
        © {new Date().getFullYear()} · Daniel Bretzigheimer · V{version}
      </Typography>
      <Imprint />
    </Box>
  );
}
