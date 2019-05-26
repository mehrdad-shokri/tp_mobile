import {
    ON_ACTORS_LIST_FETCH_FAILURE,
    ON_ACTORS_LIST_FETCH_REQUEST,
    ON_ACTORS_LIST_FETCH_SUCCESS
} from '../constant/hof';

export function fetchActorsListRequest() {
    console.log('fetchActorsListRequest');

    return {
        type: ON_ACTORS_LIST_FETCH_REQUEST
    }
}

export function fetchActorsListSuccess(actorsList) {
    return {
        type: ON_ACTORS_LIST_FETCH_SUCCESS,
        actorsList
    }
}

export function fetchActorsListFailure() {
    return {
        type: ON_ACTORS_LIST_FETCH_FAILURE
    }
}
