import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface FeatureSlice {
  requested: string[];
  requesting?: string;
}

const initialState: FeatureSlice = {
  requested: [],
  requesting: undefined,
};

export const featureSlice = createSlice({
  name: "features",
  initialState,
  reducers: {
    requestFeature: (state, action: PayloadAction<string>) => {
      state.requesting = action.payload;
    },
    featureRequested: (state, action: PayloadAction<string>) => {
      state.requested.push(action.payload);
    },
    clearFeatureRequest: (state) => {
      state.requesting = undefined;
    },
  },
});

export const { requestFeature, featureRequested, clearFeatureRequest } =
  featureSlice.actions;

export const selectFeatureRequests = (state: RootState) =>
  state.features.requested;
export const selectedFeatureRequesting = (state: RootState) =>
  state.features.requesting;

export default featureSlice.reducer;
