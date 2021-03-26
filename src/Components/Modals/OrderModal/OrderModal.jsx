import React, { useEffect, useState } from 'react';
import classes from './OrderModal.module.css';

import img1 from '../../../Assets/Images/Modal/im1.jpg';
import img2 from '../../../Assets/Images/Modal/im2.jpg';
import img3 from '../../../Assets/Images/Modal/im3.jpg';
import { Button, TextField, makeStyles } from '@material-ui/core';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { makeOrder } from '../../../Redux/commonReducer';
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

const StyledImage = styled.div`
    background-image: ${({img}) => `url(${img})`};
    height: 100%;
    width: 48%;
    background-size: cover;
    background-position: center;
`;

const OrderModal = (props) => {
    const { register, handleSubmit, watch, errors } = useForm();

    const images = [img1, img2, img3];
    const [currentImage, setCurrentImage] = useState(null);

    const getRandomIndex = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(()=>{
        Aos.init({ duration: 500 });
        let random = getRandomIndex(0, images.length - 1);
        setCurrentImage(images[random]);
    },[]);

    const material = useStyles();

    const onSubmit = (data) => {
        props.makeOrder(data);
    }

    return(
        <div className={classes.main} data-aos="fade" data-aos-duration={300}>
            {props.isFetching && <Preloader/>}
            <div className={classes.window} data-aos="zoom-in" data-aos-duration={200}>
                {currentImage && <StyledImage img={currentImage}/>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Button className={classes.close} onClick={()=>{props.setIsOpenOrderModal(false)}}>&#x2715;</Button>
                    <h2>ЗАПИСАТЬСЯ НА СЕРВИС</h2>
                    <div className={classes.field}>
                        <TextField inputRef={register({required: true})} error={errors.name ? true : false} classes={material} name="name" variant="outlined" label="Ваше имя"/>
                        {errors.name && errors.name.type === "required" && <p className={classes.error}>Обязательное поле!</p>}
                    </div>
                    <div className={classes.field}>
                        <TextField inputRef={register({required: true})} error={errors.phone ? true : false} classes={material} name="phone" variant="outlined" label="Номер телефона"/>
                        {errors.phone && errors.phone.type === "required" && <p className={classes.error}>Обязательное поле!</p>}
                    </div>
                    <div className={classes.field}>
                        <TextField inputRef={register({required: true})} error={errors.auto ? true : false} classes={material} name="auto" variant="outlined" label="Марка и модель авто"/>
                        {errors.auto && errors.auto.type === "required" && <p className={classes.error}>Обязательное поле!</p>}
                    </div>
                    <div className={classes.field}>
                        <TextField inputRef={register({required: true, email: true})} error={errors.email ? true : false} classes={material} name="email" variant="outlined" label="Эл. адрес"/>
                        {errors.email && errors.email.type === "required" && <p className={classes.error}>Обязательное поле!</p>}
                    </div>
                    <Button type="submit">Записаться</Button>
                </form>
            </div>
        </div>
    );
}

let mapStateToProps = (state) => ({
    isFetching: state.common.isFetching,
    isOrdered: state.common.isOrdered
})

export default connect(mapStateToProps, {
    makeOrder
})(OrderModal);