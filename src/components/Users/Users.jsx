import React from "react";
import styles from "./Users.module.css";
import incognitoAva from "../../assets/images/incognitoAvatar.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";

let Users = (props) => {

    let pages = [];

    // ДОБАВИЛ В ФОРМУЛУ НИЖЕ "% 20 + 10" ИЗ-ЗА ТОГО, ЧТО СЕЙЧАС TOTALCOUNT > 10000
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) % 20 + 10;
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={styles.item}>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={() => {
                                 props.onPageNumberClick(p)
                             }}> {p} |</span>
            })}
        </div>
        <br/>
        {
            props.users.map(u => <div key={u.id}>
                <div className={styles.name}>
                    {u.name}
                </div>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : incognitoAva}
                             className={styles.avatar}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollowUser(u.id);
                            /*props.toggleFollowingProgress(true, u.id);
                            usersAPI.unfollowUser(u.id)
                           /!* axios
                                .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '17258c28-6624-4307-888a-943249367465'
                                    }
                                })*!/
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(u.id);
                                    }
                                    props.toggleFollowingProgress(false, u.id);
                                });*/
                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.followUser(u.id);
                           /* props.toggleFollowingProgress(true, u.id);
                            usersAPI.followUser(u.id)
                            /!*axios
                                .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '17258c28-6624-4307-888a-943249367465'
                                    }
                                })*!/
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(u.id);
                                    }
                                    props.toggleFollowingProgress(false, u.id);
                                });*/
                        }}>Follow</button>}
                </div>
                <div>
                    {u.status}
                </div>
                <div>
                    {"u.location.country"}
                </div>
                <div>
                    {"u.location.city"}
                </div>
                <br/>
            </div>)
        }
    </div>
}

export default Users;