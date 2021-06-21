import React from "react";
import styles from "./Users.module.css";
import incognitoAva from "../../assets/images/incognitoAvatar.png";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollowUser, followUser}) => {

    return <div>
        <div className={styles.name}>
            {user.name}
        </div>
        <div>
            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : incognitoAva}
                     className={styles.avatar}/>
            </NavLink>
        </div>
        <div>
            {user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    unfollowUser(user.id);
                }}>Unfollow</button>
                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    followUser(user.id);
                }}>Follow</button>}
        </div>
        <div>
            {user.status}
        </div>
        <div>
            {"user.location.country"}
        </div>
        <div>
            {"user.location.city"}
        </div>
        <br/>
    </div>
}

export default User;