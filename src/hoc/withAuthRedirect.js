import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuthed: state.auth.isAuthed
    }
}

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuthed) return <Redirect to='/login'/>
        return <Component {...props}/>
    }

    const ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedRedirectComponent;
}

export default withAuthRedirect;