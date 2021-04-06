import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

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
                ...action.data,
                isAuthed: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email) => ({type: SET_AUTH_USER_DATA, data: {userId, login, email}})

export const authMe = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, login, email));
                }
            });
    }
}

export default authReducer;