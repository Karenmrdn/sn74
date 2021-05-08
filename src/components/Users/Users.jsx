import React from "react";
import styles from "./Users.module.css";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";

let Users = ({totalUsersCount, pageSize, currentPage, onPageNumberClick, ...props}) => {

    return <div className={styles.item}>
        <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize}
                   currentPage={currentPage} onPageNumberClick={onPageNumberClick}/>
        <div>
            {props.users.map(u => <User user={u} key={u.id} followingInProgress={props.followingInProgress}
                                        unfollowUser={props.unfollowUser} followUser={props.followUser}/>)}
        </div>
    </div>
}

export default Users;