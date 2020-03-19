import React from 'react';

import classes from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import {updateTextActionCreator, sendMessageActionCreator} from '../../redux/DialogReducer';

const Dialogs = (props) => {

    let dialogeElements = props.state.dialogData.map((dialog)=>
        <DialogItem name = {dialog.name} id={dialog.id}/>
    )

    let messageElements = props.state.messageData.map((message)=>
        <Message message = {message.message} id={message.id} myMessage={message.myMessage}/>
    )

    let areaElement = React.createRef();

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
        areaElement.current.value='';
    }

    let updateText = () => {
        let area = areaElement.current.value;
        props.dispatch(updateTextActionCreator(area));
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