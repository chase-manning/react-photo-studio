import { FeatureRequest } from "../services/AnalyticsService";

export enum Action {
  NEW_FILE,
  OPEN_FILE,
}

export type ActionType = {
  type: Action;
  macShortcut: string;
  windowsShortcut: string;
  action: () => void;
};

export const actionSchema: ActionType[] = [
  {
    type: Action.NEW_FILE,
    macShortcut: "command+n",
    windowsShortcut: "ctrl+n",
    action: () => FeatureRequest("Menu/File/New..."),
  },
  {
    type: Action.OPEN_FILE,
    macShortcut: "command+n",
    windowsShortcut: "ctrl+n",
    action: () => FeatureRequest("Menu/File/Open..."),
  },
];
