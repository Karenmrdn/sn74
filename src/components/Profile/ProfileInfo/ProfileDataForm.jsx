import React from "react";
import {Field, reduxForm} from "redux-form";
import {ElementCreator} from "../../../common/FormControls/FormControl";
import styles from "../../../common/FormControls/FormControl.module.css";

const Input = ElementCreator("input");
const Textarea = ElementCreator("textarea");

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <br/>
        {error && <div className={styles.totalError}>
            {error}
        </div>}
        <div>
            <b>Full name:</b> <Field name='fullName' component={Input} placeholder={'Full name'}/>
        </div>
        <div>
            <b>Looking for a job:</b> <Field name='lookingForAJob' component='input' type='checkbox'
                                             placeholder={'Looking for a job'}/>
        </div>
        <div>
            <b>My professional skills:</b> <Field name='lookingForAJobDescription' component={Textarea}
                                                  placeholder={'My professional skills'}/>
        </div>
        <div>
            <b>About me:</b> <Field name='aboutMe' component={Textarea} placeholder={'About me'}/>
        </div>
        <div>
            <b>Socials: </b>{Object.keys(profile.contacts).map(key => {
                return <div key={key} >
                    <b>{key}</b>
                    <div><Field name={'contacts.'+key} component='input' placeholder={key}/></div>
                </div>
            }
        )}
        </div>
        <button>Save</button>
    </form>
}

const ProfileDataFormRedux = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataFormRedux;