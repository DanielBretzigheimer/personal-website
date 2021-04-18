import React, { ReactNode, useState, useEffect } from "react";

interface IntersectionWrapperProps {
  onIntersect?: () => void;
  onShow?: () => void;
  onHide?: () => void;
  children: ReactNode;
}

export default function IntersectionNotifier(props: IntersectionWrapperProps) {
  const [element, setElement] = useState<HTMLDivElement | null>();
  const observer = new IntersectionObserver(onObserverUpdate);

  useEffect(() => {
    if (element && observer) {
      observer.observe(element);
      return () => observer.unobserve(element);
    }
  }, [element, observer]);

  function onObserverUpdate(entries: IntersectionObserverEntry[]) {
    const { top, left, bottom, right } = entries[0].intersectionRect;
    if ([top, bottom, left, right].some(Boolean) && props.onShow) {
      props.onShow();
    } else if (props.onHide) {
      props.onHide();
    }

    if (props.onIntersect) props.onIntersect();
  }

  return <div ref={setElement}>{props.children}</div>;
}
