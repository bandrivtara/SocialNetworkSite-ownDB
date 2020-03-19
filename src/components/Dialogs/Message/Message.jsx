import React from 'react';

import classes from '../Dialogs.module.css';

const Message = (props) => {

    return (

        <div className={classes.message}>
            <p className={props.myMessage ? classes.rSide : classes.lSide}>{props.message}</p>
        </div>
    );
}

export default Message;