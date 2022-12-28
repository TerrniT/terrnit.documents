import Link from "next/link";
import React from "react";
import { Library } from "../data/libraries";
import Image from "next/image";

const Libcard = ({ title, description, github, icon, url }: Library) => {
  return (
    <div className="relative bg-black/30 w-[21rem] mx-auto rounded-2xl shadow-1xl ring-1 ring-white/10 ">
      <div className="relative z-10 flex flex-col justify-between h-full divide-y divide-white/10">
        <div className="flex justify-between items-center px-6">
          <div className="max-w-md">
            <div className="pt-4 font-bold text-lg">{title}</div>
            <div className="flex-grow pr-4 pt-1 pb-4 text-sm text-gray-500 !leading-relaxed ">
              {description}
            </div>
          </div>
          {icon && (
            <div className="relative flex-shrink-0 w-20 h-20 ">
              <a href={github} target="_blank" rel="noopener" className="block">
                <Image
                  src={icon}
                  layout="fill"
                  className="object-contain"
                  alt={title}
                  aria-hidden
                />
              </a>
            </div>
          )}
        </div>
        <div className="flex w-full divide-x divide-white/10 ">
          <Link
            href={url}
            className="inline-flex items-center space-x-2 w-1/2 hover:bg-gray-600/20  transition-colors rounded-l-2xl rounded-tl-none"
          >
            <span className="sm:hidden px-8 py-4 mx-auto">Docs</span>
            <span className="hidden sm:inline px-6 py-4 ">Documentation</span>
          </Link>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 w-1/2 hover:bg-gray-600/20  transition-colors rounded-r-2xl rounded-tr-none"
          >
            <span className="px-6 py-4 mx-auto">Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Libcard;
