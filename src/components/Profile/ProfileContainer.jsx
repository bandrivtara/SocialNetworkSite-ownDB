import React, { Component } from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import { setUserProfile, showUserProfile, updateStatusProfile, uploadPicture } from '../../redux/ProfileReducer';
import {withRouter} from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
    
    refreshProfile() {
        let userId = this.props.match.params.userId;
        let logUserId = this.props.logUserId;
        this.props.showUserProfile(userId, logUserId);
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
                mainInfo={this.props.mainInfo} 
                updateStatus={this.props.updateStatusProfile}
                uploadPicture={this.props.uploadPicture}
                />
            </div>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profile.profile,
    isAuth: state.auth.isAuth,
    mainInfo: state.profile.mainInfo,
    logUserId: state.auth.userId
});
export default compose(
    connect(mapStateToProps, {setUserProfile, showUserProfile, updateStatusProfile, uploadPicture}),
    withRouter,
    // withAuthRedirect
    )(ProfileContainer);