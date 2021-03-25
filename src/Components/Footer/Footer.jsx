import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import classes from './Footer.module.css';
import clockicon from '../../Assets/Images/Icons/clock.svg';
import phoneicon from '../../Assets/Images/Icons/phone.svg';
import locationicon from '../../Assets/Images/Icons/location.svg';
import mail from '../../Assets/Images/Icons/mail.svg';
import logo from '../../Assets/Images/Icons/logo_light.svg';
import insta from '../../Assets/Images/Icons/insta.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Footer = (props) => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    const mapURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12735.618392025224!2d35.105042226864754!3d47.852495087988025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc672844bd6d27%3A0x5919c1179421b383!2z0KHQotCeINC90LAg0JHRg9C70YzQstCw0YDQtSDQqNC10LLRh9C10L3QutC-!5e0!3m2!1suk!2sua!4v1615971105185!5m2!1suk!2sua";
    return(
        <footer className={classes.main}>
            {props.map &&
            <div className={classes.map} id="map">
                {props.contacts &&
                <div className={classes.contacts} data-aos="fade-right" data-aos-delay="300">
                    <h2>КОНТАКТЫ</h2>
                    <div className={classes.contactBlock}>
                        <img src={locationicon}/>
                        <p>Запорожье, ул. Независимой Украины 56</p>
                    </div>
                    <div className={classes.contactBlock}>
                        <img src={phoneicon}/>
                        <div className={classes.textBlock}>
                            <a href="tel:+380661973904">+38 (066) 197 39 04</a>
                            <a href="tel:+380980380434">+38 (098) 038 04 34</a>
                        </div>
                    </div>
                    <div className={classes.contactBlock}>
                        <img src={mail}/>
                        <a href="mailto:stobsh@gmail.com">stobsh@gmail.com</a>
                    </div>
                    <div className={classes.contactBlock}>
                        <img src={clockicon}/>
                        <div className={classes.textBlock}>
                            <span>Пн - Пт: с 09:00 до 19:00</span>
                            <span>Сб: с 09:00 до 18:000</span>
                        </div>
                    </div>
                </div>}
                <iframe src={mapURL} data-aos="fade"></iframe>
            </div>}
            <div className={classes.footer}>
                <Link to="/#" data-aos="fade-down"> 
                    <img src={logo}/>
                </Link>
                <div className={classes.links} data-aos="fade-down">
                    <Link to="/#">ГЛАВНАЯ</Link>
                    <NavLink to="/services">УСЛУГИ</NavLink>
                    <NavLink to="/contacts">КОНТАКТЫ</NavLink>
                </div>
                <div className={classes.footBlock} data-aos="fade-down">
                    <div className={classes.contactBlock}>
                        <img src={locationicon}/>
                        <p>Запорожье, ул. Независимой Украины 56</p>
                    </div>
                    <div className={classes.contactBlock}>
                        <img src={clockicon}/>
                        <div className={classes.textBlock}>
                            <span>Пн - Пт: с 09:00 до 19:00</span>
                            <span>Сб: с 09:00 до 18:00</span>
                        </div>
                    </div>
                </div>
                <div className={classes.footBlock} data-aos="fade-down">
                    <div className={classes.contactBlock}>
                        <img src={phoneicon}/>
                        <div className={classes.textBlock}>
                            <a href="tel:+380661973904">+38 (066) 197 39 04</a>
                            <a href="tel:+380980380434">+38 (098) 038 04 34</a>
                        </div>
                    </div>
                    <div className={classes.contactBlock}>
                        <img src={mail}/>
                        <a href="mailto:stobsh@gmail.com">stobsh@gmail.com</a>
                    </div>
                </div>
                <a href="https://www.instagram.com/stobshzpua/" className={classes.insta}>
                    <img src={insta}/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;