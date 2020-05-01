import React from 'react';
import classes from './Post.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalWindow from '../../../common/ModalWindow/ModalWindow';

const Post = (props) => {

    let profilPhotoStyle = {
        backgroundImage: `url(${props.coverImage})`,
    }

    let closeModal = () => {
        props.openModalWindow(false)
    }

    let openPost = () => {
        if (!props.state.modalWindow) {
            props.openModalWindow("showPost", props.id)
        }
    }

    return (
        <div onClick={() => { openPost() }}
            className={classes.item} style={profilPhotoStyle}>
            <span className={classes.item_likes}><FontAwesomeIcon icon="heart" /> {props.likeCounts}</span>
            <div className={classes.text_container}>
                <p>{props.message}</p>
            </div>
            {props.state.modalWindow === "showPost" && props.state.activePost === props.id &&
                <ModalWindow
                    message={props.message}
                    photo={props.coverImage}
                    title={props.title}
                    closeModal={closeModal} />}
        </div>
    );
}

export default Post;