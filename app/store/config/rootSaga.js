import { fork, all } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import {hofSagas} from '../saga/hofSaga';
function* rootSaga() {
  yield all([
    fork(hofSagas)
  ]);
}
export default rootSaga;
