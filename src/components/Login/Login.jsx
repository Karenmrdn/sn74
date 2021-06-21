import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {ElementCreator} from '../../common/FormControls/FormControl'
import {connect} from "react-redux";
import {getCaptchaUrl, login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from '../../common/FormControls/FormControl.module.css';

const Input = ElementCreator("input");

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <Field name='email' component={Input} validate={[required]} placeholder={'Email'}/>
        </div>
        <div>
            <Field name='password' component={Input} validate={[required]} placeholder={'Password'} type='password'/>
        </div>
        <div>
            <Field name='rememberMe' component='input' placeholder={'Email'} type='checkbox'/> Remember me
        </div>
        {captchaUrl && <img src={captchaUrl} alt='captcha url'/>}
        {captchaUrl && <div><Field name='captcha' component={Input} validate={[required]} placeholder={'Input text from captcha'}/></div>}
        {error && <div className={styles.totalError}>
            {error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginFormRedux = reduxForm({form: 'login'})(LoginForm);

let Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if(props.isAuthed){
        return <Redirect to='/profile'/>
    }

    return <div className={styles.loginForm}>
        <h1>LOGIN PAGE</h1>
        <LoginFormRedux onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuthed: state.auth.isAuthed,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login, getCaptchaUrl})(Login);