import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route} from 'react-router-dom';

function App(props) {
  return (
    <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route path='/profile' render={() => <Profile />}/>
          <Route path='/dialogs' render={() => <DialogsContainer />}/>
        </div>
    </div>
  );
}

export default App;
