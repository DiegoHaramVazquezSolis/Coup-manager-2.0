import { combineReducers } from 'redux';
import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS
} from './../actions/userActions';

function data(state={}, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return action.data;
        case LOGOUT_SUCCESS:
            return {};
        default:
            return state;
    }
}

export const userReducer = combineReducers({
    data
});