import React, { memo } from 'react';
import { Field, reduxForm } from 'redux-form';

import classes from './MyPosts.module.css';

import Post from './Post/Post';
import { maxLengthCreator } from '../../../utilities/validators/validators';
import { textareaRForm } from '../../common/FormsElements/FormsElements';

const MyPosts = React.memo(props => {

  let state = props.state;

  let onSubmit = (formData) => {
    props.addPost(formData.postText);
  }

  let postElements = state.postData.map((post) => {

    return (
      <Post key={post.id} message={post.message} likeCounts={post.likesCount} id={post.id} coverImage={post.coverImage}/>
    )
  })

  return (

    <div className={classes.my_posts}>
      <PostsReduxForm onSubmit={onSubmit} />
      <div className={classes.posts_box}>
        {postElements}
      </div>
    </div>
  );

})

let maxLength300 = maxLengthCreator(300);

const PostsForm = (props) => {

  return (
    <form className={classes.add_post} onSubmit={props.handleSubmit}>
      <Field className={classes.add_post_textarea} component={textareaRForm} name='postText' validate={[maxLength300]} placeholder='Your post' />
      <button className={classes.standart_button}>Add post</button>
    </form>
  )
}

const PostsReduxForm = reduxForm({ form: 'posts' })(PostsForm);

export default MyPosts;