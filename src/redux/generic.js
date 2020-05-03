import * as service from "../services";
import { createReducer } from "@reduxjs/toolkit"

const LOAD_INIT_DATA = "generic/load_init_data";

// Actions
const loadInitDataAction = (data) => ({ type: LOAD_INIT_DATA, payload: data });
const actionTypes = { LOAD_INIT_DATA }
const actions = { loadInitDataAction }
export { actionTypes, actions };

// Action Creators
export const loadInitDataThunkAction = () => async (dispatch) => {
    let data = [];
    await service.getInitData().then(response => {
        data = response;
    });

    dispatch(loadInitDataAction(data));
}

function loadInitDataActionReducer(state, action) {
    state.initData = action.payload;
    return state;
}

const reducers = {
    [LOAD_INIT_DATA]: loadInitDataActionReducer
}

const initialState = {
    initData: []
}

const GenericReducers = createReducer(initialState, reducers)

export default GenericReducers