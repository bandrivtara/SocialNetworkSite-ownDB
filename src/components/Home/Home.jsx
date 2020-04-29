import React from 'react';
import PhotosBarContainer from './PhotosBar/PhotosBarContainer';
import PostsBarContainer from './PostsBar/PostsBarContainer';
import UsersBarContainer from './UsersBar/UsersBarContainer';

import classes from './Home.module.css';

const Home = (props) => {
    return (
        <div className={classes.home_container}>
            <PhotosBarContainer 
            photos={props.photos}/>
            <PostsBarContainer />
            <UsersBarContainer 
            users={props.unfollowedUsers}
            follow={props.follow}
            getUnfollowedUsers={props.getUnfollowedUsers}/>
        </div>
    )
}

export default Home;