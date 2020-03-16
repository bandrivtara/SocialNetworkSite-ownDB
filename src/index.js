import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogData = [
    {id: 1, name: "Taras"},
    {id: 2, name: "Max"},
    {id: 3, name: "Katia"},
    {id: 4, name: "Ola"},
    {id: 5, name: "Dima"},
]

let messageData = [
    {id: 1, message: "Hello, I want to introduce myself"},
    {id: 2, message: "Whats up"},
    {id: 3, message: "Where are u going today?"},
    {id: 4, message: "Leeeeeeee"},
    {id: 5, message: "Dima"},
]

let postData = [
    {id: 1, message: "How are u?", likesCount: 12},
    {id: 2, message: "It's my second post", likesCount: 15},
    {id: 3, message: "It's my first post?", likesCount: 1},
]

ReactDOM.render(<App dialogData={dialogData} postData={postData} messageData={messageData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
