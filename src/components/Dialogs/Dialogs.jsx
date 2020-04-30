import React, { useEffect, useRef } from 'react';

import classes from './Dialogs.module.css';


import { Field, reduxForm } from 'redux-form'
import Messages from './Messages/Messages';


const Dialogs = (props) => {


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_container}>
                <h3>Messages</h3>
                <div className={classes.dialogs_list}>
                    <div className={classes.search_dialog}></div>
                    <div className={classes.dialogs_box}>
                        {props.conversants.map(elem => {
                            return (
                                <div key={elem.id} 
                                className={`${classes.dialog} + " " + ${elem.id === props.activeDialog && classes.active_dialog}`} 
                                onClick={() => { props.setDialog(elem.id) }}>
                                    <img src={elem.avatar} alt="ava" />
                                    <h3>{elem.name} {elem.last_name}</h3>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className={classes.messages_container}>
                {props.conversants.filter(elem => elem.id === props.activeDialog).map(elem => (
                    <div className={classes.conversant}>
                        <img src={elem.avatar} alt="ava" />
                        <h3>{elem.name} {elem.last_name}</h3>
                    </div>
                ))}
                <div className={classes.messages_box}>
                    <Messages dialogs={props.dialogs} activeDialog={props.activeDialog} />
                </div>
                <div className={classes.form_box}>
                    {/* <SendMessageReduxForm onSubmit={onSubmit} /> */}
                </div>
            </div>
        </div>
    );
}

const SendMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.send_form}>
            <Field placeholder="Type your message" component={'textarea'} name='message' />
            <button type="submit">Send</button>
        </form>
    )
}

const SendMessageReduxForm = reduxForm({ form: 'message' })(SendMessageForm);

export default Dialogs;