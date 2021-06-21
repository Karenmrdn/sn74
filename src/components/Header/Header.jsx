import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Header.module.css';
import appIcon from '../../assets/images/appIcon.png';

const Header = (props) => {
    return <header className={styles.header}>
        <img src={appIcon}/>
        <div className={styles.loginBlock}>
            {props.isAuthed
                ? <div>You are authorized. Your login: <b>{props.login}</b>
                    <div align='right'>
                        <button onClick={props.logout}>Logout</button>
                    </div>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
}
export default Header;