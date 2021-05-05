import { ReactNode } from "react";
import Skill from "./Skill";

export const maxTeamSizeValue = 10;

export default interface TimelineItemContent {
  title: string;
  caption?: string;
  content?: string | ReactNode;
  type: "Education" | "Private" | "Work";
  skills?: Array<Skill>;
  teamSize?: number;
}
