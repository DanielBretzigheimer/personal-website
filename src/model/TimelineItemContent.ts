import { ReactNode } from "react";
import Skill from "./Skill";

export const maxTeamSizeValue = 10;

export default interface TimelineItemContent {
  key: string;
  caption?: string;
  content?: { readonly [tagName: string]: React.ReactNode };
  type: "Education" | "Private" | "Work";
  skills?: Array<Skill>;
  teamSize?: number;
}
