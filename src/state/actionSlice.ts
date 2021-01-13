import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { actionSchema, ActionType } from "./actionSchema";

export interface ActionSlice {
  schema: ActionType[];
}

const initialState: ActionSlice = {
  schema: actionSchema,
};

export const actionSlice = createSlice({
  name: "actions",
  initialState,
  reducers: {
    clearSchema: (state) => {
      state.schema = [];
    },
  },
});

export const { clearSchema } = actionSlice.actions;

export const selectActions = (state: RootState) => state.actions.schema;

export default actionSlice.reducer;
