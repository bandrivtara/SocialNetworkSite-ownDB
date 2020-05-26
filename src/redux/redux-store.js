import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import photosReducer from './PhotosReducer'
import dialogReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";
import UsersReducer from './UsersReducer';
import AuthReducer from './AuthReducer';
import HomeReducer from './HomeReducer';
import AppReducer from './AppReducer';
import navReducer from './NavReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    nav: navReducer,
    profile: profileReducer,
    dialog: dialogReducer,
    photos: photosReducer,
    users: UsersReducer,
    home: HomeReducer,
    auth: AuthReducer,
    form: formReducer,
    app: AppReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


window.__store__ = store; 

export default store;
