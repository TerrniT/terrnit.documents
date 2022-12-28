import { useState, useEffect, Fragment } from "react";
import { Dialog, Combobox, Transition } from "@headlessui/react";
import { BsSearch } from "react-icons/bs";
import libs from "../data/libraries";
import { useSearch } from "../store/store";

export default function commandPallete() {
  const { open, handleOpen } = useSearch((state) => ({
    open: state.open,
    handleOpen: state.setOpen,
  }));

  const [query, setQuery] = useState("");

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
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        open={open}
        onClose={handleOpen}
        className="fixed inset-0 p-4 pt-[25vh] overflow-hidden z-40"
      >
        <Transition.Child>
          <Dialog.Overlay className="fixed inset-0 bg-light-acsent dark:bg-dark-bg dark:bg-opacity-10 bg-opacity-10 backdrop-blur backdrop-filter" />
        </Transition.Child>
        <Combobox
          as="div"
          onChange={(lib: unknown) => {
            window.open(lib.url, "_blank");
          }}
          className="scrollbar-w-1 scrollbar-thumb-gray-400 scrollbar-track-gray-200 relative bg-light-transparent/40 dark:bg-dark-transparent/60 max-w-xl mx-auto rounded-2xl shadow-2xl ring-1 ring-white/10  divide-y divide-gray-800 overflow-hidden"
        >
          <div className="flex items-center justify-center px-3">
            <BsSearch />
            <Combobox.Input
              onChange={(event) => setQuery(event.target.value)}
              className="overflow-hidden w-full bg-transparent border-none focus:outline-none focus:ring-0 text-sm placeholder-white/60 p-3 h-12 focus:border-transparent"
              placeholder="Search docs..."
            />
          </div>
          {Object.entries(libs).length > 0 && (
            <Combobox.Options className="py-4  text-sm max-h-96 overflow-y-auto ">
              {Object.entries(libs).map(([id, data]) => (
                <Combobox.Option className="px-2 my-2" key={id} value={data}>
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
                        {data.title}
                      </span>
                      <span className="text-black dark:text-gray-600 text-xs">
                        {data.description}
                      </span>
                    </div>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
        </Combobox>
      </Dialog>
    </Transition.Root>
  );
}
