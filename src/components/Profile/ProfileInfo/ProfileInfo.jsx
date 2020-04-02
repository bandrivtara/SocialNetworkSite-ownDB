import React from 'react';

import classes from './ProfileInfo.module.css';

import PhotoBox from './PhotoBox/PhotoBox';
import ProfileStatus from './ProfileStatus/ProfileStatus';

import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

const ProfileInfo = (props)=> {
  
    return (
      
      <div className={classes.profile_info}>
        {/* <PhotoBox profilePhoto={props.profile.photos.small}/> */}
        <div className={classes.status}>
          <h2>{props.profile.fullName}</h2>
          <p>{props.profile.aboutMe}</p>
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
          <button className={classes.standart_button}>Following</button>
        </div>
        <div className={classes.statistic}>
          <p>Posts <span>15</span></p>
          <p>Followers <span>700</span></p>
          <p>Followings <span>854</span></p>
        </div>
      </div>
    );
}

export default ProfileInfo;