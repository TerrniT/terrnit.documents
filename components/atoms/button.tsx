import React from "react";
import { useTheme } from "next-themes";
import { VscGithub } from "react-icons/vsc";
import { BiMoon } from "react-icons/bi";
import { ImSun } from "react-icons/im";
import { motion } from "framer-motion";
import Link from "next/link";

export const GithubButton = () => {
  return (
    <button className="flex justify-center items-center bg-transparent font-bold py-1.5 px-1.5 rounded">
      <Link href="https://github.com/terrnit">
        <VscGithub className="w-5 h-5 hover:text-light-acsent dark:hover:text-dark-acsent transition-colors duration-200 black dark:text-white" />
      </Link>
    </button>
  );
};

export const ThemeSwitcher = () => {
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme == "system" ? systemTheme : theme;
  if (currentTheme == "dark") {
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={spring}
        layout
        className="flex justify-center items-center py-2 bg-dark-acsent text-white font-bold px-2 rounded-lg"
        onClick={() => setTheme("light")}
      >
        <BiMoon className="w-4 h-4" />
      </motion.button>
    );
  } else {
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={spring}
        layout
        className="flex justify-center items-center py-2 bg-light-acsent text-black font-bold px-2 rounded"
        onClick={() => setTheme("dark")}
      >
        <ImSun className="w-4 h-4" />
      </motion.button>
    );
  }
};
