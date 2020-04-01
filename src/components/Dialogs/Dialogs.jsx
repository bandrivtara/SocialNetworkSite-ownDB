import React from 'react';

import classes from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import TestComponent from './TestComponent';
import { Field, reduxForm } from 'redux-form'


const Dialogs = (props) => {

    let state = props.dialogs;

    let dialogeElements = state.dialogData.map((dialog)=>
        <DialogItem name = {dialog.name} id={dialog.id}/>
    )

    let messageElements = state.messageData.map((message)=>
        <Message message = {message.message} id={message.id} myMessage={message.myMessage}/>
    )
    
    const onSubmit = (formData) => {
        console.log(formData.message)
        props.sendMessage(formData.message);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogeElements }
            </div>
            <div className={classes.messages}>
                { messageElements }
                <SendMessageReduxForm onSubmit={onSubmit}/>
                <TestComponent/>
            </div>
        </div>
    );
}

const SendMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'}  name='message'/>
            <button type="submit">Send</button>
        </form>
    )
}

const SendMessageReduxForm = reduxForm({form: 'message'})(SendMessageForm);

export default Dialogs;