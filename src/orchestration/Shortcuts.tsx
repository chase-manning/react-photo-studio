import { useHotkeys } from "react-hotkeys-hook";
import { useDispatch, useSelector } from "react-redux";
import { ActionType } from "../state/actionSchema";
import { selectActions } from "../state/actionSlice";
import { DeviceShortcut } from "../services/ShortcutService";

const Shortcuts = () => {
  const dispatch = useDispatch();
  const actions = useSelector(selectActions);

  let shortcutKeys = actions.reduce(
    (a: string, b: ActionType) => a + DeviceShortcut(b) + ",",
    ""
  );
  shortcutKeys = shortcutKeys.substring(0, shortcutKeys.length - 1);

  useHotkeys(shortcutKeys, (event: KeyboardEvent, handler) => {
    event.preventDefault();
    if (event.repeat) return false;
    const action = actions.filter((shortcut: ActionType) => {
      return DeviceShortcut(shortcut) === handler.key;
    });
    if (action.length > 0) dispatch(action[0].action());
  });

  return null;
};

export default Shortcuts;
