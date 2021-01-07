import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  tools,
  ToolCollection,
  ToolOption,
  ToolType,
} from "../sections/tools/toolSchema";
import { RootState } from "./store";

export interface SettingsState {
  schema: ToolCollection[];
  primaryColor: string;
  secondaryColor: string;
}

const initialState: SettingsState = {
  schema: tools,
  primaryColor: "black",
  secondaryColor: "white",
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
    setPrimaryColor: (state, action: PayloadAction<string>) => {
      state.primaryColor = action.payload;
    },
    setSecondaryColor: (state, action: PayloadAction<string>) => {
      state.secondaryColor = action.payload;
    },
    swapColors: (state) => {
      const pc = state.primaryColor;
      state.primaryColor = state.secondaryColor;
      state.secondaryColor = pc;
    },
    setDefaultColors: (state) => {
      state.primaryColor = "red";
      state.secondaryColor = "blue";
    },
  },
});

export const {
  setActiveTool,
  setPrimaryColor,
  setSecondaryColor,
  swapColors,
  setDefaultColors,
} = toolsSlice.actions;

export const selectTools = (state: RootState) => state.tools.schema;
export const selectPrimaryColor = (state: RootState) =>
  state.tools.primaryColor;
export const selectSecondaryColor = (state: RootState) =>
  state.tools.secondaryColor;

export default toolsSlice.reducer;
