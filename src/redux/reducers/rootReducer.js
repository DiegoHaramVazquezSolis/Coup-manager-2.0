import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { teamReducer } from "./teamReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    team: teamReducer
});