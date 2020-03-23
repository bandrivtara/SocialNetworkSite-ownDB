import React from 'react';

import classes from './MyPosts.module.css';

import Post from './Post/Post'

const MyPosts = (props)=> {

  let state = props.state;

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
    newPostElement.current.value = '';
  }

  let onChangeText = () => {
    let text = newPostElement.current.value;
    
    props.onChangeText(text);
  }

  let postElements = state.postData.map((post) => {
    
    return (
      <Post message={post.message} likeCounts={post.likesCount} id={post.id}/>
    )
  })

    return (
      
      <div className={classes.my_posts}> 
        <div className={classes.add_post}>
          <textarea onChange={onChangeText} name="" id="" cols="30" rows="10" ref={newPostElement} value={props.newPostText}/>
          <button className={classes.standart_button} onClick={addPost}>Add post</button>
        </div>
        {postElements}
      </div>
    );
}

export default MyPosts;