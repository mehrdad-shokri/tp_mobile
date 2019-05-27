import {all, takeLatest, call, put} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import {ON_ACTORS_LIST_FETCH_REQUEST} from '../constant/hof';
import axios from 'axios'
import {fetchActorsListSuccess, fetchActorsListFailure} from '../action/hof';

const actorsApi = 'http://www.mocky.io/v2/5ceb87d233000045807c3a7e';
const SHELDEN_COOPER = {
    "name": "Shelden Cooper",
    "url": "https://i.pinimg.com/originals/2e/29/c4/2e29c41787d04c4b3de4aa3832566357.jpg",
    "key": "shelden-cooper"
};

function* getActorsImages() {
    try {
        const response = yield call(() => axios.get(actorsApi));
        const actorsList = response.data.data;
        if (actorsList.length > 3) actorsList.splice(2, 0, SHELDEN_COOPER);
        else actorsList.push(SHELDEN_COOPER);
        yield put(fetchActorsListSuccess(actorsList));
    } catch (e) {
        yield put(fetchActorsListFailure())
    }
}

function* hofSagas() {
    yield all([
        takeLatest(ON_ACTORS_LIST_FETCH_REQUEST, getActorsImages)
    ])
}

export {hofSagas};
