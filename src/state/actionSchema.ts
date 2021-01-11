import { swapColors } from "./toolsSlice";

export type ActionType = {
  macShortcut: string;
  windowsShortcut: string;
  action: () => void;
};

export const actionSchema: ActionType[] = [
  {
    macShortcut: "command+r",
    windowsShortcut: "ctrl+n",
    action: () => swapColors(),
  },
];
