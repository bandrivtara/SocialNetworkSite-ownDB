import React from 'react';

import {addPostActionCreator, updateTextActionCreator} from '../../../redux/ProfileReducer';

import MyPosts from './MyPosts';
import StoreContex from '../../../storeContex';

const MyPostsContainer = (props)=> {

  
    return (
      <StoreContex.Consumer> 
        {

        (store) => {
          let state = store.getState().profile;

          let addPost = () => {
            store.dispatch(addPostActionCreator());
          }
        
          let onChangeText = (text) => {
            store.dispatch(updateTextActionCreator(text));
          }        

        return <MyPosts addPost={addPost} onChangeText={onChangeText} state={state}/>
        }
      }
      </StoreContex.Consumer>
    );
}

export default MyPostsContainer;