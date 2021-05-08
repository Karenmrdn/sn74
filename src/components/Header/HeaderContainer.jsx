import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {authMe, logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
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

export default connect(mapStateToProps, {logout})(HeaderContainer);