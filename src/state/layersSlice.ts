import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type LayerType = {
  name: string;
  active: boolean;
  visible: boolean;
  locked: boolean;
};

export interface LayersSlice {
  schema: LayerType[];
}

const initialState: LayersSlice = {
  schema: [
    {
      name: "Layer 4",
      active: true,
      visible: false,
      locked: false,
    },
    {
      name: "Layer 3",
      active: false,
      visible: true,
      locked: false,
    },
    {
      name: "Layer 2",
      active: false,
      visible: false,
      locked: true,
    },
    {
      name: "Layer 1",
      active: false,
      visible: false,
      locked: false,
    },
  ],
};

export const layersSlice = createSlice({
  name: "layers",
  initialState,
  reducers: {
    toggleLayerVisibility: (state, action: PayloadAction<number>) => {
      state.schema[action.payload].visible =
        state.schema[action.payload].visible;
    },
  },
});

export const { toggleLayerVisibility } = layersSlice.actions;

export const selectLayers = (state: RootState) => state.layers.schema;

export default layersSlice.reducer;
