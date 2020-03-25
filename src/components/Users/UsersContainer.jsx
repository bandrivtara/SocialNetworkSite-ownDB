import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import { setUsers, unfollow, follow, setCurrentPage, setTotalCount, toggleIsFetching } from '../../redux/UsersReducer';
import Preloader from '../common/Preloader';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
            this.props.toggleIsFetching(false);
        });
    }


    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        this.props.setUsers([]);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?=${pageNumber}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items);
        this.props.toggleIsFetching(false);
    });
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
        isFetching: state.users.isFetching
    }
}

export default connect(mapSateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleIsFetching
})
(UsersAPIComponent);