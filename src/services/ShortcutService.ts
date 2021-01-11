import { ShortcutType } from "../state/shortcutsSchema";

import { isMacOs } from "react-device-detect";

export const DeviceShortcut = (shortcut: ShortcutType) =>
  isMacOs ? shortcut.macShortcut : shortcut.windowsShortcut;

export const ShortcutFormat = (shortcut: ShortcutType) =>
  DeviceShortcut(shortcut)
    .replace("command", "⌘")
    .replace("option", "⌥")
    .replace("control", "⌃")
    .replace("shift", "⇧");
