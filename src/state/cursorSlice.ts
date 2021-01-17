import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { actionSchema, ActionType } from "./actionSchema";

export type Position = {
  x: number;
  y: number;
};

export interface CursorSlice {
  position: Position;
}

const initialState: CursorSlice = {
  position: {
    x: 0,
    y: 0,
  },
};

export const cursorSlice = createSlice({
  name: "cursor",
  initialState,
  reducers: {
    setCursorPosition: (state, action: PayloadAction<Position>) => {
      state.position = action.payload;
    },
  },
});

export const { setCursorPosition } = cursorSlice.actions;

export const selectCursorPosition = (state: RootState) => state.cursor.position;

export default cursorSlice.reducer;
