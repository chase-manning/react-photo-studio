import { isMacOs } from "react-device-detect";

import { ActionType } from "../state/actionSchema";

export const DeviceShortcut = (shortcut: ActionType) =>
  isMacOs ? shortcut.macShortcut : shortcut.windowsShortcut;

export const ShortcutFormat = (shortcut: ActionType) =>
  DeviceShortcut(shortcut)
    .replace("command", "⌘")
    .replace("option", "⌥")
    .replace("control", "⌃")
    .replace("shift", "⇧");
