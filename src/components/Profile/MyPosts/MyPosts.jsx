import React from 'react';

import classes from './MyPosts.module.css';

import Post from './Post/Post'

const MyPosts = (props)=> {

  

  let postElements = props.postData.map((post) => {
    return (
      <Post message={post.message} likeCounts={post.likesCount} id={post.id}/>
    )
  })

    return (
      <div>
        {postElements}
      </div>
    );
}

export default MyPosts;