import React from "react";
import { GithubButton, ThemeSwitcher } from "./atoms/button";
import Logo from "./atoms/logo";
import { links } from "../data/links";
import Navlink from "./atoms/navlink";

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const Navbar = ({ children }: Props) => {
  return (
    <nav className="top-0 left-0 fixed right-0 py-4 lg:px-4 md:px-4 px-3 z-20 flex bg-light-bg dark:bg-dark-transparent/60 backdrop-blur backdrop-filter bg-opacity-50 firefox:bg-opacity-90 w-full ">
      <div className="container flex-wrap justify-between mx-auto flex items-center">
        <Logo />
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-1 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <span className="sr-only">Open main menu</span>
        </button>


        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-2 md:mt-0">
            {links.map((link, index) => {
              return <Navlink href={link.path} key={index} title={link.name} />;
            })}

            <GithubButton />
            <ThemeSwitcher />
          </ul>

        </div>


      </div>
    </nav>
  );
};

export default Navbar;
