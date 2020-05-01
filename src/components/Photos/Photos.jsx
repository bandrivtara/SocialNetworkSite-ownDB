import React, { Fragment } from 'react';

import classes from './Photos.module.css';

import plusPNG from '../../assets/images/plus.png'

const Photos = (props) => {

    let activeClass = (elem) => {
        if (props.album === elem) {
            return (classes.active)
        }
    }

    return (
        <Fragment>
            <div className={classes.sortPanel}>
                {props.state.photos.albums.map((elem, index) => {
                    return (
                        <button
                            className={classes.album + " " + activeClass(elem.id)}
                            key={index} onClick={() => { props.setAlbum(elem.id) }}>
                            <p>{elem.id}</p>
                            <img src={elem.cover} alt="" />
                        </button>
                    )
                })}
                <button
                    className={classes.addAlbum}
                    onClick={() => { "" }}>
                    <img src={plusPNG} alt="" />
                </button>
            </div>
            <div className={classes.flexContainer}>
                {props.state.photos.adress.filter(
                    elem => props.album ? (elem.albumId === props.album) : elem.albumId)
                    .map(elem => {
                        return (<div key={elem.id} className={classes.flexItem}><img src={elem.url} alt="" /></div>)
                    })}
                <button
                    className={classes.flexItem + " " + classes.addPhoto}
                    onClick={() => { "" }}>
                    <img src={plusPNG} alt="" />
                </button>
            </div>
        </Fragment>
    )
}

export default Photos;