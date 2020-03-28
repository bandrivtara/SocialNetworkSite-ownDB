import React, { Component } from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import { setUserProfile, showUserProfile } from '../../redux/ProfileReducer';
import {withRouter} from 'react-router-dom'

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.showUserProfile(userId);
    }
    
    render() {
        return(
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profile.profile
});

let WithUrlContainer = withRouter(ProfileContainer);


export default connect(mapStateToProps, {setUserProfile, showUserProfile})(WithUrlContainer);