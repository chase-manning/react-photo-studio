import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectShortcuts } from "../state/shortcutsSlice";

const Shortcuts = () => {
  const dispatch = useDispatch();
  const shortcuts = useSelector(selectShortcuts);

  return null;
};

export default Shortcuts;
