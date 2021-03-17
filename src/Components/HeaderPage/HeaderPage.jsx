import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './HeaderPage.module.css';
import { routes } from '../../Utils/routes';

const HeaderPage = (props) => {
    const [navigation, setNavigation] = useState([]);
    const [header, setHeader] = useState('');

    useEffect(() => {
        let splitPath = window.location.pathname.split('/');
        let newNavigation = splitPath.map((route) => {
            return(
                routes.map(item => {
                    if(window.location.pathname === item.path){
                        setHeader(item.header);
                    }
                    if(route != "" && route === item.value){
                        return(
                            <div className={classes.navEl + " " + ((window.location.pathname === item.path) && classes.activeRoute)}>
                                <span>/</span>
                                <NavLink to={item.path}>{item.text}</NavLink>
                            </div>
                        )
                    }
                }) 
            );
        });
        setNavigation(newNavigation);
    }, [window.location.pathname]);

    return(
        <div className={classes.main}>
            <div className={classes.navigation}>
                <NavLink to="/">Главная</NavLink>
                {navigation}
            </div>
            <h2>{header}</h2>
        </div>
    );
}

export default HeaderPage;