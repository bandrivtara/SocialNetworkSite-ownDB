import { createStore, combineReducers, applyMiddleware } from 'redux';

import dialogReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";
import navReducer from "./NavReducer";
import UsersReducer from './UsersReducer';
import AuthReducer from './AuthReducer';
import AppReducer from './AppReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profile: profileReducer,
    dialog: dialogReducer,
    nav: navReducer,
    users: UsersReducer,
    auth: AuthReducer,
    form: formReducer,
    app: AppReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store; 

export default store;
