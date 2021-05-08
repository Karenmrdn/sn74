import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../utils/validators/validators";
import {ElementCreator} from '../../common/FormControls/FormControl'

const maxLength50 = maxLength(50);
const Textarea = ElementCreator("textarea");

const DialogsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='newMessageText' component={Textarea} validate={[required, maxLength50]} placeholder='Enter your message'/>
        </div>
        <div>
            <button>Add message</button>
        </div>
    </form>
}

const DialogsFormRedux = reduxForm({form: 'dialogsForm'})(DialogsForm);

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map((m) => <Message key={m.id} message={m.message}/>);

    let addMessageSubmit = (values) => {
        props.addMessage(values.newMessageText);
    };

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
                    <DialogsFormRedux onSubmit={addMessageSubmit}/>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;