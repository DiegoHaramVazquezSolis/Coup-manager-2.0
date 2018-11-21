import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { checkUser } from "./../actions/userActions";
import { rootReducer } from "./../reducers/rootReducer";

const logger = store => next => action => {
    if (action !== undefined) {
        console.group(action.type)
        console.info('dispatching', action)
        let result = next(action)
        console.log('next state', store.getState())
        console.groupEnd()
        return result;
    }
  }

export function configureStore() {
    const store = createStore(
        rootReducer,
        applyMiddleware(logger, thunk)
    );
    store.dispatch(checkUser());
    return store;
}