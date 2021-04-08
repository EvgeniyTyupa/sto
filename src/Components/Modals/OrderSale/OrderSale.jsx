import React, { useEffect, useState } from 'react';
import classes from './OrderSale.module.css';
import saleImg from '../../../Assets/Images/Modal/sale.svg';
import { Button, makeStyles, TextField } from '@material-ui/core';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { makeOrder, setIsOrdered } from '../../../Redux/commonReducer';
import Preloader from '../../Preloader/Preloader';


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


const OrderSale = (props) => {
    const { register, handleSubmit, watch, errors } = useForm();

    useEffect(()=>{
        Aos.init({ duration: 500 });

        return function cleanup(){
            props.setIsOrdered(false);
        }
    },[]);

    const services = ['Шиномонтаж', 'Развал-схождение'];

    const [service, setService] = useState(services[0]);

    const material = useStyles();

    const onSubmit = (data, e) => {
        data.service = service;
        props.makeOrder(data);
        e.target.reset();
    }

    return(
        <div className={classes.main} data-aos="fade" data-aos-duration={300}>
            {props.isFetching && <Preloader/>}
            <div className={classes.window} data-aos="zoom-in" data-aos-duration={200}>
                <div className={classes.sale}>
                    <img src={saleImg}/>
                </div>
                {!props.isOrdered ? 
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Button className={classes.close} onClick={()=>{props.setIsOpenSaleModal(false)}}>&#x2715;</Button>
                    <h2>ЗАПИСАТЬСЯ И ПОЛУЧИТЬ СКИДКУ</h2>
                    <h3>Выберите услугу</h3>
                    <div className={classes.options}>
                       
                        <Button onClick={()=>{setService(services[0])}} className={service === services[0] && classes.activeBut}>
                            {service === services[0] && <div className={classes.blueBlock}></div>}
                            Шиномонтаж
                        </Button>
                        <Button onClick={()=>{setService(services[1])}} className={service === services[1] && classes.activeBut}>
                            {service === services[1] && <div className={classes.blueBlock}></div>}
                            Развал-схождение
                        </Button>
                    </div>
                    <div className={classes.fieldsContainer}>
                        <div className={classes.fields}>
                            <div className={classes.field}>
                                <TextField inputRef={register({required: true})} classes={material} name="name" variant="outlined" label="Ваше имя*" error={errors.name ? true : false}/>
                                {errors.name && errors.name.type === "required" && <p className={classes.error}>Обязательное поле!</p>}
                            </div>
                            <div className={classes.field}>
                                <TextField inputRef={register({required: true})} classes={material} name="phone" variant="outlined" label="Номер телефона*" error={errors.phone ? true : false}/>
                                {errors.phone && errors.phone.type === "required" && <p className={classes.error}>Обязательное поле!</p>}
                            </div>
                        </div>
                        <div className={classes.fields}>
                            <div className={classes.field}>
                                <TextField inputRef={register} classes={material} name="auto" variant="outlined" label="Марка и модель авто"/>
                            </div>
                            <div className={classes.field}>
                                <TextField inputRef={register({required: true})} classes={material} name="email" variant="outlined" label="Эл. адрес*" error={errors.phone ? true : false}/>
                                {errors.email && errors.email.type === "required" && <p className={classes.error}>Обязательное поле!</p>}
                            </div>
                        </div>
                    </div>
                    <Button type="submit">Записаться</Button>
                </form> : 
                <div className={classes.done} data-aos="fade" data-aos-duration={300}>
                    <Button className={classes.close} onClick={()=>{props.setIsOpenSaleModal(false)}}>&#x2715;</Button>
                    <h2>Ваша запись принята. <br/>Спасибо, что доверяете нам!</h2>
                    <p>Мы перезвоним Вам в ближайшее время для уточнения деталей и подтверждения записи</p>
                </div>}
            </div>
        </div>
    );
}

let mapStateToProps = (state) => ({
    isFetching: state.common.isFetching,
    isOrdered: state.common.isOrdered
});

export default connect(mapStateToProps, {
   makeOrder,
   setIsOrdered 
})(OrderSale);