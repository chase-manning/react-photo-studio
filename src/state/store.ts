import {
  ThunkAction,
  Action,
  createStore,
  applyMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import toolsReducer from "./toolsSlice";
import actionReducer from "./actionsSlice";
import cursorReducer from "./cursorSlice";
import layersReducer from "./layersSlice";
import featuresReducer from "./featureSlice";
import fileReducer from "./fileSlice";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const reducer = combineReducers({
  tools: toolsReducer,
  actions: actionReducer,
  cursor: cursorReducer,
  layers: layersReducer,
  features: featuresReducer,
  file: fileReducer,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, thunk))
);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
