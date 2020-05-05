import React from 'react';
import { connect } from 'react-redux';

import PostsBar from './PostsBar';

import { getGlobalPosts, sendComment } from '../../../redux/HomeReducer';

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
        this.sendComment = this.sendComment.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.state.firstLoad) {
            if (this.props.globalPosts !== prevProps.globalPosts) {
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

    sendComment(comment, postId) {
        let post = this.state.posts.filter(elem => elem.id === postId);
        post[0].comments.push({
            id: post[0].comments.length + 1,
            userId: this.props.isAuthUser.userId,
            comentator: this.props.isAuthUser.login,
            text: comment
        })
        this.props.sendComment(post[0], postId)
    }

    render() {
        return (
            <PostsBar
                posts={this.state.posts}
                fetchPosts={this.fetchPosts}
                openPostModalWindow={this.openPostModalWindow}
                handleWindow={this.state.handleWindow}
                sendComment={this.sendComment} 
                isAuth={this.props.isAuth}/>
        )
    }
}


let mapStateToProps = (state) => ({
    globalPosts: state.home.globalPosts,
    isAuthUser: state.auth
})

export default connect(mapStateToProps, { getGlobalPosts, sendComment })(PostsBarContainer);