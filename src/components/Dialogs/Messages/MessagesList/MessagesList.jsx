import React from 'react';

import classes from '../../Dialogs.module.css';


const MessagesList = (props) => {


    return (
        <div className={classes.messages_list}>
            {props.dialogs.filter(elem => elem.conversantId === props.activeDialog).map(elem => {
                return (
                    elem.dialogs.map(elem => {
                        return (
                            <div key={elem.id}
                                className={
                                    `${classes.message} ${elem.outgoing
                                        ? classes.my_message
                                        : classes.conversant_message}`}>
                                <p>
                                    {elem.dialogText}
                                </p>
                            </div>
                        )
                    }))
            })}
        </div>
    );
}



export default MessagesList;