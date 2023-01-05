import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: any;
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const Container = ({ children }: Props) => {
  return (
    <motion.section
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{
        delay: 0.2,
        x: { duration: 1 },
        default: { ease: "easeInOut" },
      }}
      className="min-h-screen p-1 text-black dark:text-white mx-auto my-14 max-w-6xl"
    >
      {children}
    </motion.section >
  );
};

export default Container;
