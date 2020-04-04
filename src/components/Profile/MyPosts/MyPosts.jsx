import React, { memo } from 'react';
import { Field, reduxForm } from 'redux-form';

import classes from './MyPosts.module.css';

import Post from './Post/Post';
import {required, maxLengthCreator} from '../../../utilities/validators/validators';
import { textareaRForm } from '../../common/FormsElements/FormsElements';

const MyPosts = React.memo(props => { 
  
  console.log('RENDER')

  let state = props.state;

  let onSubmit = (formData) => {
    props.addPost(formData.postText)
    console.log(formData)
  }

  let postElements = state.postData.map((post) => {
    
    return (
      <Post message={post.message} likeCounts={post.likesCount} id={post.id}/>
    )
  })

    return (
      
      <div className={classes.my_posts}> 
        <div className={classes.add_post}>
          <PostsReduxForm onSubmit={onSubmit}/>
        </div>
        {postElements}
      </div>
    );
 
})

let maxLength10 = maxLengthCreator(10);

const PostsForm = (props) => {

  console.log('render2')
  return(
    <form onSubmit={props.handleSubmit}>
      <Field component={textareaRForm} name='postText' validate={[required, maxLength10]} placeholder='Your post'/>
      <button>Add post</button>
    </form>
  )
}

const PostsReduxForm = reduxForm({form: 'posts'})(PostsForm);

export default MyPosts;