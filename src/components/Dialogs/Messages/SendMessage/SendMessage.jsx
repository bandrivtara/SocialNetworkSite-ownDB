import React from 'react';

import classes from '../../Dialogs.module.css';

import { Field, reduxForm, reset } from 'redux-form'

const afterSubmit = (result, dispatch) =>
  dispatch(reset('message'));


const SendMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.send_form}>
            <Field placeholder="Type your message" component={'textarea'} name='message' />
            <button type="submit">Send</button>
        </form>
    )
}

const SendMessageForm = reduxForm({ 
form: 'message',
onSubmitSuccess: afterSubmit,
 })(SendMessage);



export default SendMessageForm;