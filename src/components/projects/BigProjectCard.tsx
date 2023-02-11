import { ButtonBase } from "@mui/material";
import { MouseEventHandler } from "react";
import "./BigProjectCard.css";

type BigProjectCardProps = {
  index: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
};

export function BigProjectCard(props: BigProjectCardProps) {
  const translateX = props.index * Math.random() * 4;
  const translateY = props.index * Math.random() * 2;
  const rotation = 1 - props.index * Math.random() * 5;

  return (
    <ButtonBase
      onClick={props.onClick}
      className="big-card"
      sx={{
        zIndex: 10 - props.index,
        transform: `translateX(-${translateX}%) translateY(${translateY}%) rotate(${rotation}deg)`,
      }}
    >
      {props.children}
    </ButtonBase>
  );
}
