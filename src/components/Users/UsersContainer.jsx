import React from "react";
import {followUser, getUsers, unfollowUser} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageNumberClick = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageNumberClick={this.onPageNumberClick}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
                   followUser={this.props.followUser}
                   unfollowUser={this.props.unfollowUser}
                   getUsers={this.props.getUsers}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress,
        isFetching: state.usersPage.isFetching
    }
}

export default compose(
    connect(mapStateToProps, {followUser, unfollowUser, getUsers}),
    withAuthRedirect
)(UsersContainer);