import { swapColors } from "./toolsSlice";

export type ShortcutType = {
  macShortcut: string;
  windowsShortcut: string;
  action: () => void;
};

export const shortcutSchema: ShortcutType[] = [
  {
    macShortcut: "command+r",
    windowsShortcut: "ctrl+n",
    action: () => swapColors(),
  },
];
