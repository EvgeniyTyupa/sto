import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderPage from '../../../Components/HeaderPage/HeaderPage';
import { services } from '../../../Utils/services';
import classes from './Service.module.css';

const Service = (props) => {
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
            </div>
        </div>
    );
}

export default Service;