import {
    ON_ACTORS_LIST_FETCH_SUCCESS,
    ON_ACTORS_LIST_FETCH_REQUEST,
    ON_ACTORS_LIST_FETCH_FAILURE
} from '../constant/hof';


export default function (state = null, action) {
    switch (action.type) {
        case ON_ACTORS_LIST_FETCH_REQUEST:
            return Object.assign({}, state, {loading: true});
        case ON_ACTORS_LIST_FETCH_SUCCESS:
            return Object.assign({}, state, {actorsList: action.actorsList, loading: false});
        case ON_ACTORS_LIST_FETCH_FAILURE:
            return Object.assign({}, state, {loading: false});
        default:
            return state;
    }
}
