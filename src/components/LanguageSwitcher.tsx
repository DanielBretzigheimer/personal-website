import React, { useState } from "react";
import { Button, IconButton, Snackbar } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import CloseIcon from "mdi-material-ui/Close";

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const languageSpecified = localStorage.getItem("hide-language-message") === String(true);
  const [open, setOpen] = useState(!languageSpecified);

  function changeLanguage() {
    localStorage.setItem("hide-language-message", String(true));
    i18n.changeLanguage(t("other-language"));
  }

  function cancel() {
    localStorage.setItem("hide-language-message", String(true));
    setOpen(false);
  }

  return (
    <>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={5000}
        message={t("wrong-language")}
        action={
          <>
            <Button color="secondary" size="small" onClick={changeLanguage}>
              {t("change-language")}
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={cancel}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </>
  );
}
