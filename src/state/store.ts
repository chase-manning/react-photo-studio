import {
  ThunkAction,
  Action,
  createStore,
  applyMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import toolsReducer from "./toolsSlice";
import actionReducer from "./actionsSlice";
import cursorReducer from "./cursorSlice";
import layersReducer from "./layersSlice";

export const reducer = combineReducers({
  tools: toolsReducer,
  actions: actionReducer,
  cursor: cursorReducer,
  layers: layersReducer,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
