import React from "react";
import { ThemeSwitcher } from "./atoms/button";
import Logo from "./atoms/logo";
import { links } from "../data/links";
import Navlink from "./atoms/navlink";
import Image from "next/image";

interface Props {
  part: string;
  children?: JSX.Element | JSX.Element[];
}

const Navbar = ({ part }: Props) => {
  return (
    <nav className="top-0 left-0 sticky right-0 py-4 justify-around flex z-20 bg-light-bg dark:bg-dark-transparent/60 backdrop-blur backdrop-filter bg-opacity-50 firefox:bg-opacity-90  transition w-full duration-150">
      <div className="flex items-center">
        <a className="cursor-pointer">
          <Logo substr={part} />
        </a>
      </div>

      <div className="items-center hidden space-x-8 lg:flex">
        <ul className="justify-center items-center space-y-8 transition duration-150 md:flex md:space-x-6 md:space-y-0  ">
          {links.map((link, index) => {
            return <Navlink href={link.path} title={link.name} />;
          })}
        </ul>
      </div>

      <div className="flex items-center space-x-5">
        <ThemeSwitcher />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
