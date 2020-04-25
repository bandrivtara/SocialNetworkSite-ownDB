import React from 'react';
import classes from './Post.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Post = (props) => {

    const profilPhotoStyle = {
        backgroundImage: `url(${props.coverImage})`, 
    }

    return (
        <div className = {classes.item} style={profilPhotoStyle}>
            <span className={classes.item_likes}><FontAwesomeIcon icon="heart" /> {props.likeCounts}</span>
            <div className={classes.text_container}>
                <p>{props.message}</p>
            </div>
        </div>
    );
}

export default Post;