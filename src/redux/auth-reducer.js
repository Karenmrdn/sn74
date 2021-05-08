import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuthed: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email, isAuthed) => ({
    type: SET_AUTH_USER_DATA,
    payload: {userId, login, email, isAuthed}
})

export const authMe = () => async (dispatch) => {

    const data = await authAPI.authMe();

    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, login, email, true));
    }

}

export const login = (email, password, rememberMe) => async (dispatch) => {

    const data = await authAPI.login(email, password, rememberMe);

    if (data.resultCode === 0) {
        dispatch(authMe());
    } else {
        dispatch(stopSubmit('login', {_error: data.messages}));
    }

}

export const logout = () => async (dispatch) => {
    const data = await authAPI.logout()

    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }

}


export default authReducer;