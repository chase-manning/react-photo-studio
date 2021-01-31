import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type Position = {
  x: number;
  y: number;
};

export interface CursorSlice {
  position: Position;
  document: boolean;
  down: boolean;
  canvasPosition: Position;
}

const initialState: CursorSlice = {
  position: {
    x: 0,
    y: 0,
  },
  document: false,
  down: false,
  canvasPosition: {
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
    enterDocument: (state) => {
      state.document = true;
    },
    exitDocument: (state) => {
      state.document = false;
    },
    mouseDown: (state) => {
      state.down = true;
    },
    mouseUp: (state) => {
      state.down = false;
    },
    setCanvasPosition: (state, action: PayloadAction<Position>) => {
      state.canvasPosition = action.payload;
    },
  },
});

export const {
  setCursorPosition,
  enterDocument,
  exitDocument,
  mouseDown,
  mouseUp,
  setCanvasPosition,
} = cursorSlice.actions;

export const selectCursorPosition = (state: RootState) => state.cursor.position;
export const selectCursorDocument = (state: RootState) => state.cursor.document;
export const selectCursorDown = (state: RootState) => state.cursor.down;
export const selectCursorCanvasPosition = (state: RootState) => {
  return {
    x: state.cursor.position.x - state.cursor.canvasPosition.x,
    y: state.cursor.position.y - state.cursor.canvasPosition.y,
  };
};
export const selectCanvasPosition = (state: RootState) =>
  state.cursor.canvasPosition;

export default cursorSlice.reducer;
