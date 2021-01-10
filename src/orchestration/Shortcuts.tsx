import { useHotkeys } from "react-hotkeys-hook";
import { useDispatch, useSelector } from "react-redux";
import { ShortcutType } from "../state/shortcutsSchema";
import { selectShortcuts } from "../state/shortcutsSlice";

const Shortcuts = () => {
  const shortcuts = useSelector(selectShortcuts);

  const shortcutKeys = shortcuts.reduce(
    (a: string, b: ShortcutType) => a + b.shortcut + ",",
    ""
  );

  useHotkeys(shortcutKeys, (event: KeyboardEvent, handler) => {
    event.preventDefault();
    if (event.repeat) return false;
    const shortcut = shortcuts.filter(
      (shortcut: ShortcutType) => shortcut.shortcut === handler.key
    );
    if (shortcut.length > 0) shortcut[0].action();
  });

  return null;
};

export default Shortcuts;
