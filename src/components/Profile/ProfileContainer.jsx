import React, { Component } from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import { setUserProfile, showUserProfile, getStatusProfile, updateStatusProfile } from '../../redux/ProfileReducer';
import {withRouter} from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
    
    componentDidMount() {
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
    
    render() {
    
        return(
            <div>
                <Profile 
                {...this.props} 
                profile={this.props.profile} 
                status={this.props.status} 
                updateStatus={this.props.updateStatusProfile}/>
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
    connect(mapStateToProps, {setUserProfile, showUserProfile, getStatusProfile, updateStatusProfile}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);