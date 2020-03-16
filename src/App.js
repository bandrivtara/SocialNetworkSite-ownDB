import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route path='/profile' render={() => <Profile postData={props.postData}/>}/>
          <Route path='/dialogs' render={() => <Dialogs messageData={props.messageData} dialogData={props.dialogData}/>}/>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
