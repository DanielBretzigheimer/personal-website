import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import CategoryHeader from "../CategoryHeader";
import { ProjectPreview } from "./ProjectPreview";

export default function ProjectOverview() {
  const { t } = useTranslation();

  return (
    <>
      <CategoryHeader>{t("projects")}</CategoryHeader>
      <ProjectPreview />
    </>
  );
}
