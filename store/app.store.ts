import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AppState {
  showFooter: boolean;
  firstTimeLoaded: boolean;
  setShowFooter: (show: boolean) => void;
  setFirstTimeLoaded: (value: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  showFooter: false,
  firstTimeLoaded: true,
  setShowFooter: (show) => {
    set(() => ({ showFooter: show }));
  },
  setFirstTimeLoaded: (show) => {
    set(() => ({ firstTimeLoaded: show }));
  },
}));
