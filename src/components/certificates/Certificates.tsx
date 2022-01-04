import { Box } from "@mui/material";
import React from "react";
import MCPBadge from "../../images/MCP_Badge.png";
import CategoryHeader from "../CategoryHeader";
import CertificateIcon from "mdi-material-ui/CertificateOutline";
import { useTranslation } from "react-i18next";

export default function Certificates() {
  const { t } = useTranslation();

  return (
    <>
      <CategoryHeader>
        <CertificateIcon fontSize="large" /> {t("certificates")}
      </CategoryHeader>
      <Box display="flex" flexDirection="column" alignItems="center" margin={2}>
        <a href="https://www.youracclaim.com/badges/de856289-8ebe-4b60-bd3f-2288315fb1a5">
          <img src={MCPBadge} alt="MCP Exam"></img>
        </a>
      </Box>
    </>
  );
}
