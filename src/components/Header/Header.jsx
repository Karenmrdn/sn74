import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Header.module.css';

const Header = (props) => {
    return <header className={styles.header}>
        <img src='https://i.pinimg.com/originals/a2/5f/4f/a25f4f58938bbe61357ebca42d23866f.png'/>
        <div className={styles.loginBlock}>
            {props.isAuthed
                ? <div>You're authorized. Your login: {props.login}
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