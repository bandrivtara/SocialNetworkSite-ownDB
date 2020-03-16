import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className = {classes.item}>
            <img src="https://images.pexels.com/photos/744667/pexels-photo-744667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            <h2>{props.message}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, in.</p>
            <span>Like {props.likeCounts}</span>
        </div>
    );
}

export default Post;