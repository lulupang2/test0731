import { MutableRefObject, useEffect } from "react";

const useDragScroll = (ref: MutableRefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    // const handleMouseDown = (e: MouseEvent) => {
    //   element.scrollLeft = e.clientX;
    // };

    const handleMouseMove = (e: MouseEvent) => {
      element.scrollLeft -= e.movementX;
    };

    const handleMouseUp = () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseup", handleMouseUp);
    };

    const handleMouseLeave = () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseup", handleMouseUp);
    };

    const handleScrollStart = (e: MouseEvent) => {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseup", handleMouseUp);
      element.addEventListener("mouseleave", handleMouseLeave);
    };
    element.addEventListener("mousedown", handleScrollStart);

    const handleWheel = (e: WheelEvent) => {
      element.scrollLeft += e.deltaY;
    };
    element.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      element.removeEventListener("mousedown", handleScrollStart);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseup", handleMouseUp);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("wheel", handleWheel);
    };
  }, [ref]);
};

export default useDragScroll;
