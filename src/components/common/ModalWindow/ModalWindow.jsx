import React from 'react';
import classes from './ModalWindow.module.css';

const ModalWindow = (props) => {

    return (
        <div className="modalWindow">
            <button className={classes.close_btn} onClick={() => { props.closeModal() }}>X</button>
            <div className={classes.postBox}>
                <div className={classes.photo}>
                    <img src={props.photo} alt="Post" />
                </div>
                {props.comments &&
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