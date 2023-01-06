import React from "react";
import { BsSearch } from "react-icons/bs";
import { useSearch } from "../../store/store";

const FakeInput = () => {
  const handleOpen = useSearch((state) => state.setOpen);
  return (
    <button
      onClick={handleOpen}
      className="flex items-center h-12 justify-around w-[15rem] mx-auto hover:bg-white/60 dark:hover:bg-gray-600/20 dark:bg-black/30 bg-light-transparent rounded-2xl  ring-1 dark:ring-white/10 ring-black/10"
    >
      <BsSearch className="text-xl " />

      <p className="text-sm placeholder-white/60 py-auto">Search docs...</p>
      <span className="px-2 py-1 text-[12px] font-bold text-gray-800  bg-light-bg border border-zinc-400 dark:border-zinc-700 rounded-lg dark:bg-dark-bg dark:text-gray-100 ">
        Ctrl + K
      </span>
    </button>
  );
};

export default FakeInput;
