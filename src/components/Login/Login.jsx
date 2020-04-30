import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { inputRForm } from '../common/FormsElements/FormsElements';
import { required, maxLengthCreator } from '../../utilities/validators/validators';

import { connect } from 'react-redux';
import { login } from '../../redux/AuthReducer';
import { Redirect } from 'react-router-dom';
import classesForm from '../common/FormsElements/FormsElements.module.css'
import classes from './Login.module.css';

const LoginForm = (props) => {


    return (
        <form className={classes.loginForm} onSubmit={props.handleSubmit}>
            <div><p>Enter login: Mike</p>and password: 1234</div>
            <div><Field component={inputRForm} validate={[required]} name={"login"} placeholder={"login"}/></div>
            <div><Field component={inputRForm} name={"password"} placeholder={"Password"} type={"password"} /></div>
            <div><button>Sign In</button></div>
            {props.error && <div className={classesForm.fromSummeryError}>{props.error}</div>}
        </form>
    )
}

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div className={classes.formBox} >
            <LoginReduxForm onSubmit={onSubmit} />
            <div className={classes.usage_box}>
                Usage. In this project I use My JSON Server which I wrote in my own. 
                You can check the following server: 
                 You can use this project-website in two ways:
                1)
            </div>
        </div>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login); 