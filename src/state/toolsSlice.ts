import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  tools,
  ToolCollection,
  ToolOption,
} from "../sections/tools/toolSchema";
import { RootState } from "./store";

export interface SettingsState {
  schema: ToolCollection[];
}

const initialState: SettingsState = {
  schema: tools,
};

export const toolsSlice = createSlice({
  name: "tools",
  initialState,
  reducers: {
    setActiveTool: (state, action: PayloadAction<ToolOption>) => {
      state.schema = state.schema;
    },
  },
});

export const { setActiveTool } = toolsSlice.actions;

export const selectTools = (state: RootState) => state.tools.schema;

export default toolsSlice.reducer;
