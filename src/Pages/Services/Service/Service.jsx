import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderPage from '../../../Components/HeaderPage/HeaderPage';
import { services } from '../../../Utils/services';
import classes from './Service.module.css';

import img1 from '../../../Assets/Images/Source/services/img1.jpg';
import img2 from '../../../Assets/Images/Source/services/img2.jpg';
import { Button } from '@material-ui/core';
import ButtonSto from '../../../Components/Button/Button';
import Footer from '../../../Components/Footer/Footer';
import SliderWorks from '../../../Components/Slider/Slider';

const Service = (props) => {
    const [currentService, setCurrentService] = useState(null);
    let points = [];

    useEffect(() => {
        services.forEach(item => {
            if(item.path === window.location.pathname){
                setCurrentService(item);
            }
        })
    }, [window.location.pathname]);

    return(
        <div className={classes.main}>
            <HeaderPage/>
            <div className={classes.infoMain}>
                <div className={classes.leftSide}>
                    <div className={classes.menu}>
                        <div className={classes.menuItem}>
                            {services.map((item, index) => {
                                return <NavLink key={"link" + index} to={item.path} activeClassName={classes.activeLink}>{item.text}</NavLink>
                            })}
                        </div>
                    </div>
                    <div className={classes.sale}>
                        <p>Не упустите возможность получить <strong>скидку</strong></p>
                        <h1>-15%</h1>
                        <p><strong>на Шиномонтаж или Развал-схождение</strong></p>
                        <ButtonSto text={"Подробнее"}/>
                    </div>
                </div>
                <div className={classes.content}>
                    <div className={classes.contentTop}>
                        <div className={classes.contentImages}>
                            <img src={img1}/>
                            <img src={img2}/>
                        </div>
                        <div className={classes.info}>
                            <h3>{currentService && currentService.headerPoints}</h3>
                            <ul>
                                {currentService && currentService.points.map((item, index) => {
                                    return <li key={"point" + index}>{item}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className={classes.contentBot}>
                        <h3>{currentService && currentService.headerFactor}</h3>
                        <ul className={classes.factors}>
                            {currentService && currentService.factors.map((item, index) => {
                                return <li key={"factor" + index}>{item}</li>
                            })}
                        </ul>
                        <div className={classes.dop}>
                            {currentService && currentService.dop.map((item, index) => {
                                return <p key={"dop" + index}>{item}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.orderBut}>
                <ButtonSto text={"Записаться"}/>
            </div>
            {currentService && currentService.works.length &&
            <div className={classes.works}>
                <h2>НАШИ РАБОТЫ</h2>
                <SliderWorks currentService={currentService}/>
            </div>}
            <Footer/>
        </div>
    );
}

export default Service;