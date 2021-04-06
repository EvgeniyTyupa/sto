import React, { useLayoutEffect, useState } from 'react';
import HeaderPage from '../../Components/HeaderPage/HeaderPage';
import { services } from '../../Utils/services';
import classes from './Services.module.css';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Points from '../../Components/Points/Points';
import Footer from '../../Components/Footer/Footer';

const StyledService = styled.div`
    background-image: ${({ background }) => `url(${background})`};
    width: ${({ size }) =>  size > 1300 ? "301px" : "286px"};
    height: 500px;
    background-size: cover;
    opacity: .8;
    transition-duration: .4s;
    cursor: pointer;
    z-index: 10;
    position: relative;
    &:hover{
        opacity: 1;
        transform: translateY(-60px);
    }
    @media screen and (max-width: 1279px){
        opacity: 1;
    }
    @media screen and (max-width: 468px){
        height: 365px;
    }
`;


const Services = (props) => {
    const [size, setSize] = useState(window.innerWidth);

    useLayoutEffect(() => {
        function updateSize(){
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    let servicesArr = services.map((item) => (
        <StyledService size={size} background={item.img} className={classes.service}>
            <NavLink to={item.path}>
                <div className={classes.blueblock}></div>
                <div className={classes.serviceIcon}>
                    {item.icon}
                </div>
                <span>{item.text}</span>
            </NavLink>
        </StyledService>
    ));
    return(
        <div className={classes.main}>
            <Helmet
                htmlAttributes={{"lang": "en", "amp": undefined}}
                title='СТО на Бульваре Шевченко | Услуги'
                meta={[{"name": "description", "content": "СТО на Бульваре Шевченко. Запорожье, ул. Независимой Украины 56. Пн - Пт: с 09:00 до 19:00   Сб: с 09:00 до 18:00. +38 (066) 197 39 04. +38 (098) 038 04 34"}]}/>
            <HeaderPage/>
            <div className={classes.services}>
                {servicesArr}
            </div>
            <div className={classes.points}>
                <h2>ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
                <Points/>
            </div>
            <Footer map={true} contacts={size > 1279 ? true : false}/>
        </div>
    );
}

export default Services;