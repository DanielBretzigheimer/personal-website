import { Box, Paper, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";

interface StickyHeaderProps {
  children: React.ReactNode;
}

// thanks to vsync who provided the base for this implementation => https://stackoverflow.com/a/57991537/2119579
export function StickyHeader(props: StickyHeaderProps) {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    const cachedRef = ref.current;
    if (!cachedRef) return;

    /**
     * The observer is triggered when the element will be scrolled out of view.
     * To let it get scrolled out of view the rootMargin is set to -1px. After that
     * the element gets sticky so its bounding client rect is at the top (0).
     */
    const observer = new IntersectionObserver(
      ([e]) => {
        const elementIsOnTop = e.boundingClientRect.top === 0;
        const elementIsIntersectet = e.intersectionRatio < 1;
        setIsSticky(elementIsOnTop && elementIsIntersectet);
      },
      {
        threshold: [1],
        rootMargin: "-1px 0px 0px 0px",
      }
    );

    observer.observe(cachedRef);
    return () => observer.unobserve(cachedRef);
  }, []);

  return (
    <Box position="sticky" zIndex={1} top={0} mt={3} ref={ref}>
      <Paper
        square
        elevation={isSticky ? 4 : 0}
        sx={(theme) => (isSticky ? {} : { background: theme.palette.background.default })}
      >
        {props.children}
      </Paper>
    </Box>
  );
}
