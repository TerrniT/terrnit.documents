import React from "react";
import { GithubButton, ThemeSwitcher } from "./atoms/button";
import Logo from "./atoms/logo";
import Navlink from "./atoms/navlink";
import MobileMenu from "./MobileMenu";

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const Navbar = ({ children }: Props) => {
  return (
    <nav className="top-0 left-0 fixed right-0 py-4 lg:px-4 md:px-4 px-3 z-20 flex bg-light-bg dark:bg-dark-transparent/60 backdrop-blur backdrop-filter bg-opacity-50 firefox:bg-opacity-90 w-full ">
      <div className="container flex-wrap justify-between mx-auto flex items-center">
        <Logo />
        <div className="flex justify-center items-center space-x-4">
          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col mt-4 space-x-6 md:flex-row md:mt-0 ">
              <Navlink href="https://github.com/terrnit" title="homepage" />
              <GithubButton />
            </ul>
          </div>
          <ThemeSwitcher />
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
