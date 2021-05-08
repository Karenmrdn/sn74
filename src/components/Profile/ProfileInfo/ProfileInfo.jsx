import React from "react";
import s from './ProfileInfo.module.css';
import styles from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import incognitoAvatar from "../../../assets/images/incognitoAvatar.png";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <b>{profile.fullName}</b><br/>
                <img src={profile.photos.large || incognitoAvatar}/>
                <div>
                    Contact me in socials:
                </div>
                <div className={styles.socialNetworkIconsBlock}>
                    <img
                        src='https://image.flaticon.com/icons/png/128/1384/1384005.png'/>
                    {profile.contacts.facebook}
                    <br/>
                    <img
                        src='https://image.flaticon.com/icons/png/128/1384/1384017.png'/>
                    {profile.contacts.twitter}
                    <br/>
                    <img
                        src='https://image.flaticon.com/icons/png/128/1384/1384015.png'/>
                    {profile.contacts.instagram}
                    <br/>
                    <img
                        src='https://image.flaticon.com/icons/png/128/1384/1384012.png'/>
                    {profile.contacts.youtube}
                </div>
                <div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;