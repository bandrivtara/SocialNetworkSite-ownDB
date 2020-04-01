import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { inputRForm } from '../common/FormsElements/FormsElements';
import {required, maxLengthCreator} from '../../utilities/validators/validators';

import { connect } from 'react-redux';
import { login } from '../../redux/AuthReducer';
import { Redirect } from 'react-router-dom';
import classes from '../common/FormsElements/FormsElements.module.css'

const LoginForm = (props) => {


    return(
            <form onSubmit={props.handleSubmit}>
                <div><Field component={inputRForm} validate={[required]} name={"login"} placeholder={"login"}/></div>
                <div><Field component={inputRForm} name={"password"} placeholder={"Password"}/></div>
                <div><Field component={inputRForm} name={"rememberMe"} type={"checkbox"}/>Remember me</div>
                <div><button>Login</button></div>
                {props.error && <div className={classes.fromSummeryError}>{props.error}</div>}
            </form>
    )
}

const Login = (props) => {
     
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return(
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login); 