import type { NextPage } from "next";

import Link from "next/link";
import Image from "next/image";
import libs from "../data/libraries";

import Grid from "../components/grid";
import CommandPallete from "../components/commandPallete";
import Container from "../components/container";
import { BsSearch } from "react-icons/bs";
import { useSearch } from "../store/store";
import Libcard from "../components/Libcard";

const Documents: NextPage = () => {
  const handleOpen = useSearch((state) => state.setOpen);

  return (
    <Container>
      <CommandPallete />
      <button
        onClick={handleOpen}
        className="flex items-center h-12 justify-around w-[15rem] mx-auto bg-black/30 rounded-2xl  ring-1 ring-white/10"
      >
        <BsSearch className="text-2xl " />

        <p className="text-sm placeholder-white/60 py-auto">Search docs...</p>
        <span className="px-2 py-1 text-[12px] font-bold text-gray-800 bg-dark-bg border border-gray-600 rounded-lg dark:bg-dark-bg dark:text-gray-100 dark:border-gray-600">
          Ctrl + K
        </span>
      </button>
      <Grid>
        {Object.entries(libs).map(([id, data]) => (
          <Libcard key={id} {...data} />
        ))}
      </Grid>
    </Container>
  );
};

export default Documents;
