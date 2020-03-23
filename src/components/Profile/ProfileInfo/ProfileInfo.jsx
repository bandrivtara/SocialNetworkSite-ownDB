import React from 'react';

import classes from './ProfileInfo.module.css';

import PhotoBox from './PhotoBox/PhotoBox';

const ProfileInfo = (props)=> {

    return (
      <div className={classes.profile_info}>
        <PhotoBox />
        <div className={classes.status}>
          <h2>Taras Bandrivskyy</h2>
          <p>Welcome to the offical account of Anna Morgan. Success is in the PIXELS, #pixels</p>
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