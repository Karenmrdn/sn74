import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://w7.pngwing.com/pngs/178/419/png-transparent-man-illustration-computer-icons-avatar-login-user-avatar-child-web-design-face-thumbnail.png'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
}
export default Post;