import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type Event = {
  layer: number;
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
  },
});

export const { setName } = fileSlice.actions;

export const selectFileName = (state: RootState) => state.file.name;

export default fileSlice.reducer;
