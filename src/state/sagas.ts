import { put, takeEvery, all, select, call } from "redux-saga/effects";
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
const delay = (time: number) =>
  // eslint-disable-next-line
  new Promise((resolve) => setTimeout(resolve, time));

function* trackFeatureRequest() {
  const requestedFeature: string = yield select(selectedFeatureRequesting);
  const featureRequests: string[] = yield select(selectFeatureRequests);
  if (featureRequests.indexOf(requestedFeature) === -1) {
    FeatureRequest(requestedFeature);
    yield put(featureRequested(requestedFeature));
  }

  yield call(delay, 5000);
  yield put(clearFeatureRequest());
}

export default function* rootSaga() {
  yield all([watchRequestFeature()]);
}
