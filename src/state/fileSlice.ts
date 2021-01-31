import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export enum EventType {
  CIRCLE,
}

export type Event = {
  type: EventType;
  layer: number;
  x?: number;
  y?: number;
  size?: number;
  color?: number;
};

export interface FileSlice {
  name: string;
  events: Event[];
}

const initialState: FileSlice = {
  name: "Untitled-1",
  events: [
    {
      type: EventType.CIRCLE,
      layer: 0,
      x: 100,
      y: 200,
      size: 80,
      color: 0xe74c3c,
    },
  ],
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
  },
});

export const { setName, addEvent } = fileSlice.actions;

export const selectFileName = (state: RootState) => state.file.name;
export const selectEvents = (state: RootState) => state.file.events;

export default fileSlice.reducer;
