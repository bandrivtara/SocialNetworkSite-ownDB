import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import { compose } from 'redux';

import './App.css';

import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import HomeContainer from './components/Home/HomeContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import PhotosContainer from './components/Photos/PhotosContainer';
import { initializeAPP } from './redux/AppReducer';
import Preloader from './components/common/Preloader/Preloader';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCubes, faSearch, faEnvelope, faBell, faHome, faUser, faUsers, faMusic, faHeart, faCamera, faComments, faPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';




const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

library.add(
  fab, faCubes, 
  faSearch, faEnvelope, 
  faBell, faHome, faUser, 
  faUsers, faMusic, 
  faHeart, faCamera, 
  faComments, faPlus, 
  faSignOutAlt);

class App extends React.Component {

  componentDidMount() {
    this.props.initializeAPP();
  }

  render() {
    if (!this.props.initialized) {

      return <div className="preloader_center"><Preloader /></div>
    } else {
      return (

        <div className="app-wrapper">
          <HeaderContainer />
          <Nav />
          <div className="app-wrapper-content">
            <Route exact path={['/', '/home']} render={() => <HomeContainer />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Suspense fallback={<div>Loading...</div>}><Route path='/users' render={() => <UsersContainer />} /></Suspense>
            <Route path='/photos' render={() => <PhotosContainer />} />
            <Route path='/login' render={() => <Login />} />
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
  connect(mapStateToProps, { initializeAPP },
  ))(App);
