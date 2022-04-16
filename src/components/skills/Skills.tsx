import { Box, Card, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import SkillData from "../../data/SkillData";
import Skill from "../../model/Skill";
import CategoryHeader from "../CategoryHeader";
import SkillLine from "./SkillLine";
import SkillTitle from "./SkillTitle";

interface SkillsProps {
  onSelection: (skill: Skill) => void;
}

export default function Skills(props: SkillsProps) {
  const skillGroups = SkillData();
  const { t } = useTranslation();

  return (
    <Box>
      <CategoryHeader>{t("skills")}</CategoryHeader>
      <Card>
        <Box marginTop={2}>
          <Grid container spacing={2}>
            {skillGroups.map((skillGroup, i) => (
              <Grid key={i} item xs={12} md={6} xl={4}>
                <SkillTitle title={skillGroup.name} />
                {skillGroup.skills.map((skill, i) => (
                  <SkillLine key={i} onClick={props.onSelection} skill={skill} />
                ))}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Card>
    </Box>
  );
}
