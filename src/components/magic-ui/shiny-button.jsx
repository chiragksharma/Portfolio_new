"use client";
import { motion } from "framer-motion";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
};

const ShinyButton = ({ text = "SHINY BUTTON" }) => {
  return (
    <motion.button
      {...animationProps}
      className="relative rounded-lg px-6 py-2 font-medium backdrop-blur-xl transition-[box-shadow] duration-300 ease-in-out hover:shadow bg-black dark:bg-black"
    >
      <span
        className="relative block h-full w-full text-sm uppercase tracking-wide text-white dark:font-light dark:text-white"
        style={{
          maskImage:
            "linear-gradient(-75deg, white calc(var(--x) + 20%), transparent calc(var(--x) + 30%), white calc(var(--x) + 100%))",
        }}
      >
        {text}
      </span>
      <span
        style={{
          mask: "linear-gradient(white, white) content-box, linear-gradient(white, white)",
          WebkitMaskComposite: "destination-out",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,#ffffff1a_calc(var(--x)+20%),#ffffff4d_calc(var(--x)+25%),#ffffff1a_calc(var(--x)+100%))] p-px"
      ></span>
    </motion.button>
  );
};

export default ShinyButton;
