import React from 'react';

import classes from './Dialogs.module.css';


import { Field, reduxForm } from 'redux-form'


const Dialogs = (props) => {

    let state = props.dialogs;

    const onSubmit = (formData) => {
        props.sendMessage(formData.message);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_container}>
                <h3>Messages</h3>
                <div className={classes.search_dialog}></div>
                <div className={classes.dialogs_box}>

                </div>
            </div>
            <div className={classes.messages_container}>
                <div className={classes.conversant}>

                </div>
                <div className={classes.messages_box}>
                    {/* {messageElements} */}
                </div>
                <div className={classes.form_box}>
                    <SendMessageReduxForm onSubmit={onSubmit} />
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