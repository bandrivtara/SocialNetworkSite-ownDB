import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import photosReducer from './PhotosReducer'
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
    photos: photosReducer,
    users: UsersReducer,
    auth: AuthReducer,
    form: formReducer,
    app: AppReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


window.__store__ = store; 

export default store;
