import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 7},
                {id: 3, message: "Another post", likesCount: 31}
            ],
            newPostText: "New post text"
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your studying?"},
                {id: 3, message: "Another message"},
            ],
            dialogs: [
                {id: 1, name: "Karen"},
                {id: 2, name: "Nastia"},
                {id: 3, name: "Andrey"},
                {id: 4, name: "George"},
                {id: 5, name: "Gregory"}
            ],
            newMessageText: 'New message text'
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State was changed. Fake rerenderEntireTree()');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;

window.store = store;
