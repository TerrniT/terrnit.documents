import { useState, useEffect, Fragment, ChangeEvent } from "react";
import { Dialog, Combobox, Transition } from "@headlessui/react";
import { BsSearch } from "react-icons/bs";
import libs, { Library } from "../data/libraries";
import { useSearch } from "../store/store";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SignInButton } from "./atoms/button";

export default function commandPallete() {
  const { open, handleOpen } = useSearch((state) => ({
    open: state.open,
    handleOpen: state.setOpen,
  }));

  const [query, setQuery] = useState<string>("");

  const filteredLibs = libs.filter((lib) =>
    lib.title.toLowerCase().includes(query)
  );

  useEffect(() => {
    function onKeydown(event: any) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        handleOpen();
      }
    }
    window.addEventListener("keydown", onKeydown);
    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, [open]);

  return (
    <AnimatePresence>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          open={open}
          onClose={handleOpen}
          className="fixed inset-0 p-4 pt-[25vh] overflow-hidden z-40"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/10 dark:bg-dark-bg dark:bg-opacity-10 bg-opacity-10 backdrop-blur backdrop-filter" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Combobox
              as="div"
              onChange={(lib: any) => {
                window.open(lib.url, "_blank");
              }}
              className="scrollbar-w-1 scrollbar-thumb-gray-400 scrollbar-track-gray-200 relative bg-light-transparent/40 dark:bg-dark-transparent/60 max-w-xl mx-auto rounded-2xl shadow-2xl ring-1 ring-white/10  divide-y divide-gray-800 overflow-hidden"
            >
              <div className="flex items-center justify-center px-3">
                <BsSearch />
                <Combobox.Input
                  value={query}
                  onChange={(event) =>
                    setQuery(event?.target.value.toLowerCase())
                  }
                  className="overflow-hidden w-full bg-transparent border-none  focus:outline-none focus:ring-0 text-sm placeholder-black/60 dark:placeholder-white/60 p-3 h-12 focus:border-transparent"
                  placeholder="Search docs..."
                />

                <SignInButton />
              </div>
              {/* TODO: Rewrite filter-function (name -> title by type Library) */}
              {filteredLibs.length > 0 ? (
                <Combobox.Options className="py-4 text-sm max-h-96 overflow-y-auto ">
                  {filteredLibs.map((lib) => (
                    <Combobox.Option
                      className="px-2 my-2"
                      key={lib.id}
                      value={lib}
                    >
                      {({ active }) => (
                        <div
                          className={`px-4 py-2 ${
                            !active
                              ? "bg-black/10 "
                              : "bg-white dark:bg-dark-transparent/80  "
                          } rounded-xl`}
                        >
                          <span
                            className={`text-medium pr-2 ${
                              !active
                                ? "dark:text-white text-black font-medium"
                                : "text-light-acsent dark:text-dark-acsent font-medium"
                            }`}
                          >
                            {lib.title}
                          </span>
                          <span className="text-black dark:text-gray-600 text-xs">
                            {lib.description}
                          </span>
                        </div>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              ) : (
                <div className="p-4 w-full bg-gradient-to-t dark:from-black from-orange-50 flex flex-col justify-center items-center rounded-md ">
                  <Image
                    src="/sad_cat_with_bread.png"
                    alt="not found"
                    width={120}
                    height={120}
                  />

                  <span className="text-lg font-bold text-zinc-600  mx-auto text-center mb-3 ">
                    No result's found
                  </span>
                </div>
              )}
            </Combobox>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </AnimatePresence>
  );
}
