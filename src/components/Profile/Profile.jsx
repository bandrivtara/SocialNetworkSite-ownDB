import React from 'react';

import classes from './Profile.module.css';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { Redirect } from 'react-router-dom';

const Profile = (props)=> {
  
    return (
        <div>
          <ProfileInfo profile={props.profile} status={props.status} 
          updateStatus={props.updateStatus} isOwner={props.isOwner}
          savePhoto={props.savePhoto}/>
          <MyPostsContainer />
        </div>
    
    );
}

export default Profile;