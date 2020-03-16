import React from 'react';

import classes from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogeElements = props.dialogData.map((dialog)=>
        <DialogItem name = {dialog.name} id={dialog.id}/>
    )

    let messageElements = props.messageData.map((message)=>
        <Message message = {message.message} id={message.id}/>
    )

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogeElements }
            </div>
            <div className={classes.messages}>
                { messageElements }
            </div>
        </div>
    );
}

export default Dialogs;