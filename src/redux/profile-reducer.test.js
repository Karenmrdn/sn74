import React from "react";
import profileReducer, {addPost, deletePost} from "./profile-reducer";

let initialState =  {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 7},
        {id: 3, message: "Another post", likesCount: 31}
    ],
    profile: null,
    status: ''
};

test('new post should be added', () => {
    // 1. test data
    let action = addPost('text of new post');

    // 2. action
    let newState = profileReducer(initialState, action);

    // 3. expected result
    expect(newState.posts.length).toBe(4);
});

test('new post text should be correct', () => {
    let action = addPost('text of new post');

    let newState = profileReducer(initialState, action);

    expect(newState.posts[3].message).toBe('text of new post');
});

test('after post deleting messages length should be decremented', () => {
    let action = deletePost(1);

    let newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(2);
});