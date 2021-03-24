import React, { useEffect, useState } from 'react';
import classes from './Slider.module.css';
import Slider from 'react-slick';
import NextArrow from '@material-ui/icons/ArrowForwardIos';
import { services } from '../../Utils/services';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';


const StyledSlide = styled.div`
    background-image: ${({img}) => `url(${img})`};
    width: 50%;
    height: 545px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;


const useStyles = makeStyles((theme) => ({
    main: {
        width: "50%",
        outline: "none"
    },
    sliderCarousel: {
        width: "40%",
        marginRight: "40px",
        height: '100%',
        position: "relative",
        '&:active': {
            border: "none"
        },
        '& .slick-list': {
            overflow: "hidden"
        },
        '& .slick-prev': {
          left: 20,
          transform: 'rotate(180deg)',
        },
        '& .slick-next': {
          right: 20,
          transform: 'unset !important',
        },
        '& .slick-track': {
          display: 'flex !important',
          alignItems: 'center',
          width: "100%"
        },
        '& .slick-track img': {
            width: "100%"
        },
        '& .slick-arrow': {
          backgroundColor: "transparent",
          height: '40px',
          width: 'auto',
          color: '#4B5EA3',
          zIndex: 1560,
          borderSize: 10,
          borderRadius: '50%',
          position: "absolute",
          top: "0",
          color: "white",
          backgroundColor: "#35AAF9",
          borderRadius: 0,
          cursor: "pointer",
        },
        '& .slick-prev': {
            left: "0px",
            transform: "rotate(180deg)",
            opacity: ".8",
            transitionDuration: ".3s",
        },
        '& .slick-prev:hover': {
            opacity: 1
        },
        '& .slick-next': {
            right: "0px",
            opacity: ".8",
            transitionDuration: ".3s",
        },
        '& .slick-next:hover': {
            opacity: 1  
        },
        '& .carouselContent': {
          // width: 'fit-content !important',
          height: 'auto',
          maxHeight: 'calc(100vh - 64px)',
          margin: '0 auto',
        },
    },
    sliderImageCarousel: {
        width: "100%",
        height: '100%',
        position: "relative",
        '& .slick-list': {
            overflow: "hidden"
        },
        '& .slick-prev': {
          right: 100,
          transform: 'rotate(180deg)',
        },
        '& .slick-next': {
          right: 20,
          transform: 'unset !important',
        },
        '& .slick-track': {
          display: 'flex !important',
          alignItems: 'center',
          width: "100%"
        },
        '& .slick-track img': {
            width: "100%"
        },
        '& .slick-arrow': {
          backgroundColor: "transparent",
          height: '40px',
          width: 'auto',
          color: '#4B5EA3',
          zIndex: 1560,
          borderSize: 10,
          borderRadius: '50%',
          position: "absolute",
          bottom: "60px",
          marginTop: "50px",
          backgroundColor: "#35AAF9",
          borderRadius: 0,
          color: "white",
          cursor: "pointer"
        },
        '& .slick-prev': {
            right: "285px",
            transform: "rotate(180deg)",
            opacity: ".8",
            transitionDuration: ".3s",
        },
        '& .slick-prev:hover': {
            opacity: 1  
        },
        '& .slick-next': {
            right: "0px",
            opacity: ".8",
            transitionDuration: ".3s",
        },
        '& .slick-next:hover': {
            opacity: 1  
        },
        '& .carouselContent': {
          // width: 'fit-content !important',
          height: 'auto',
          maxHeight: 'calc(100vh - 64px)',
          margin: '0 auto',
        },
    },

}));

const SliderWorks = (props) => {
    const [sliderPosition, setSliderPosition] = useState(0);
    const [sliderImagePosition, setSliderImagePosition] = useState(0);
    const [currentWork, setCurrentWork] = useState(0);

    const material = useStyles();

    const handleSlide = (next) => {
        setSliderPosition(next);
        if(next > props.currentService.works.length - 1){
            setCurrentWork(0);
        }else{
            setCurrentWork(next);
        }
    }

    useEffect(()=>{
        setSliderImagePosition(0)
    },[currentWork]);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 300,
        nextArrow: <NextArrow/>,
        prevArrow: <NextArrow/>,
        slidesPerRow: 1,
        initialSlide: 0,
        arrows: true,
        rtl: 'ltr',
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: false,
        beforeChange: (current, next) => handleSlide(next + 1)
    }

    const sliderImageSettings = {
        dots: false,
        infinite: true,
        speed: 300,
        nextArrow: <NextArrow/>,
        prevArrow: <NextArrow/>,
        slidesPerRow: 1,
        initialSlide: 0,
        arrows: true,
        rtl: 'ltr',
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: false,
        beforeChange: (current, next) => setSliderImagePosition(next + 1)
    }

    return(
        <div className={classes.main}>
            <Slider {...sliderSettings} className={material.sliderCarousel}>
               {props.currentService && (props.currentService.works.length &&  props.currentService.works.map((item, index) => {
                   return(
                       <div className={classes.slide} key={"slideText" + index}>
                           <h5>{item.title}</h5>
                           <p>{item.text}</p>
                       </div>
                   );
               }))}
            </Slider>
            <div className={classes.sliderImages}>
                <Slider {...sliderImageSettings} className={material.sliderImageCarousel}>
                    {props.currentService && (props.currentService.works[currentWork] && props.currentService.works[currentWork].imgs.map((item, index) => {
                        return(
                            <StyledSlide img={item} key={"image" + index}/>
                        ) 
                    }))}
                </Slider>
                <span className={classes.imageCounter}>
                    <span className={classes.currentImageNumber}>{sliderImagePosition === 0 ? sliderImagePosition + 1 : sliderImagePosition} / </span>
                    <span>{props.currentService.works[currentWork].imgs.length}</span>
                </span>
            </div>
            
        </div>
    );
}

export default SliderWorks;