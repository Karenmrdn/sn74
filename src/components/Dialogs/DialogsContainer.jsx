import React from "react";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

/*const DialogsContainer = () => {


    return <StoreContext.Consumer>
        {store => {
            let state = store.getState().dialogsPage;

            let onAddMessage = () => {
                let action = addMessageCreator();
                store.dispatch(action);
            };

            let onMessageChange = (text) => {
                let action = updateNewMessageTextCreator(text);
                store.dispatch(action);
            }

            return <Dialogs addMessage={onAddMessage}
                            updateNewMessageText={onMessageChange}
                            dialogs={state.dialogs}
                            messages={state.messages}
                            newMessageText={state.newMessageText}/>
        }
        }
    </StoreContext.Consumer>
}*/


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            let action = addMessageCreator();
            dispatch(action);
        },
        updateNewMessageText: (text) => {
            let action = updateNewMessageTextCreator(text);
            dispatch(action);
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);