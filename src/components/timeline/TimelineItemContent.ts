import { ReactNode } from "react";

export default interface TimelineItemContent {
  title: string;
  caption?: string;
  content?: string | ReactNode;
  icon: ReactNode;
}
