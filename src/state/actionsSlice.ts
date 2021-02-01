import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { actionSchema, ActionType } from "./actionSchema";

export interface ActionSlice {
  schema: ActionType[];
  fileOpen: boolean;
}

const initialState: ActionSlice = {
  schema: actionSchema,
  fileOpen: false,
};

export const actionSlice = createSlice({
  name: "actions",
  initialState,
  reducers: {
    clearSchema: (state) => {
      state.schema = [];
    },
    openFile: (state) => {
      state.fileOpen = true;
    },
    fileOpened: (state) => {
      state.fileOpen = false;
    },
  },
});

export const { clearSchema, openFile, fileOpened } = actionSlice.actions;

export const selectActions = (state: RootState) => state.actions.schema;
export const selectFileOpen = (state: RootState) => state.actions.fileOpen;

export default actionSlice.reducer;
