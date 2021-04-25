import { Box, Card, Grid } from "@material-ui/core";
import { TuneVertical } from "mdi-material-ui";
import React from "react";
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

  return (
    <Box>
      <CategoryHeader>
        <TuneVertical fontSize="large" color="secondary" /> Skills
      </CategoryHeader>
      <Card>
        <Box marginTop={2}>
          <Grid container spacing={2}>
            {skillGroups.map((skillGroup) => (
              <Grid item xs={12} md={6} xl={4}>
                <SkillTitle title={skillGroup.name} />
                {skillGroup.skills.map((skill) => (
                  <SkillLine onClick={props.onSelection} skill={skill} />
                ))}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Card>
    </Box>
  );
}
