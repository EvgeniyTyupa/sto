import React from 'react';
import classes from './BurgerMenu.module.css';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Insta from '../../../../Assets/Images/Icons/Insta';

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
    z-index: 9;
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
    @media screen and (max-width: 468px){
        width: 80%;
        & a img{
            width: 25px;
            border: 1px solid white;
            padding: 10px;
        }
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
                <Insta/>
            </a>
        </StyledMenu>
    );
}

export default BurgerMenu;