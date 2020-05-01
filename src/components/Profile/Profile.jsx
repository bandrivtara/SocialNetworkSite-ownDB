import React from 'react';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo profile={props.profile} mainInfo={props.mainInfo}
        updateStatus={props.updateStatus} isOwner={props.isOwner}
        uploadPicture={props.uploadPicture} followed={props.followed}
        changeFollowed={props.changeFollowed} posts={props.posts}
        followers={props.followers} openModalWindow={props.openModalWindow}
        modalWindow={props.state.modalWindow}/>
      <MyPostsContainer openModalWindow={props.openModalWindow}
        state={props.state} isOwner={props.isOwner}/>/>
    </div>

  );
}

export default Profile;