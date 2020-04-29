import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import classesHome from '../Home.module.css';
import classes from './PostsBar.module.css';
import Preloader from '../../common/Preloader/Preloader'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PostWindow from '../../Profile/MyPosts/Post/PostWindow/PostWindow';

const PostsBar = (props) => {
    return (
        <div className={classes.posts_container}>
            
            <InfiniteScroll
                dataLength={props.posts.length}
                next={props.fetchPosts}
                hasMore={true}
                loader={<Preloader />}>
                {props.posts.map((elem, index) => {
                    return (
                        <div key={elem.id} className={classes.post_box}>
                            <div className={classes.name_box}>
                                <img src={elem.avatar} alt="ava" />
                                <div>
                                    <p className={classes.name}>{elem.author}</p>
                                    <p className={classes.data}>{elem.data}</p>
                                </div>
                            </div>
                            <img src={elem.cover} alt="post" onClick={() => { props.openPostModalWindow(elem.id) }} />
                            <div className={classes.panel_box}>
                                <p><FontAwesomeIcon icon="heart" /> {elem.likes}</p>
                                <p><FontAwesomeIcon icon="comments" /> {elem.comments.length}</p>
                            </div>
                            {props.handleWindow === elem.id && <PostWindow message={elem.body}
                                photo={elem.cover} title={elem.title}
                                closeModal={props.openPostModalWindow} comments={elem.comments}/>}
                        </div>
                    )
                })}
            </InfiniteScroll>
        </div>
    )
}

export default PostsBar;