import { put, takeEvery, all, select } from "redux-saga/effects";
import { FeatureRequest } from "../services/AnalyticsService";
import {
  requestFeature,
  selectedFeatureRequesting,
  selectFeatureRequests,
  featureRequested,
  clearFeatureRequest,
} from "./featureSlice";

/* WATCHERS */
function* watchRequestFeature() {
  yield takeEvery(requestFeature, trackFeatureRequest);
}

/* ACTIONS */
function* trackFeatureRequest() {
  const requestedFeature: string = yield select(selectedFeatureRequesting);
  const featureRequests: string[] = yield select(selectFeatureRequests);
  if (featureRequests.indexOf(requestedFeature) === -1) {
    FeatureRequest(requestedFeature);
    yield put(featureRequested(requestedFeature));
  } else yield put(clearFeatureRequest());
}

export default function* rootSaga() {
  yield all([watchRequestFeature()]);
}
