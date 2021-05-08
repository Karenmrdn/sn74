import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {authMe} from "./auth-reducer";

const INITIALIZED_SUCCESSFULLY = 'INITIALIZED_SUCCESSFULLY';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESSFULLY:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccessfully = () => ({type: INITIALIZED_SUCCESSFULLY});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authMe());

    /*// В ТОМ СЛУЧАЕ, ЕСЛИ У НАС БОЛЬШЕ ДВУХ ПРОМИСОВ:
    Promise.all([promise, someAnotherPromise]).then(() => {
        dispatch(initializedSuccessfully());
    })*/
    promise.then(() => {
        dispatch(initializedSuccessfully());
    })

}

export default appReducer;