import { Box } from "@mui/material";
import "./BigProjectCard.css";

type BigProjectCardProps = {
  index: number;
  children?: React.ReactNode;
};

export function BigProjectCard(props: BigProjectCardProps) {
  const translateX = props.index * Math.random() * 4;
  const translateY = props.index * Math.random() * 2;
  const rotation = 1 - props.index * Math.random() * 5;

  return (
    <Box
      className="big-card"
      sx={{
        zIndex: 10 - props.index,
        transform: `translateX(-${translateX}%) translateY(${translateY}%) rotate(${rotation}deg)`,
      }}
    >
      {props.children}
    </Box>
  );
}
