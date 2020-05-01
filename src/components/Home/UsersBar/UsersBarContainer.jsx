import React from 'react';

import UsersBar from './UsersBar';


class UsersBarContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countUsers: null,
            actualUser: [],
            portionNumber: 5,
            minIndexUser: 1,
            maxIndexUser: 5,
        }
        this.paginator = this.paginator.bind(this);
        this.getMore = this.getMore.bind(this);
    }

    paginator() {
        let min = this.state.minIndexUser;
        let max = this.state.maxIndexUser;
        let paginatedUsers = this.props.users.filter((elem, index) => index >= min && index <= max)
        this.setState({
            actualUser: paginatedUsers,
            countUsers: this.props.users.length
        })
    }

    getMore() {
        let portionNumber = this.state.portionNumber;
        if (this.state.countUsers > this.state.maxIndexUser) {
            this.setState({
                minIndexUser: this.state.minIndexUser + portionNumber,
                maxIndexUser: this.state.maxIndexUser + portionNumber,
            }, () => { this.paginator() })
        } else {
            this.setState({
                minIndexUser: 1,
                maxIndexUser: portionNumber,
            }, () => { this.paginator() })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.users !== prevProps.users) {
            this.paginator();
        }
    }

    render() {
        return (
            <UsersBar
                users={this.state.actualUser}
                getMore={this.getMore}
                follow={this.props.follow}
                isAuth={this.props.isAuth} />
        )
    }
}



export default UsersBarContainer;