import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCubes, faSearch, faEnvelope, faBell, faHome, faUser, faUsers, faMusic } from '@fortawesome/free-solid-svg-icons';


library.add(fab, faCubes, faSearch, faEnvelope, faBell, faHome, faUser, faUsers, faMusic );

function App(props) {
  return (
    <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
          <Route path='/dialogs' render={() => <DialogsContainer />}/>
          <Route path='/users' render={() => <UsersContainer />}/>
          <Route path='/music' render={() => <Music />}/>
        </div>
    </div>
  );
}

export default App;
