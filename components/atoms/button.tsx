import React from "react";
import { useTheme } from "next-themes";
import { VscGithub } from "react-icons/vsc";
import { BiMoon } from "react-icons/bi";
import { ImSun } from "react-icons/im";
import { motion } from "framer-motion";
import Link from "next/link";

export const GithubButton = () => {
  return (
    <button className="flex justify-center items-center bg-gray-700 hover:bg-gray-500 text-white font-bold py-1.5 px-1.5 rounded">
      <Link href="https://github.com/terrnit">
        <VscGithub className="w-6 h-6" />
      </Link>
    </button>
  );
};

export const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme == "system" ? systemTheme : theme;
  if (currentTheme == "dark") {
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex justify-center items-center bg-dark-acsent  text-white font-bold py-2 px-2 rounded"
        onClick={() => setTheme("light")}
      >
        <BiMoon className="w-5 h-5" />
      </motion.button>
    );
  } else {
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex justify-center items-center  bg-light-acsent  text-black font-bold py-2 px-2 rounded"
        onClick={() => setTheme("dark")}
      >
        <ImSun className="w-5 h-5" />
      </motion.button>
    );
  }
};
