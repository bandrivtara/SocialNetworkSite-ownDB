import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';

import { setAuthUserData, logout } from '../../redux/AuthReducer';


class HeaderContainer extends React.Component {
    render() {
        return(
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    avatar: state.profile.profile.photos.small,
})

export default connect(mapStateToProps, {setAuthUserData, logout})(HeaderContainer);