import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { layer } from "../sections/menu/schema/layer";
import generateGuid from "../services/GuidService";
import { RootState } from "./store";

export type LayerType = {
  id: string;
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
      id: generateGuid(),
      name: "Layer 1",
      active: true,
      selected: true,
      visible: true,
      locked: true,
    },
    {
      id: generateGuid(),
      name: "Layer 1",
      active: false,
      selected: false,
      visible: true,
      locked: true,
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
    setActiveLayer: (state, action: PayloadAction<string>) => {
      state.schema.forEach((layer: LayerType) => {
        layer.active = false;
        layer.selected = false;
      });
      let layer = state.schema.filter(
        (layer: LayerType) => layer.id === action.payload
      )[0];
      layer.active = true;
      layer.selected = true;
    },
  },
});

export const { toggleLayerVisibility, setActiveLayer } = layersSlice.actions;

export const selectLayers = (state: RootState) => state.layers.schema;
export const selectActiveLayer = (state: RootState) => {
  const active = state.layers.schema.filter((layer: LayerType) => layer.active);
  if (active.length > 0) return active[0];
  return null;
};
export const selectSelectedLayers = (state: RootState) =>
  state.layers.schema.filter((layer: LayerType) => layer.selected);

export default layersSlice.reducer;
