import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderPage from '../../../Components/HeaderPage/HeaderPage';
import { services } from '../../../Utils/services';
import classes from './Service.module.css';
import { Helmet } from "react-helmet";

import img1 from '../../../Assets/Images/Source/services/img1.jpg';
import img2 from '../../../Assets/Images/Source/services/img2.jpg';
import { Button } from '@material-ui/core';
import ButtonSto from '../../../Components/Button/Button';
import Footer from '../../../Components/Footer/Footer';
import SliderWorks from '../../../Components/Slider/Slider';
import OrderModal from '../../../Components/Modals/OrderModal/OrderModal';
import OrderSale from '../../../Components/Modals/OrderSale/OrderSale';

const Service = (props) => {
    const [currentService, setCurrentService] = useState(null);
    let points = [];

    const [isOpenOrderModal, setIsOpenOrderModal] = useState(false);
    const [isOpenSaleModal, setIsOpenSaleModal] = useState(false);

    useEffect(() => {
        services.forEach(item => {
            if(item.path === window.location.pathname){
                setCurrentService(item);
            }
        })
    }, [window.location.pathname]);

    return(
        <div className={classes.main}>
            <Helmet
                htmlAttributes={{"lang": "en", "amp": undefined}}
                title={currentService && currentService.text + " | СТО на Бульваре Шевченко"}
                meta={[{"name": "description", "content": "СТО на Бульваре Шевченко. Запорожье, ул. Независимой Украины 56. Пн - Пт: с 09:00 до 19:00   Сб: с 09:00 до 18:00. +38 (066) 197 39 04. +38 (098) 038 04 34"}]}/>
            <HeaderPage/>
            {isOpenOrderModal && <OrderModal setIsOpenOrderModal={setIsOpenOrderModal}/>}
            {isOpenSaleModal && <OrderSale setIsOpenSaleModal={setIsOpenSaleModal}/>}
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
                        <ButtonSto function={setIsOpenSaleModal} text={"Подробнее"}/>
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
                        {(currentService && currentService.headerFactor) && <h3>{currentService.headerFactor}</h3>}
                        {(currentService && currentService.factors) && <ul className={classes.factors}>
                            {currentService.factors.map((item, index) => {
                                return <li key={"factor" + index}>{item}</li>
                            })}
                        </ul>}
                        <div className={classes.dop}>
                            {currentService && currentService.dop.map((item, index) => {
                                return <p key={"dop" + index}>{item}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.orderBut}>
                <ButtonSto function={setIsOpenOrderModal} text={"Записаться"}/>
            </div>
            {(currentService && currentService.works.length > 0) &&
            <div className={classes.works}>
                <h2>НАШИ РАБОТЫ</h2>
                <SliderWorks currentService={currentService}/>
            </div>}
            <Footer/>
        </div>
    );
}

export default Service;