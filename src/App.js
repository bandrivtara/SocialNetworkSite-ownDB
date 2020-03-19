import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';

function App(props) {
  return (
    <div className="app-wrapper">
        <Header />
        <Nav state={props.state.nav}/>
        <div className="app-wrapper-content">
          <Route path='/profile' render={() => <Profile state={props.state.profile} dispatch={props.dispatch}/>}/>
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialog} dispatch={props.dispatch}/>}/>
        </div>
    </div>
  );
}

export default App;
