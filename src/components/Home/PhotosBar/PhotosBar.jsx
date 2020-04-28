import React from 'react';

import classes from './PhotosBar.module.css';
import classesHome from '../Home.module.css';

import {NavLink} from 'react-router-dom';

const PhotosBar = (props) => {

    let getPhoto = () => {
        return (
            props.photos.map(elem => (<img key={elem.id} className={classes.photo} src={elem.url} alt=""/>))
        )
    }
    return (
        <div className={classes.photos_container}>
            <div className={classesHome.box}>
                <NavLink to='/photos/'>Trending Photos</NavLink>
            </div>
            <div className={classesHome.box}>
                {getPhoto()}
            </div>
            <div className={classesHome.box}>
                <button onClick={()=>{props.getMore()}}>More Photos</button>
            </div>
        </div>
    )
}

export default PhotosBar;