import {connect} from "react-redux";
import Users2 from "./Users2";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users2-reduces";

let mapStateToProps = (state) => {
    return {
        users: state.users2Page.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

let Users2Container = connect(mapStateToProps, mapDispatchToProps)(Users2)

export default Users2Container;
