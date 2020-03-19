import './index.css';
import store from './redux/redux-store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';


let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App 
            state={store.getState()}
            dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>
    , document.getElementById('root'));
}

store.subscribe(renderEntireTree);

renderEntireTree(store.getState());
serviceWorker.unregister();
