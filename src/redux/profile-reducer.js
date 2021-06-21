import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 7},
        {id: 3, message: "Another post", likesCount: 31}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: action.postText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
}

// Action creators:
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})
export const addPost = (postText) => ({
    type: ADD_POST,
    postText
})
export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId
})
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})
export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
})

// Thunk creators:
export const getUserProfile = (userId) => async (dispatch) => {
    const data = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(data));
}

export const getStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
}

export const updateStatus = (status) => async (dispatch) => {
    try {
        const data = await profileAPI.updateStatus(status);
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        alert(error.message);   // ЭТО НУЖНО СРОЧНО ЗАМЕНИТЬ ДИСПАТЧЕМ САНКИ
    }
}

export const savePhoto = (file) => async (dispatch) => {
    const data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        dispatch(setUserProfile(profile));
    } else {
        const message = data.messages.length > 0 ? data.messages[0] : 'Unknown error occurred';
        dispatch(stopSubmit('editProfile', {_error: message}));
        /*Метод Promise.reject(reason) возвращает объект Promise, который был отклонён по указанной причине.
        Мы используем его здесь, чтобы не менять editMode на true в случае, если есть ошибка
        Так же в ProfileInfo.jsx мы использовали then() в функции onSubmit*/
        return Promise.reject(message);
    }
}


export default profileReducer;