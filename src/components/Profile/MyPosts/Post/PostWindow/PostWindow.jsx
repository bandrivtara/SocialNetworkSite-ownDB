import React from 'react';
import classes from './PostWindow.module.css';

const PostWindow = (props) => {

    return (
        <div className="modalWindow">
            <button className={classes.close_btn} onClick={() => { props.closeModal() }}>X</button>
            <div className={classes.postBox}>
                <div className={classes.photo}>
                    <img src={props.photo} alt="image" />
                </div>
                <div className={classes.body}>
                    <h2>{props.title}</h2>
                    <p>{props.message}</p>
                </div>
            </div>
        </div>
    );
}

export default PostWindow;