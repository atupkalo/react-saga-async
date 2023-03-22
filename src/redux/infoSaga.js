import { call, put, takeEvery } from "redux-saga/effects";
import { getInfo, setInfo } from "./features/infoSlice";

function concat(id) {
  const res = call(() => fetch(`https://api.thecatapi.com/v1/images/${id}`));
  return res;
}

function* fetchInfo(payload) {
  const ids = payload.payload;
  const res = [];
  ids.map((elem, i) => {
    return res.push(concat(elem));
  });

  console.log(res);
  const infoAll = yield call(() =>
    fetch(`https://api.thecatapi.com/v1/images/0XYvRd7oD`)
  );
  const trimmedInfo = yield infoAll.json();
  yield put(setInfo(trimmedInfo.breeds));
}

function* onLoadInfo() {
  yield takeEvery("info/getInfo", fetchInfo);
}

export default onLoadInfo;
