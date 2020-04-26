import React, { useState } from 'react';
import photoFile from '../../../../assets/images/noUser.png'
import classes from './PhotoBox.module.css';
import ChangeAvatar from './ChangeAvatar/ChangeAvatar';

const PhotoBox = (props) => {

    let [handleModal, setHandleModal] = useState(false);

    const changeAvatar = () => {
        setHandleModal(true);
    }

    const closeModal = () => {
        setHandleModal(false)
    }

    return (
        <div className={classes.profil_style}>
            {handleModal && 
            <ChangeAvatar closeModal={closeModal} 
            uploadPicture={props.uploadPicture} 
            userId={props.userId}/>}
            <ul className={classes.img_box}>
                <li>
                    <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05447_mvffor.jpg" alt="Interior at Nong's" loading="lazy" />
                </li>
                <li>
                    <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05501_yirmq8.jpg" alt="A kimchi hotdog on a plate" loading="lazy" />
                </li>
                <li>
                    <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05624_f5b2ud.jpg" alt="Restaurant window with graffiti saying 'water'" loading="lazy" />
                </li>
                <li>
                    <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05623_dcpfva.jpg" alt="Portrait of Jeremy Tanner" loading="lazy" />
                </li>
                <li>
                    <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05515_d2gzut.jpg" alt="Jordan, Sarah and Sara on red bikes, waiting" loading="lazy" />
                </li>
                <li>
                    <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05581_ceocwv.jpg" alt="Barista wearing a hoodie saying 'Coffee Should Be Dope.'" loading="lazy" />
                </li>
                <li>
                    <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05517_ni2k0p.jpg" alt="Payam crossing the street on a bike" loading="lazy" />
                </li>
            </ul>
            <div className={classes.profil_photo} >
                <img src={props.profilePhoto || photoFile} alt="avatar" />
                {props.isOwner &&
                    <button className={classes.changePhotoLabel} onClick={() => { changeAvatar() }}>
                        <p>Change photo</p>
                    </button>
                }
            </div>
        </div>
    )
}

export default PhotoBox;