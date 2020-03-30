import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { setUsers, unfollow, follow, setCurrentPage, setTotalCount, toggleIsFetching, toggleFollowingProgress, getUsersOnChange, getUsersThunkCreator } from '../../redux/UsersReducer';
import Preloader from '../common/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.pageSize, this.props.currentPage);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersOnChange(this.props.pageSize, pageNumber);
    }

    render() {
        return <Fragment>
            <Users 
            totalUsersCount = {this.props.totalUsersCount} 
            pageSize = {this.props.pageSize} 
            currentPage = {this.props.currentPage}
            onPageChanged={this.onPageChanged} 
            users = {this.props.users}
            follow = {this.props.follow}
            unfollow = {this.props.unfollow}
            toggleFollowingProgress = {this.props.toggleFollowingProgress}
            />
            {this.props.isFetching ? <Preloader /> : null}
        </Fragment>
    }
}

let mapSateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
}


export default compose(
    withAuthRedirect,
    connect(mapSateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalCount,
        toggleIsFetching,
        toggleFollowingProgress,
        getUsersThunkCreator,
        getUsersOnChange
    })
)(UsersAPIComponent)
