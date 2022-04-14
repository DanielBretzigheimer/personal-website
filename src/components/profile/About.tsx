import { Link, Typography } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  return (
    <>
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
    </>
  );
}
