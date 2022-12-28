import { Card, CardProps, useTheme } from "@mui/material";

export function GlassCard(props: CardProps) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        background:
          theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.7)" : "rgba(30, 30, 30, 0.7)",
        backdropFilter: "blur(20px)",
      }}
      {...props}
    >
      {props.children}
    </Card>
  );
}
