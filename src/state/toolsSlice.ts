import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tools, ToolCollection, ToolOption, ToolType } from "./toolSchema";
import { RootState } from "./store";
import { OptionOption, OptionSectionType, OptionType } from "../types/options";

export interface SettingsState {
  schema: ToolCollection[];
  primaryColor: string;
  secondaryColor: string;
}

const initialState: SettingsState = {
  schema: tools,
  primaryColor: "#000000",
  secondaryColor: "#ffffff",
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
      state.primaryColor = "#000000";
      state.secondaryColor = "#ffffff";
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
export const selectTool = (state: RootState) => {
  const col = state.tools.schema.filter((col: ToolCollection) => col.active)[0];
  return col.tools.filter((tool: ToolType) => tool.selected)[0];
};
export const selectToolOption = (state: RootState) => selectTool(state).option;
export const selectOptionSections = (state: RootState) =>
  selectTool(state).optionSections;
export const selectOptions = (state: RootState) => {
  const options: OptionType[] = [];
  selectOptionSections(state).forEach((sec: OptionSectionType) =>
    options.push(...sec.options)
  );
  return options;
};

export const selectBrushSize = (state: RootState) => {
  const options = selectOptions(state);
  const brushOptions = options.filter(
    (option: OptionType) => option.option === OptionOption.BRUSH
  );
  if (brushOptions.length > 0) return brushOptions[0].value;
  return 0;
};

export default toolsSlice.reducer;
