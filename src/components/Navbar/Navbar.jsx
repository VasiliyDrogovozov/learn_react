import React from 'react';
import { NavLink } from 'react-router-dom';
import s from  './Navbar.module.css';

const Navbar = () => {
    return(
        <nav className={s.nav}>
            <div className={s.item}><NavLink to='/profile' className={( {isActive} ) => isActive ? `${s.activeLink}` : `${s.item}`}>Profile</NavLink></div>
            <div className={s.item}><NavLink to='/dialogs' className={( {isActive} ) => isActive ? `${s.activeLink}` : `${s.item}`}>Messages</NavLink></div>
            <div className={s.item}><NavLink to='/news' className={( {isActive} ) => isActive ? `${s.activeLink}` : `${s.item}`}>News</NavLink></div>
            <div className={s.item}><NavLink to='/settings' className={( {isActive} ) => isActive ? `${s.activeLink}` : `${s.item}`}>Setings</NavLink></div>
            <div className={s.item}><NavLink to='/music' className={( {isActive} ) => isActive ? `${s.activeLink}` : `${s.item}`}>Music</NavLink></div>
        </nav>
    )
};

export default Navbar;