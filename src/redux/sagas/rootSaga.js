import { fork, all, takeLatest, call } from 'redux-saga/effects';
import { TEST_FETCH_DATA_REQUEST } from '../../constants/constRedux';


function getMovies() {
  return fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())
};

function* testFetchDataRequest() {
  try {
    console.log('vaod ')
    const res = yield call(getMovies);
    console.log("RES", res)
  } catch (error) {
  }
}

const sagas = function* () {
  yield all([
    takeLatest(TEST_FETCH_DATA_REQUEST, testFetchDataRequest)
  ]);
};

export default sagas;