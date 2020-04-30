import React from 'react';
import { connect } from 'react-redux';

import Home from './Home';
import { showPhoto } from '../../redux/PhotosReducer';
import { getUnfollowedUsers, follow } from '../../redux/UsersReducer';



class HomeContainer extends React.Component {

    getProfile() {
        let logUserId = this.props.logUserId;
        this.props.showPhoto();
        this.props.getUnfollowedUsers();
    }

    componentDidMount() {
        this.getProfile();
    }

    render() {
        return (
            <div>
                <Home photos={this.props.photos} 
                unfollowedUsers={this.props.unfollowedUsers}
                follow={this.props.follow} 
                getUnfollowedUsers={this.props.getUnfollowedUsers}
                isAuth={this.props.isAuth}/>
            </div>
        )
    }
}


let mapStateToProps = (state) => ({
    logUserId: state.auth.userId,
    photos: state.photos,
    unfollowedUsers: state.users.users,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { showPhoto, getUnfollowedUsers, follow })(HomeContainer);