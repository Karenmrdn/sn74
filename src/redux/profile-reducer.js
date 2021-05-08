import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';

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
    const data = await profileAPI.updateStatus(status);

    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;