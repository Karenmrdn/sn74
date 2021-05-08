import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {createField, ElementCreator} from '../../common/FormControls/FormControl'
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from '../../common/FormControls/FormControl.module.css';

const Input = ElementCreator("input");

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        {createField('email', Input, [required], 'Email')}
        {createField('password', Input, [required], 'Password', {type: 'password'})}
        {createField('rememberMe', 'input', null, null, {type: 'checkbox'}, 'Remember me')}
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
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuthed){
        return <Redirect to='/profile'/>
    }

    return <div>
        <h1>LOGIN PAGE</h1>
        <LoginFormRedux onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuthed: state.auth.isAuthed
})

export default connect(mapStateToProps, {login})(Login);