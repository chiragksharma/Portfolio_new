"use client";

import { cn } from "../../lib/utils";
import { useEffect, useRef, useState } from "react";

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
}

const MagicContainer = ({ children, className }) => {
  const containerRef = useRef(null);
  const mousePosition = useMousePosition();
  const mouse = useRef({ x: 0, y: 0 });
  const containerSize = useRef({ w: 0, h: 0 });
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    init();
    containerRef.current &&
      setBoxes(Array.from(containerRef.current.children).map((el) => el));
  }, []);

  useEffect(() => {
    init();
    window.addEventListener("resize", init);

    return () => {
      window.removeEventListener("resize", init);
    };
  }, [setBoxes]);

  useEffect(() => {
    onMouseMove();
  }, [mousePosition]);

  const init = () => {
    if (containerRef.current) {
      containerSize.current.w = containerRef.current.offsetWidth;
      containerSize.current.h = containerRef.current.offsetHeight;
    }
  };

  const onMouseMove = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const { w, h } = containerSize.current;
      const x = mousePosition.x - rect.left;
      const y = mousePosition.y - rect.top;
      const inside = x < w && x > 0 && y < h && y > 0;

      mouse.current.x = x;
      mouse.current.y = y;
      boxes.forEach((box) => {
        const boxX =
          -(box.getBoundingClientRect().left - rect.left) + mouse.current.x;
        const boxY =
          -(box.getBoundingClientRect().top - rect.top) + mouse.current.y;
        box.style.setProperty("--mouse-x", `${boxX}px`);
        box.style.setProperty("--mouse-y", `${boxY}px`);

        if (inside) {
          box.style.setProperty("--opacity", `1`);
        } else {
          box.style.setProperty("--opacity", `0`);
        }
      });
    }
  };

  return (
    <div className={cn("flex justify-center items-center w-full p-10", className)} ref={containerRef}>
      {children}
    </div>
  );
};

const MagicCard = ({
  className,
  children,
  size = 600,
  spotlight = true,
  borderColor = "rgb(126 126 126 / 61%)",
  borderWidth = 3,
  isolated = true,
  ...props
}) => {
  return (
    <div
      style={{
        "--mask-size": `${size}px`,
        "--border-color": `${borderColor}`,
        "--border-width": `${borderWidth}px`,
      }}
      className={cn(
        "relative z-0 w-full rounded-2xl border-2 border-silver",
        `border-${borderWidth} border-silver`,
        "bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),rgba(192,192,192,0.2),transparent_80%)]",
        className
      )}
      {...props}
    >
      {children}

      {/* Background */}
      <div
        className={
          "absolute inset-[1px] -z-20 rounded-2xl bg-[#0C0C0C] bg-opacity-50 backdrop-blur-lg backdrop-saturate-150 border "
        }
      />
    </div>
  );
};

export { MagicCard, MagicContainer };
