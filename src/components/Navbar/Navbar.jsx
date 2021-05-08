import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
// s - это объект ('свойство': 'значение')
// Фактически выглядит так:
// let s = {
//     'nav': 'Navbar_nav__XXXXX',
//     'item': 'Navbar_item__XXXXX'
// }

const Navbar = () => {
    return(
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>                   {/* 20 урок 12:12, У АВТОРА НАПИСАНО ИНАЧЕ */}
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
            </div>

            <div  className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <br/>
            <div className={s.item}>
                <NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink>
            </div>
        </nav>
    );
}
export default Navbar;