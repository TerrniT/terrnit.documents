import { Menu, Transition } from "@headlessui/react";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5/index";
import Navlink from "./atoms/navlink";
import { links } from "../data/links";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Menu
      as="div"
      className="flex flex-col relative backdrop-blur-md backdrop-filter bg-opacity-50 firefox:bg-opacity-90"
    >
      <div>
        <Menu.Button
          className="inline-flex justify-center lg:hidden rounded-md border border-zinc-400 dark:border-zinc-700 px-2 py-2 text-sm font-medium shadow-sm hover:bg-orange-50 dark:hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 transition-all"
          aria-label="menu"
        >
          <IoMenu className="w-5 h-5" />
        </Menu.Button>
      </div>
      <Transition
        as="div"
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" absolute right-0 z-40 lg:hidden mt-6 w-56 origin-top-right rounded-md border border-zinc-400  dark:border-zinc-700 bg-light-bg dark:bg-black/60  shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none divide-zinc-400 dark:divide-zinc-700 transform opacity-100 scale-100">
          <div className="py-1 backdrop-blur backdrop-filter bg-opacity-50 firefox:bg-opacity-90">
            <div className="px-3 py-2 uppercase font-bold text-xs text-light-acsent dark:text-dark-acsent ">
              Links
            </div>

            {links.map((link, index) => {
              return <Navlink href={link.path} key={index} title={link.name} />;
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MobileMenu;
