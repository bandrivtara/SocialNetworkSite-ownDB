import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import classesHome from '../Home.module.css';
import classes from './PostsBar.module.css';
import Preloader from '../../common/Preloader/Preloader'

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
                        <p>{elem.id}</p>
                    )
                })}
            </InfiniteScroll>
        </div>
    )
}

export default PostsBar;