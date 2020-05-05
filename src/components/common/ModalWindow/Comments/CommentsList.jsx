import React from 'react';
import classes from '../ModalWindow.module.css';

const CommentsList = (props) => {

    return (
        <div className={classes.body}>
            <div className={classes.comments}>
                {props.comments.map(elem => {
                    return (
                        <div key={elem.id} className={classes.comments_box}>
                            <h3>{elem.comentator}</h3>
                            <p>{elem.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default CommentsList;