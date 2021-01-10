import { useHotkeys } from "react-hotkeys-hook";
import { useDispatch, useSelector } from "react-redux";
import { ShortcutType } from "../state/shortcutsSchema";
import { selectShortcuts } from "../state/shortcutsSlice";
import { isMacOs } from "react-device-detect";

const Shortcuts = () => {
  const dispatch = useDispatch();
  const shortcuts = useSelector(selectShortcuts);

  const shortcutKeys = shortcuts.reduce(
    (a: string, b: ShortcutType) =>
      a + isMacOs ? b.macShortcut : b.windowsShortcut + ",",
    ""
  );

  useHotkeys(shortcutKeys, (event: KeyboardEvent, handler) => {
    event.preventDefault();
    if (event.repeat) return false;
    const shortcut = shortcuts.filter((shortcut: ShortcutType) =>
      isMacOs ? shortcut.macShortcut : shortcut.windowsShortcut === handler.key
    );
    if (shortcut.length > 0) dispatch(shortcut[0].action());
  });

  return null;
};

export default Shortcuts;
