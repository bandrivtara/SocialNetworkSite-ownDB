import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, showUserProfile, updateStatusProfile, uploadPicture, changeFollowed } from '../../redux/ProfileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

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
        return (
            <div>
                <Profile
                    {...this.props}
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    mainInfo={this.props.mainInfo}
                    updateStatus={this.props.updateStatusProfile}
                    uploadPicture={this.props.uploadPicture}
                    followed={this.props.followed}
                    changeFollowed={this.props.changeFollowed}
                />
            </div>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profile.profile,
    mainInfo: state.profile.mainInfo,
    isAuth: state.auth.isAuth,
    logUserId: state.auth.userId,
    followed: state.profile.followed
});
export default compose(
    connect(mapStateToProps, { setUserProfile, showUserProfile, updateStatusProfile, uploadPicture, changeFollowed }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);