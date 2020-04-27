import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { setUsers, unfollow, follow, setCurrentPage, setTotalCount, toggleIsFetching, toggleFollowingProgress, getUsersOnChange, getUsersThunkCreator } from '../../redux/UsersReducer';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUsers, getPageSize, getCurrentPage, getIsFetching, getFollowingInProgress, getTotalUsersCount } from '../../redux/UsersSelectors';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        let { pageSize, currentPage } = this.props;
        this.props.getUsersThunkCreator(pageSize, currentPage);
    }

    onPageChanged = (pageNumber) => {
        let { pageSize } = this.props;
        this.props.getUsersOnChange(pageSize, pageNumber);
    }

    render() {
        return <Fragment>
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
            {this.props.isFetching ? <Preloader /> : null}
        </Fragment>
    }
}

let mapSateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
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
