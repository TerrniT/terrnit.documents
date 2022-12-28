import type { NextPage } from "next";

import Link from "next/link";
import Image from "next/image";
import libs from "../data/libraries";

import Grid from "../components/grid";
import CommandPallete from "../components/commandPallete";
import Container from "../components/container";
import { BsSearch } from "react-icons/bs";
import { useSearch } from "../store/store";

const Documents: NextPage = () => {
  const handleOpen = useSearch((state) => state.setOpen);

  return (
    <Container>
      <CommandPallete />
      <button
        onClick={handleOpen}
        className="flex items-center justify-around w-[15rem] mx-auto bg-black/30 rounded-2xl  ring-1 ring-white/10"
      >
        <BsSearch className="text-2xl " />

        <div className="overflow-hidden bg-transparent h-12  focus:outline-none">
          <p className="text-sm placeholder-white/60 py-auto">Search docs...</p>
        </div>
        <span className="px-2 py-1 text-[12px] font-bold text-gray-800 bg-dark-bg border border-gray-600 rounded-lg dark:bg-dark-bg dark:text-gray-100 dark:border-gray-600">
          Ctrl + K
        </span>
      </button>
      <Grid>
        {Object.entries(libs).map(([id, data]) => (
          <div
            key={id}
            className="relative bg-black/30 w-[21rem] mx-auto rounded-2xl shadow-1xl ring-1 ring-white/10 "
          >
            <div className="relative z-10 flex flex-col justify-between h-full divide-y divide-white/10">
              <div className="flex justify-between items-center px-6">
                <div className="max-w-md">
                  <div className="pt-4 font-bold text-lg">{data.title}</div>
                  <div className="flex-grow pr-4 pt-1 pb-4 text-sm text-gray-500 !leading-relaxed ">
                    {data.description}
                  </div>
                </div>
                {data.icon && (
                  <div className="relative flex-shrink-0 w-20 h-20 ">
                    <a
                      href={data.github}
                      target="_blank"
                      rel="noopener"
                      className="block"
                    >
                      <Image
                        src={data.icon}
                        layout="fill"
                        className="object-contain"
                        alt={data.title}
                        aria-hidden
                      />
                    </a>
                  </div>
                )}
              </div>
              <div className="flex w-full divide-x divide-white/10 ">
                <Link
                  href={data.url}
                  className="inline-flex items-center space-x-2 w-1/2 hover:bg-gray-600/20  transition-colors rounded-l-2xl rounded-tl-none"
                >
                  <span className="sm:hidden px-8 py-4 mx-auto">Docs</span>
                  <span className="hidden sm:inline px-6 py-4 ">
                    Documentation
                  </span>
                </Link>
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 w-1/2 hover:bg-gray-600/20  transition-colors rounded-r-2xl rounded-tr-none"
                >
                  <span className="px-6 py-4 mx-auto">Github</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Grid>
    </Container>
  );
};

export default Documents;
