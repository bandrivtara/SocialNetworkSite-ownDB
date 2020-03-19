import React from 'react';

import classes from './ProfileInfo.module.css';

import {addPostActionCreator, updateTextActionCreator} from '../../../../redux/ProfileReducer';

const ProfileInfo = (props)=> {

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
    newPostElement.current.value = '';
  }

  let onChangeText = () => {
    let text = newPostElement.current.value;
    
    props.dispatch(updateTextActionCreator(text));
  }

    return (
      <div>
        <div className={classes.top_content}><img src="https://sppc.in/wp-content/uploads/2017/09/image-4-1-1170x274.jpg" alt=""/></div>
        <div>
          <textarea onChange={onChangeText} name="" id="" cols="30" rows="10" ref={newPostElement} value={props.newPostText}/>
          <br/>
          <button onClick={addPost}>Add post</button>
        </div>
        <div className={`${classes.middle_content} ${classes.active}`}>
          <img src="https://cdn.pixabay.com/photo/2020/03/07/11/54/the-fog-4909513__340.jpg" alt=""/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, quo!</p>
        </div>
      </div>
    );
}

export default ProfileInfo;