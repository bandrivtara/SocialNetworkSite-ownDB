import React from 'react';
import classes from './ModalWindow.module.css';
import CommentsList from './Comments/CommentsList';
import CommentsForm from './Comments/CommentsForm';

const ModalWindow = (props) => {

    return (
        <div className="modalWindow">
            <button className={classes.close_btn} onClick={() => { props.closeModal() }}>X</button>
            <div className={classes.postBox}>
                <div className={classes.photo}>
                    <img src={props.photo} alt="Post" />
                </div>
                {props.comments &&
                    <div className={classes.comments_box}>
                        <CommentsList comments={props.comments} />
                        {props.isAuth && <CommentsForm sendComment={props.sendComment} postId={props.postId}/>}
                    </div>
                }
                <div className={props.comments ? classes.post_info : classes.post_info_no_comments}>
                    <h2>{props.title}</h2>
                    <p>{props.message}</p>
                </div>
            </div>
        </div>
    );
}

export default ModalWindow;