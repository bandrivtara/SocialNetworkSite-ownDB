import React, { Fragment } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, showUserProfile, updateStatusProfile, uploadPicture, changeFollowed, getFollowers } from '../../redux/ProfileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import Preloader from '../common/Preloader/Preloader';

class ProfileContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalWindow: false,
            activePost: false
        }
        this.openModalWindow = this.openModalWindow.bind(this)
    }

    openModalWindow(open, userId) {
        if (open) {
            this.setState({
                modalWindow: open
            })
            if (userId) {
                this.setState({
                    activePost: userId
                })
            }
        } else {
            this.setState({
                modalWindow: false
            })
        }
    }


    refreshProfile() {
        let userId = this.props.match.params.userId;
        let logUserId = this.props.logUserId;
        this.props.showUserProfile(userId, logUserId);
        this.props.getFollowers();
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
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Fragment>
                {this.props.isFetching ? <Preloader /> :
                    <div><Profile
                        {...this.props}
                        isOwner={!this.props.match.params.userId}
                        profile={this.props.profile}
                        mainInfo={this.props.mainInfo}
                        updateStatus={this.props.updateStatusProfile}
                        uploadPicture={this.props.uploadPicture}
                        followed={this.props.followed}
                        changeFollowed={this.props.changeFollowed}
                        posts={this.props.posts} followers={this.props.followers}
                        openModalWindow={this.openModalWindow}
                        state={this.state}
                    />
                    </div>}
            </Fragment>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profile.profile,
    mainInfo: state.profile.mainInfo,
    isAuth: state.auth.isAuth,
    logUserId: state.auth.userId,
    followed: state.profile.followed,
    posts: state.profile.posts.userPosts,
    followers: state.profile.followers,
    isFetching: state.profile.isFetching
});
export default compose(
    connect(mapStateToProps,
        {
            setUserProfile,
            showUserProfile,
            updateStatusProfile,
            uploadPicture, changeFollowed,
            getFollowers
        }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);