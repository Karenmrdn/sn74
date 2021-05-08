const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 4,
                message: action.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        }
        default:
            return state;
    }
}

export const addMessage = (newMessageText) => ({
    type: ADD_MESSAGE,
    newMessageText
})

export default dialogsReducer;