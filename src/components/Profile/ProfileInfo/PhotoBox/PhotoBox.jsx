import React from 'react';

import photoFile from '../../../../assets/images/noUser.png'
import ChangeAvatar from './ChangeAvatar/ChangeAvatar';

import classes from './PhotoBox.module.css';

const PhotoBox = (props) => {

    const changeAvatar = () => {
        if (!props.modalWindow) {
            props.openModalWindow("changePhoto")
        }
    }

    const closeModal = () => {
        props.openModalWindow(false)
    }

    const photoCoverPictures = props.posts.filter(elem => elem.id <= 8).map((elem, index) => {
            return (
                <li key={index}><img src={elem.cover} alt="cover" /></li>
            )
    })


    return (
        <div className={classes.profil_style}>
            {(props.modalWindow === "changePhoto") &&
                <ChangeAvatar closeModal={closeModal}
                    uploadPicture={props.uploadPicture}
                    userId={props.userId} />}
            <ul className={classes.img_box}>
                {photoCoverPictures}
            </ul>
            <div className={classes.profil_photo} >
                <img src={props.profilePhoto || photoFile} alt="avatar" />
                {props.isOwner &&
                    <button className={classes.changePhotoLabel} onClick={() => { changeAvatar() }}>
                        <p>Change avatar</p>
                    </button>
                }
            </div>
        </div>
    )
}

export default PhotoBox;