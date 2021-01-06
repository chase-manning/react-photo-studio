import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import {
  tools,
  ToolCollection,
  ToolOption,
  ToolType,
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
      for (let i = 0; i < state.schema.length; i++) {
        const options = state.schema[i].tools;
        const optionTypes = options.map((tool: ToolType) => tool.option);
        const containsToolOption = optionTypes.indexOf(action.payload) > -1;
        state.schema[i].active = containsToolOption;

        if (containsToolOption)
          for (let j = 0; j < options.length; j++)
            options[j].selected = options[j].option === action.payload;
      }
    },
  },
});

export const { setActiveTool } = toolsSlice.actions;

export const selectTools = (state: RootState) => state.tools.schema;

export default toolsSlice.reducer;
