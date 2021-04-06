import React from "react";
import s from './Header.module.css';
import {connect} from "react-redux";
import Header from "./Header";
import * as axios from "axios";
import {authMe, setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe();
        /*authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    this.props.setAuthUserData(id, login, email);
                }
            });*/
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuthed: state.auth.isAuthed
    }
}

export default connect(mapStateToProps, {authMe})(HeaderContainer);