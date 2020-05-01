import React, { useState } from 'react';
import classes from './ChangeAvatar.module.css';

let categoryData = [
    {
        id: 1,
        name: "Robots",
        url: "https://robohash.org/set_set1/1"
    },
    {
        id: 2,
        name: "Alliance",
        url: "https://robohash.org/set_set2/1"
    },
    {
        id: 3,
        name: "Drons",
        url: "https://robohash.org/set_set3/1"
    },
    {
        id: 4,
        name: "Cats",
        url: "https://robohash.org/set_set4/1"
    }
]

const ChangeAvatar = (props) => {

    const [category, setCategory] = useState(1);
    const [picture, setPicture] = useState(1);

    let activeCategory = (category) => (
        setCategory(category)
    )

    let changePicture = (direct) => {
        if (direct === "prev" && picture > 1) {
            setPicture(picture - 1)
        } else if (direct === "next") {
            setPicture(picture + 1)
        }
    }

    let activePicture = `https://robohash.org/set_set${category}/${picture}/`;
    
    return (
        <div className="modalWindow">
            <div className={classes.panel}>
                <button onClick={() => { props.closeModal() }}>X</button>
            </div>
            <div className={classes.avatarBox}>
                <div className={classes.category}>
                    {categoryData.map(elem => {
                        return (
                            <div key={elem.id} onClick={() => { activeCategory(elem.id) }} className={classes.categoryBox}>
                                <img src={elem.url} alt="" />
                                <p>{elem.name}</p>
                            </div>
                        )
                    })}
                </div>
                <div className={classes.avatar}>
                    <button onClick={() => { changePicture("prev") }}>Prev</button>
                    <img onClick={() => {
                        props.uploadPicture(activePicture, props.userId)
                        props.closeModal();
                    }} src={activePicture} alt="" />
                    <button onClick={() => { changePicture("next") }}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default ChangeAvatar;