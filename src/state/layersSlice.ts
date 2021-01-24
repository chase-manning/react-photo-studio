import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type LayerType = {
  name: string;
  active: boolean;
  selected: boolean;
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
      selected: true,
      visible: false,
      locked: true,
    },
    {
      name: "Layer 3",
      active: false,
      selected: false,
      visible: true,
      locked: false,
    },
    {
      name: "Layer 2",
      active: false,
      selected: false,
      visible: false,
      locked: true,
    },
    {
      name: "Layer 1",
      active: false,
      selected: false,
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
      state.schema[action.payload].visible = !state.schema[action.payload]
        .visible;
    },
  },
});

export const { toggleLayerVisibility } = layersSlice.actions;

export const selectLayers = (state: RootState) => state.layers.schema;
export const selectActiveLayer = (state: RootState) => {
  const active = state.layers.schema.filter((layer: LayerType) => layer.active);
  if (active.length > 0) return active[0];
  return null;
};
export const selectSelectedLayers = (state: RootState) =>
  state.layers.schema.filter((layer: LayerType) => layer.selected);

export default layersSlice.reducer;
