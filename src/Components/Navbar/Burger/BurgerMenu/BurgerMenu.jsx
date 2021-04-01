import React from 'react';
import classes from './BurgerMenu.module.css';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import insta from '../../../../Assets/Images/Icons/insta.svg';

const StyledMenu = styled.div`
    width: 60%;
    height: 100vh;
    background: #000426;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition-duration: .3s;
    position: fixed;
    top: 0;
    left: 0;
    padding-left: 5%;
    padding-top: 20%;
    padding-bottom: 5%;
    box-sizing: border-box;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

    & a{
        width: max-content;
    }
    & a img{
        width: 50px;
        border: 1px solid white;
        padding: 20px;
    }
`;

const BurgerMenu = (props) => {
    return(
        <StyledMenu open={props.open}>
            <div className={classes.links}>
                <div className={classes.menuItem}>
                    <NavLink to="/" exact activeClassName={classes.active} onClick={props.setOpen}>ГЛАВНАЯ</NavLink>
                </div>
                <div className={classes.menuItem}>
                    <NavLink to="/services" activeClassName={classes.active} onClick={props.setOpen}>УСЛУГИ</NavLink>
                </div>
                <div className={classes.menuItem}>
                    <NavLink to="/contacts" activeClassName={classes.active} onClick={props.setOpen}>КОНТАКТЫ</NavLink>
                </div>
                
                
            </div>
            <a target="_blank" href="https://www.instagram.com/stobshzpua/" onClick={props.setOpen}>
                <img src={insta}/>
            </a>
        </StyledMenu>
    );
}

export default BurgerMenu;