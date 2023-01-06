import { Menu } from "@headlessui/react";
import React from "react";

const MobileMenu = () => {
  return (
    <Menu as="div" className="flex flex-col relative">
      <Menu.Button>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex justify-center rounded-md border border-zinc-400 dark:border-zinc-700 px-2 py-2 text-sm font-medium shadow-sm md:hidden hover:bg-orange-200 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 transition-all"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Open main menu</span>
        </button>
      </Menu.Button>
      <Menu.Items className=" bg-black/30 border border-zinc-400 dark:border-zinc-700 absolute top-10 flex flex-col right-0  md:hidden lg:hidden">
        <Menu.Item>
          <span>about</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default MobileMenu;
