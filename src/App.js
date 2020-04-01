import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';

import './App.css';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCubes, faSearch, faEnvelope, faBell, faHome, faUser, faUsers, faMusic } from '@fortawesome/free-solid-svg-icons';
import HeaderContainer from './components/Header/HeaderContainer';
import {initializeAPP} from './redux/AppReducer';
import Preloader from './components/common/Preloader/Preloader';


library.add(fab, faCubes, faSearch, faEnvelope, faBell, faHome, faUser, faUsers, faMusic );

class App  extends React.Component {

  componentDidMount() {
    this.props.initializeAPP();
  }

  render() {
    if (!this.props.initialized) {
      
      return <Preloader />
    } else {
      return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Nav />
            <div className="app-wrapper-content">
              <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
              <Route path='/dialogs' render={() => <DialogsContainer />}/>
              <Route path='/users' render={() => <UsersContainer />}/>
              <Route path='/music' render={() => <Music />}/>
              <Route path='/login' render={() => <Login />}/>
            </div>
        </div>
      );
    }

  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeAPP}, 
))(App);
