import React from "react";
import { ThemeSwitcher } from "./atoms/button";
import Logo from "./atoms/logo";
import { links } from "../data/links";
import Navlink from "./atoms/navlink";

interface Props {
  part: string;
  children?: JSX.Element | JSX.Element[];
}

const Navbar = ({ part }: Props) => {
  return (
    <nav className="mx-auto sticky z-20 bg-black backdrop-blur backdrop-filter bg-opacity-50 firefox:bg-opacity-90 top-0 transition w-full duration-150 ">
      <div className="max-w-6xl mx-auto">
        <div className="items-center mx-4 max-w-screen md:flex md:mx-8">
          <div className="flex items-center justify-between py-3.5 md:block">
            <Logo substr={part} />
            <div className="md:hidden">
              <button className="text-gray-700 outline-none p-2 rounded-md transform duration-75 ring-gray-400 focus:ring-1">
                Menu
              </button>
            </div>
          </div>
          <div className="flex-1 justify-self-center pb-3 pr-14 md:block md:pb-0 hidden">
            <ul className="justify-center items-center space-y-8 transition duration-150 md:flex md:space-x-6 md:space-y-0  ">
              {links.map((link, index) => {
                return <Navlink href={link.path} title={link.name} />;
              })}
            </ul>
          </div>
          <div className="hidden md:inline-block">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
