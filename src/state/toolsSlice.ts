import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface SettingsState {
  test: boolean;
}

const initialState: SettingsState = {
  test: true,
};

export const toolsSlice = createSlice({
  name: "tools",
  initialState,
  reducers: {
    toggleRandomReminders: (state) => {
      state.test = true;
    },
    setFrequencyMinutesMin: (state, action: PayloadAction<boolean>) => {
      state.test = action.payload;
    },
  },
});

export const { toggleRandomReminders } = toolsSlice.actions;

export const selectSettings = (state: RootState) => state.tools.test;

export default toolsSlice.reducer;
