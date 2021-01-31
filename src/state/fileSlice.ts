import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Position } from "./cursorSlice";
import { RootState } from "./store";

export type Event = {
  type: string;
  layer: number;
  x?: number;
  y?: number;
  size?: number;
  color?: number;
  points?: Position[];
};

export interface FileSlice {
  name: string;
  events: Event[];
}

const initialState: FileSlice = {
  name: "Untitled-1",
  events: [],
};

export const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    addEvent: (state, action: PayloadAction<Event>) => {
      state.events.push(action.payload);
    },
    addPoint: (state, action: PayloadAction<Position>) => {
      state.events[state.events.length - 1].points?.push(action.payload);
    },
  },
});

export const { setName, addEvent, addPoint } = fileSlice.actions;

export const selectFileName = (state: RootState) => state.file.name;
export const selectEvents = (state: RootState) => state.file.events;

export default fileSlice.reducer;
