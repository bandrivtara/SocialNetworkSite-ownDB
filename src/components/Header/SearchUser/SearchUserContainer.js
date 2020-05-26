import React, { Component } from 'react';
import SearchUser from './SearchUser';
import { connect } from 'react-redux';

import { getAllUsers } from '../../../redux/NavReducer';

export class SearchUserContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            filteredUsers: [],
            activeDropDownWindow: false
        }

        this.setFilter = this.setFilter.bind(this)
        this.showDropWindow = this.showDropWindow.bind(this)
    }

    showDropWindow(isActive) {
        this.setState({
            activeDropDownWindow: isActive
        })
    }

    filteredUsers() {
        this.setState({
            filteredUsers: this.props.users
                .filter(elem => elem.name
                    .toLowerCase()
                    .includes(this.state.filter.toLowerCase()))
        })
    }

    setFilter(event) {
        this.setState({ filter: event.target.value })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.filter !== prevState.filter) {
            this.filteredUsers();
        }
        if (this.props.users !== prevProps.users) {
            this.filteredUsers();
        }
    }

    componentDidMount() {
        this.props.getAllUsers();
    }

    render() {
        console.log(this.state.activeDropDownWindow)
        return (
            <SearchUser
                users={this.props.users}
                filter={this.state.filter}
                setFilter={this.setFilter}
                filteredUsers={this.state.filteredUsers} 
                activeDropDownWindow={this.state.activeDropDownWindow}
                showDropWindow={this.showDropWindow}/>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.nav.users
})

export default connect(mapStateToProps, { getAllUsers })(SearchUserContainer)


