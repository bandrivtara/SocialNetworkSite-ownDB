import React from 'react';

import classes from './Profile.module.css';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props)=> {
  console.log(props.profile)
    return (
        <div>
          <ProfileInfo profile={props.profile}/>
          <MyPostsContainer />
        </div>
    
    );
}

export default Profile;