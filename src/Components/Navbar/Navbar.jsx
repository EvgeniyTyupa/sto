import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import classes from './Navbar.module.css';
import clockicon from '../../Assets/Images/Icons/clock.svg';
import phoneicon from '../../Assets/Images/Icons/phone.svg';
import locationicon from '../../Assets/Images/Icons/location.svg';
import logo from '../../Assets/Images/Icons/logo.svg';
import { NavLink } from 'react-router-dom';


const Navbar = (props) => {
    return(
        <nav className={classes.main}>
            <div className={classes.header}>
                <div className={classes.container}>
                    <div className={classes.block}>
                        <img src={clockicon}/>
                        <span>Пн - Пт: с 09:00 до 19:00   Сб: с  09:00 до 18:00</span>
                    </div>
                    <div className={classes.block}>
                        <img src={phoneicon}/>
                        <a href="tel:+380661973904" className={classes.phone}>+38 (066) 197 39 04</a>
                        <a href="tel:+380980380434">+38 (098) 038 04 34</a>
                    </div>
                    <div className={classes.block}>
                        <img src={locationicon}/>
                        <Link to="/#map">Запорожье, пр. Соборный, 206</Link>
                    </div>
                </div>
            </div>
            <div className={classes.menu}>
                <div className={classes.container}>
                    <img src={logo}/>
                    <div className={classes.links}>
                        <NavLink to="/">ГЛАВНАЯ</NavLink>
                        <NavLink to="/services">УСЛУГИ</NavLink>
                        <NavLink to="/contacts">КОНТАКТЫ</NavLink>
                    </div>
                    <span>СТО НА БУЛЬВАРЕ ШЕВЧЕНКО</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;