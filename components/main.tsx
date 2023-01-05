import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const Main = ({ children }: Props) => {
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={
        {
          ease: "easeOut", duration: 1
        }}
      className="bg-light-bg dark:bg-dark-bg "
    >
      {children}
    </motion.main >
  );
};

export default Main;
