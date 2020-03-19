import React from 'react';

import classes from './Profile.module.css';

import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo'

const Profile = (props)=> {

    return (
        <div>
          <ProfileInfo state={props.state} dispatch={props.dispatch}/>
          <MyPosts state={props.state}/>
        </div>
    
    );
}

export default Profile;