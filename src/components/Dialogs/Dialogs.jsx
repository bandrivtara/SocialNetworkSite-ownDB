import React from 'react';

import classes from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let state = props.dialogs;

    let dialogeElements = state.dialogData.map((dialog)=>
        <DialogItem name = {dialog.name} id={dialog.id}/>
    )

    let messageElements = state.messageData.map((message)=>
        <Message message = {message.message} id={message.id} myMessage={message.myMessage}/>
    )

    let areaElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
        areaElement.current.value='';
    }

    let updateText = () => {
        
        let area = areaElement.current.value;
        props.updateTextActionCreator(area);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogeElements }
            </div>
            <div className={classes.messages}>
                { messageElements }
                <textarea onChange={updateText} name="" id="" cols="30" rows="10" ref={areaElement}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;