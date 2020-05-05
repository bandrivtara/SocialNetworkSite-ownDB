import React from 'react';
import classes from '../ModalWindow.module.css';

class CommentsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        }
        this.comment = this.comment.bind(this)
        this.submitComment = this.submitComment.bind(this)
    }

    submitComment(e) {
        e.preventDefault();
        this.props.sendComment(this.state.comment, this.props.postId);
        this.setState({
            comment: ''
        })
    }

    comment(e) {
        this.setState({
            comment: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.submitComment} className={classes.form}>
                <input type="text" value={this.state.comment} onChange={this.comment} placeholder="Write your comment..."/>
                <button type="submit">Add</button>
            </form>
        );
    }


}

export default CommentsForm;