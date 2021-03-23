import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderPage from '../../../Components/HeaderPage/HeaderPage';
import { services } from '../../../Utils/services';
import classes from './Service.module.css';

import img1 from '../../../Assets/Images/Source/services/img1.jpg';
import img2 from '../../../Assets/Images/Source/services/img2.jpg';

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
                            {services.map(item => {
                                return <NavLink to={item.path} activeClassName={classes.activeLink}>{item.text}</NavLink>
                            })}
                        </div>
                    </div>
                </div>
                <div className={classes.content}>
                    <div className={classes.contentImages}>
                        <img src={img1}/>
                        <img src={img2}/>
                    </div>
                    <div className={classes.info}>
                        <ul>
                            {currentService && currentService.points.map(item => {
                                return <li>{item}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;