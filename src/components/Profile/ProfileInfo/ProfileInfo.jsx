import React, {useState} from "react";
import s from './ProfileInfo.module.css';
import styles from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import incognitoAvatar from "../../../assets/images/incognitoAvatar.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    // Здесь мы задиспатчили, дальше ждем, пока зарезолвится промис, а потом уже меняем editMode на false
    const onSubmit = (formData) => {
        saveProfile(formData).then(()=>{
            setEditMode(false);
        });
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <b>{profile.fullName}</b><br/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <img src={profile.photos.large || incognitoAvatar}/>
                {isOwner && <input onChange={onMainPhotoSelected} type="file"/>}

                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>}
            </div>
        </div>
    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit profile info</button>
        </div>}
        <div>
            <b>Looking for a job: </b>{profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob && <div>
            <b>My professional skills: </b>{profile.lookingForAJobDescription}
        </div>}
        <div>
            <b>About me: </b>{profile.aboutMe}
        </div>
        <div>
            <b>Socials: </b>{Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            }
        )}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={styles.contact}><b>{contactTitle}: </b>{contactValue}</div>
}

export default ProfileInfo;