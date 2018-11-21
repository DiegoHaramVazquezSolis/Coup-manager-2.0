import { combineReducers } from 'redux';
import {
    GET_TEAM_SUCCESS
} from './../actions/teamActions';

function data(state={}, action) {
    switch (action.type) {
        case GET_TEAM_SUCCESS:
            return action.team;
        default:
            return state;
    }
}

export const teamReducer = combineReducers({
    data
});