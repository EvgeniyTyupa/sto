import React, { useEffect } from 'react';
import Footer from '../../Components/Footer/Footer';
import HeaderPage from '../../Components/HeaderPage/HeaderPage';
import classes from './Contacts.module.css';
import clockicon from '../../Assets/Images/Icons/clock_blue.svg';
import phoneicon from '../../Assets/Images/Icons/phone_blue.svg';
import locationicon from '../../Assets/Images/Icons/location_blue.svg';
import mail from '../../Assets/Images/Icons/mail_blue.svg';
import { useForm } from 'react-hook-form';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import { makeOrder, setIsOrdered } from '../../Redux/commonReducer';
import Preloader from '../../Components/Preloader/Preloader';


const useStyles = makeStyles((theme) => ({
    root:{
        width: "49%",
        '& label.Mui-focused': {
            color: '#35AAF9'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#35AAF9' 
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: 0
        }
    }
}));


const Contacts = (props) => {
    const material = useStyles();
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data, e) => {
        props.makeOrder(data);
        e.target.reset();
    }

    useEffect(() => {
        return function cleanup(){
            props.setIsOrdered(false)
        }
    },[]);

    return(
        <div className={classes.main}>
            <HeaderPage/>
            <Helmet
                htmlAttributes={{"lang": "en", "amp": undefined}}
                title='Контакты | СТО на Бульваре Шевченко' 
                meta={[{"name": "description", "content": "СТО на Бульваре Шевченко. Запорожье, ул. Независимой Украины 56. Пн - Пт: с 09:00 до 19:00   Сб: с 09:00 до 18:00. +38 (066) 197 39 04. +38 (098) 038 04 34"}]}/>
            <div className={classes.contacts}>
                {props.isFetching && <Preloader/>}
               <div className={classes.form}>
                   <h2>Свяжитесь с нами!</h2>
                   <p>Оставьте свой вопрос и наш специалист ответит на него.</p>
                   {!props.isOrdered ? 
                   <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={classes.field}>
                            <TextField error={errors.name ? true : false} inputRef={register({required: true})} classes={material} variant="outlined" name="name" label="Ваше имя*"/>
                            <TextField error={errors.email ? true : false} inputRef={register({required: true})} classes={material} variant="outlined" name="email" label="Эл. адрес*"/>
                        </div>
                        <div className={classes.fieldTextArea}>
                            <TextField error={errors.message ? true : false} inputRef={register({required: true})} classes={material} variant="outlined" name="message" multiline rows={5} label="Ваше сообщение...*"/>
                        </div>
                        <Button type="submit">Отправить</Button>
                   </form> : 
                   <div className={classes.done}>
                        <h2>Ваша запись принята. <br/>Спасибо, что доверяете нам!</h2>
                        <p>Мы перезвоним Вам в ближайшее время для уточнения деталей и подтверждения записи</p>
                   </div>}
                </div>
                <div className={classes.info}>
                    <div className={classes.infoLine}>
                        <div className={classes.infoBlock}>
                            <img src={locationicon}/>
                            <h5>Наш адрес</h5>
                            <address>г. Запорожье, <br/>ул. Независимой Украины 56</address>
                        </div>
                        <div className={classes.infoBlock}>
                            <img src={mail}/>
                            <h5>E-mail</h5>
                            <a href="mailto:stobsh@gmail.com">stobsh@gmail.com</a>
                        </div>
                    </div>
                    <div className={classes.infoLine}>
                        <div className={classes.infoBlock}>
                            <img src={clockicon}/>
                            <h5>График работы</h5>
                            <p>Пн - Пт: с 09:00 до 19:00</p>
                            <p>Сб: с 09:00 до 18:00</p>
                        </div>
                        <div className={classes.infoBlock}>
                            <img src={phoneicon}/>
                            <h5>Телефоны</h5>
                            <a href="tel:+380661973904">+38 (066) 197 39 04</a>
                            <a href="tel:+380980380434">+38 (098) 038 04 34</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer map={true}/>
        </div>
    );
}

let mapStateToProps = (state) => ({
    isFetching: state.common.isFetching,
    isOrdered: state.common.isFetching
});

export default connect(mapStateToProps, {
    setIsOrdered, makeOrder
})(Contacts);