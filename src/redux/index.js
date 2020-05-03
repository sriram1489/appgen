import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import DevTools from "../redux.devtools";
import { createLogger } from "redux-logger";
import GenericReducers from "./generic";

const rootReducer = {
    generic: GenericReducers
}

const reducer = combineReducers(rootReducer);

const store = () => {
    const storeCreate = createStore(
        reducer,
        {},
        compose(applyMiddleware(thunk, createLogger()), DevTools.instrument())
    );
    return storeCreate;
}

export default store;