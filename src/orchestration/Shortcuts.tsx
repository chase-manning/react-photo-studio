import hotkeys from "hotkeys-js";
import React, { useEffect } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useDispatch, useSelector } from "react-redux";
import { ShortcutType } from "../state/shortcutsSchema";
import { selectShortcuts } from "../state/shortcutsSlice";

const Shortcuts = () => {
  const dispatch = useDispatch();
  const shortcuts = useSelector(selectShortcuts);

  useHotkeys("command+r", () => {
    console.log("meowmeow");
    return false;
  });

  // shortcuts.forEach((shortcut: ShortcutType) => {
  //   hotkeys("command+r", (event) => {
  //     if (!event.repeat) {
  //       // console.log("key");
  //       alert("meow");
  //     }
  //     return false;
  //   });
  // });

  return null;
};

export default Shortcuts;
