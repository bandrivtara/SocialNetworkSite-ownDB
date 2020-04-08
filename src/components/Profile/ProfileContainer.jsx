import React, { Component } from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import { setUserProfile, showUserProfile, getStatusProfile, updateStatusProfile, savePhoto } from '../../redux/ProfileReducer';
import {withRouter} from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
    
    refreshProfile() {
        let userId = this.props.match.params.userId;
        this.props.showUserProfile(userId);
        this.props.getStatusProfile(userId);
        if (!userId) {
            userId = this.props.logUserId;
            if (!userId) {
                this.props.history.push('/Home')
            }
        }
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }
    
    render() {
    
        return(
            <div>
                <Profile 
                {...this.props} 
                isOwner = {!this.props.match.params.userId}
                profile={this.props.profile} 
                status={this.props.status} 
                updateStatus={this.props.updateStatusProfile}
                savePhoto={this.props.savePhoto}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profile.profile,
    isAuth: state.auth.isAuth,
    status: state.profile.status,
    logUserId: state.auth.userId
});

export default compose(
    connect(mapStateToProps, {setUserProfile, showUserProfile, getStatusProfile, updateStatusProfile, savePhoto}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);