import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostsBar from './PostsBar';

import { getGlobalPosts } from '../../../redux/HomeReducer';

class PostsBarContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            page: 1,
            firstLoad: true,
            handleWindow: false
        }
        this.fetchPosts = this.fetchPosts.bind(this);
        this.openPostModalWindow = this.openPostModalWindow.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.firstLoad) {
            if (this.props.globalPosts != prevProps.globalPosts) {
                this.setState({
                    posts: this.props.globalPosts,
                    page: this.state.page + 1,
                    firstLoad: false,
                })
            }
        }
    }

    componentDidMount() {
        this.props.getGlobalPosts(this.state.page)
    }

    fetchPosts() {
        this.props.getGlobalPosts(this.state.page)
        setTimeout(() => {
            this.setState({
                posts: this.state.posts.concat(this.props.globalPosts),
                page: this.state.page + 1
            });
        }, 1500)
    }

    openPostModalWindow(status) {
        if (status) {
            this.setState({
                handleWindow: status
            });
        } else {
            this.setState({
                handleWindow: false
            });
        }
    }


    render() {
        console.log(this.state.page)
        return (
            <PostsBar
                posts={this.state.posts}
                fetchPosts={this.fetchPosts}
                openPostModalWindow={this.openPostModalWindow} 
                handleWindow={this.state.handleWindow}/>
        )
    }
}


let mapStateToProps = (state) => ({
    globalPosts: state.home.globalPosts
})

export default connect(mapStateToProps, { getGlobalPosts })(PostsBarContainer);