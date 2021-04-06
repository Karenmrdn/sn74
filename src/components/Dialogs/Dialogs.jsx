import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    let messagesElements = props.dialogsPage.messages.map((m) => <Message key={m.id} message={m.message}/>);

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = (e) =>{
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div>
                        <textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;