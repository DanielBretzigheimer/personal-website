import React from "react";
import Skill from "./Skill";

export const maxTeamSizeValue = 10;

export interface TimelineItemContent {
  key: string;
  caption?: string;
  content?: { [tagName: string]: React.ReactElement };
  type: "Education" | "Private" | "Work";
  skills?: Array<Skill>;
  teamSize?: number;
}
