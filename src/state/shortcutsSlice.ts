import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { shortcutSchema, ShortcutType } from "./shortcutsSchema";

export interface ShortcutSlice {
  schema: ShortcutType[];
}

const initialState: ShortcutSlice = {
  schema: shortcutSchema,
};

export const shortcutSlice = createSlice({
  name: "shortcuts",
  initialState,
  reducers: {},
});

export const {} = shortcutSlice.actions;

export const selectShortcuts = (state: RootState) => state.shortcuts.schema;

export default shortcutSlice.reducer;
