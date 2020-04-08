import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className = {classes.item}>
            <p>{props.message}</p>
            <span>Like {props.likeCounts}</span>
        </div>
    );
}

export default Post;