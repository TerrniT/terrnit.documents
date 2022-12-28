import create from "zustand";
import { persist, devtools } from "zustand/middleware";

interface SearchStore {
  open: boolean;
  setOpen: () => void;
}

export const useSearch = create<SearchStore>()(
  devtools(
    persist((set) => ({
      open: false,

      setOpen: () => set((state) => ({ open: !state.open })),
    }))
  )
);
