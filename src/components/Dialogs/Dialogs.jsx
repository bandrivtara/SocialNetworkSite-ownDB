import React from 'react';

import classes from './Dialogs.module.css';

import Messages from './Messages/Messages';
import DialogsList from './DialogsList/DialogsList';


const Dialogs = (props) => {


    return (
        <div className={classes.dialogs}>
            <DialogsList
            conversants={props.conversants}
            setDialog={props.setDialog}/>
            <Messages
                dialogs={props.dialogs}
                activeDialog={props.activeDialog}
                conversants={props.conversants}
                onSubmit={props.onSubmit} />
        </div>
    );
}

export default Dialogs;