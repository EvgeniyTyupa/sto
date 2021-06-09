import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import classes from './Navbar.module.css';
import clockicon from '../../Assets/Images/Icons/clock.svg';
import phoneicon from '../../Assets/Images/Icons/phone.svg';
import phoneiconblack from '../../Assets/Images/Icons/phone_black.svg';
import locationicon from '../../Assets/Images/Icons/location.svg';
import logo from '../../Assets/Images/Icons/logo.svg';
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Burger from './Burger/Burger';
import insta from '../../Assets/Images/Icons/insta.png'


const Navbar = (props) => {
    useEffect(() => {
        Aos.init({ duration: 100 });
    }, []);

    return(
        <nav className={classes.main}>
            <div className={classes.header} data-aos="fade-down" data-aos-duration="900">
                <div className={classes.container}>
                    <div className={classes.block}>
                        <img src={clockicon}/>
                        <span>Пн - Пт: с 09:00 до 19:00   Сб: с 09:00 до 18:00</span>
                    </div>
                    <div className={classes.block}>
                        <img src={phoneicon}/>
                        <a href="tel:+380661973904" className={classes.phone}>+38 (066) 197 39 04</a>
                        <a href="tel:+380980380434">+38 (098) 038 04 34</a>
                    </div>
                    <div className={classes.block}>
                        <img src={locationicon}/>
                        <Link to="/#map">Запорожье, ул. Независимой Украины 56</Link>
                    </div>
                </div>
            </div>
            <div className={classes.menu}>
                <div className={classes.container}>
                    <NavLink to="/">
                        <img src={logo} data-aos="fade-up" data-aos-duration="1200"/>
                    </NavLink>
                    <div className={classes.links} data-aos="fade-up" data-aos-duration="1200">
                        <NavLink to="/">ГЛАВНАЯ</NavLink>
                        <NavLink to="/services">УСЛУГИ</NavLink>
                        <NavLink to="/contacts">КОНТАКТЫ</NavLink>
                    </div>
                    <a data-aos="fade-up" data-aos-duration="1200"  rel="noreferrer" target="_blank" href="https://www.instagram.com/stobshzpua/" className={classes.insta}>
                        <img src={insta}/>
                        instagram
                    </a>
                </div>
            </div>
            <div className={classes.mobileHeader}>
                <Burger/>
                <div className={classes.block}>
                    <a data-aos="fade-up" data-aos-duration="1200"  rel="noreferrer" target="_blank" href="https://www.instagram.com/stobshzpua/" className={classes.insta}>
                        <img src={insta}/>
                        instagram
                    </a>
                    <img src={locationicon}/>
                    <Link to="/#map" target="_self">СТО <br/> НА БШ</Link>
                </div>
                
            </div>
            <div className={classes.mobileMenu}>
                <img src={phoneiconblack}/>
                <a href="tel:+380661973904" className={classes.phone}>+38 (066) 197 39 04</a>
                <a href="tel:+380980380434">+38 (098) 038 04 34</a>
            </div>
        </nav>
    )
}

export default Navbar;