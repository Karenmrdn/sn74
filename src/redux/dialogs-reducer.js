const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: "Karen"},
        {id: 2, name: "Nastia"},
        {id: 3, name: "Andrey"},
        {id: 4, name: "George"},
        {id: 5, name: "Gregory"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your studying?"},
        {id: 3, message: "Another message"},
    ],
    newMessageText: 'New message text'
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 4,
                message: state.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default:
            return state;
    }
}

export const addMessageCreator = () => ({
    type: 'ADD-MESSAGE'
})
export const updateNewMessageTextCreator = (text) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText: text
})

export default dialogsReducer;