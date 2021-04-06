import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import styles from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>
                <img
                    src='https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <b>{props.profile.fullName}</b><br/>
                <img src={props.profile.photos.large}/>
                <div>
                    Contact me in socials:
                </div>
                <div className={styles.socialNetworkIconsBlock}>
                    <img
                        src='https://image.flaticon.com/icons/png/128/1384/1384005.png'/>
                    {props.profile.contacts.facebook}
                    <br/>
                    <img
                        src='https://image.flaticon.com/icons/png/128/1384/1384017.png'/>
                    {props.profile.contacts.twitter}
                    <br/>
                    <img
                        src='https://image.flaticon.com/icons/png/128/1384/1384015.png'/>
                    {props.profile.contacts.instagram}
                    <br/>
                    <img
                        src='https://image.flaticon.com/icons/png/128/1384/1384012.png'/>
                    {props.profile.contacts.youtube}
                </div>
                <div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;