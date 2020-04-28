import React from 'react';
import PhotosBarContainer from './PhotosBar/PhotosBarContainer';
import PostsBarContainer from './PostsBar/PostsBarContainer';
import UsersBar from './UsersBar/UsersBar';

import classes from './Home.module.css';

const Home = (props) => {
    return (
        <div className={classes.home_container}>
            <PhotosBarContainer photos={props.photos}/>
            <PostsBarContainer />
            <UsersBar />
        </div>
    )
}

export default Home;