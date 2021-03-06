import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import classes from './Main.module.css';
import { Helmet } from "react-helmet";
import { NavLink } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';
import CountUp from 'react-countup';
import Slider from 'react-slick';
import { HashLink as Link } from 'react-router-hash-link';

import { oil } from '../../Assets/Images/Icons/oil.js';
import { tire } from '../../Assets/Images/Icons/tire.js';
import { engine } from '../../Assets/Images/Icons/engine.js';
import { transmission } from '../../Assets/Images/Icons/transmisson.js';
import { battery } from '../../Assets/Images/Icons/battery.js';
import { diagnostic } from '../../Assets/Images/Icons/diagnostic.js';
import car from '../../Assets/Images/Source/car.svg';
import car_back from '../../Assets/Images/Source/car_back.jpg';
import info from '../../Assets/Images/Icons/info.svg';
import about from '../../Assets/Images/Source/about.jpg';

import phone from '../../Assets/Images/Source/phone.svg';
import chat from '../../Assets/Images/Source/chat.svg';
import calendar from '../../Assets/Images/Source/calendar.svg';
import buy from '../../Assets/Images/Source/buy.svg';
import user1 from '../../Assets/Images/Source/user1.svg';
import user2 from '../../Assets/Images/Source/user2.svg';
import user3 from '../../Assets/Images/Source/user3.svg';
import user4 from '../../Assets/Images/Source/user4.svg';
import Comment from '../../Components/Comment/Comment';
import OrderForm from '../../Components/OrderForm/OrderForm';
import Footer from '../../Components/Footer/Footer';
import Points from '../../Components/Points/Points';
import { connect } from 'react-redux';
import { makeOrder, setIsOrdered } from '../../Redux/commonReducer';



const useStyles = makeStyles((theme) => ({
    main: {
        width: "50%",
        outline: "none"
    },
    sliderCarousel: {
        outline: "none",
        width: "40%",
        marginRight: "40px",
        height: '100%',
        position: "relative",
        '&:active': {
            border: "none",
            outline: "none",
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
    }
}));


const Main = (props) => {
    const countRef = useRef();

    const orderRef = useRef();
    
    const handleScrollToOrder = () => {
        orderRef.current.scrollIntoView(); 
    }

    const [size, setSize] = useState(window.outerWidth);

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    const comments = useMemo(()=>[
        {
            name: "Иван",
            text: "Нашел через интернет, пол года назад, очень близко живу и по этому обслуживают только у этих ребят - быстро и качественно, всегда пытаются отнестись с пониманием. Всегда оставляю им свою машину и не боюсь что с ней что-то станет. Сегодня забрал свой автомобиль после капитального ремонта и хоть это длилось две недели, но это виноват мой поставщик запчастей. Спасибо вам ребята.",
            img: user1
        },
        {
            name: "Егор",
            text: "Летом заехал на этот автосервис. Изначально подумал: центр - цены космос, потом подумал, что и ехать особо не знаю куда и решил починится у них. Такое хорошее отношение и качественное обслуживание редко встречается. Продиагностировали, заменили стойку, по двигателю отрегулировали клапана. Вывод такой: при необходимости поеду опять туда же!!",
            img: user2
        },
        {
            name: "Иван",
            text: "Хороший и отзывчивый персонал. Всегда все скажут по делу и объяснят понятно для любого человека, почему ту или иную запчасть надо менять. Обслуживаюсь пол года, нареканий нет. 5 месяцев назад делал капитальный ремонт на Ford Focus, пробег 9000 км, полет нормальный. Понравился подход и цена, не было возможности иногда подойти, высылали фото или видео отчет. Спасибо вам! Развития и хороших клиентов)",
            img: user3
        },
        {
            name: "Даниил",
            text: "Отличная мастерская!!! Недавно возникла проблема с авто, которая требовала оперативного решения. Объездил со своей проблемой чуть ли не пол города и всё бестолку. От товарища узнал за данное сто и сразу же поехал к ним. С порога встретили радушно, за оформление заказа взялся лично директор. Все мелочи и подробности заказа конспектировались, что очень порадовало. Обслуживание на высшем уровне. Огромная благодарность мастерам, которые не только быстро и качественно справились с заказом, но и выявили поломку оставленную без внимания сотрудниками другого СТО. Только плюс, всем советую!!",
            img: user4
        }
    ], []);

    const serviceOptions = useMemo(()=>[
        {
            id: 0,
            label: "Масло",
            img: oil, 
            info: "Мы Вам поможем подобрать правильное масло по техническим допускам именно Вашего автомобиля.Правильная и своевременная замена масла поможет не только существенно продлить срок службы двигателя, но и сэкономить на различных ремонтах."
        },
        {
            id: 1,
            label: "Шины",
            img: tire, 
            info: "Если Вы заметили что резину 'подъедает', при езде идет вибрация в руль либо Вы просто решили заменить резину на новую, приезжайте, мы всегда Вам поможем."
        },
        {
            id: 2,
            label: "Двигатель",
            img: engine, 
            info: "Диагностика и ремонт любых видов бензиновых двигателей внутреннего сгорания."
        },
        {
            id: 3,
            label: "Трансмиссия",
            img: transmission, 
            info: "Посторонний шум при работе трансмиссии? Появилась пробуксовка сцепления? Давно не меняли трансмиссионное масло? Скорее записывайтесь к нам на диагностику и обслуживание коробки переключения передач."
        },
        {
            id: 4,
            label: "Аккумулятор",
            img: battery, 
            info: "Благодаря своевременному уходу аккумулятора, Вы сможете использовать АКБ на протяжении 5-7 лет. Именно аккумулятор позволяет запустить двигатель. Наши специалисты вам помогут."
        },
        {
            id: 5,
            label: "Диагностика",
            img: diagnostic, 
            info: "Своевременная качественная диагностика ходовой части – залог безопасного долгосрочного функционирования. Замечая сложности в работе своего авто, слыша посторонние звуки – не стоит затягивать, обращайтесь к нам, мы сможем помочь Вам на высоком уровне профессионализма и качества!"
        }
    ], []);

    const [currentOption, setCurrentOption] = useState(serviceOptions[5]);

    const [isStartCounter, setIsStartCounter] = useState(false);

    function isRightYPosition(){
        if(countRef.current){
            if(window.scrollY >= countRef.current.getBoundingClientRect().top - 20){
                setIsStartCounter(true);
            }
        }
    }

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesPerRow: 1,
        initialSlide: 0,
        arrows: false,
        slidesToShow: size > 1279 ? 2 : 1,
        slidesToScroll: size > 1279 ? 2 : 1,
        focusOnSelect: false,
    }


    useEffect(() => {
        window.addEventListener('scroll', isRightYPosition);
        return () => {
            window.removeEventListener('scroll', isRightYPosition);
            setCurrentOption(null);
            props.setIsOrdered(false);
        }
    },[]);

    useLayoutEffect(() => {
        function updateSize(){
            setSize(window.outerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const material = useStyles();

    return(
        <div className={classes.main}>
            <Helmet
                htmlAttributes={{"lang": "en", "amp": undefined}}
                title='СТО на Бульваре Шевченко | Главная'
                meta={[{"name": "description", "content": "СТО на Бульваре Шевченко. Запорожье, ул. Независимой Украины 56. Пн - Пт: с 09:00 до 19:00   Сб: с 09:00 до 18:00. +38 (066) 197 39 04. +38 (098) 038 04 34"}]}/>
            <div className={classes.title}>
                <h1 data-aos="fade-right">АВТОСЕРВИС <br/> В ЗАПОРОЖЬЕ</h1>
                <p data-aos="fade" data-aos-duration="1500" data-aos-delay="800">Ваше авто в надежных руках</p>
                <Button onClick={handleScrollToOrder} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000">Записаться</Button>
            </div>
            <div className={classes.services}>
                <h2 data-aos="fade-up">НАШИ УСЛУГИ</h2>
                <div className={classes.options} data-aos="fade-up">
                    {serviceOptions.map((item, index) => (
                        <Button key={"but"+index} onClick={()=>{setCurrentOption(item)}}>
                            <div className={classes.butContainer + " " + (currentOption && currentOption.id === index && classes.activeOption)}>
                                {(currentOption && currentOption.id === index) && <div className={classes.activeBlueBlock}></div>}
                                {item.img}
                                <span>{item.label}</span>
                            </div>
                        </Button>
                    ))}
                </div>
                <div className={classes.serviceInfo}>
                    {currentOption &&
                    <div className={classes.selectedInfo} data-aos="zoom-out" data-aos-duration="800">
                        <img src={info}/>
                        <span>{currentOption.info}</span>
                    </div>}
                </div>
                <div className={classes.car}>
                    <div className={classes.carInteractive}>
                        <Button onClick={()=>{setCurrentOption(serviceOptions[2])}} className={classes.engineBut + " " + ((currentOption && currentOption.id == serviceOptions[2].id) && classes.activeCarBut)}>
                            {engine}
                        </Button>
                        <Button onClick={()=>{setCurrentOption(serviceOptions[0])}} className={classes.oilBut + " " + ((currentOption && currentOption.id == serviceOptions[0].id) && classes.activeCarBut)}>
                            {oil}
                        </Button>
                        <Button onClick={()=>{setCurrentOption(serviceOptions[4])}} className={classes.batteryBut + " " + ((currentOption && currentOption.id == serviceOptions[4].id) && classes.activeCarBut)}>
                            {battery}
                        </Button>
                        <Button onClick={()=>{setCurrentOption(serviceOptions[3])}} className={classes.transBut + " " + ((currentOption && currentOption.id == serviceOptions[3].id) && classes.activeCarBut)}>
                            {transmission}
                        </Button>
                        <Button onClick={()=>{setCurrentOption(serviceOptions[5])}} className={classes.diagBut + " " + ((currentOption && currentOption.id == serviceOptions[5].id) && classes.activeCarBut)}>
                            {diagnostic}
                        </Button>
                        <Button onClick={()=>{setCurrentOption(serviceOptions[1])}} className={classes.tireBut + " " + ((currentOption && currentOption.id == serviceOptions[1].id) && classes.activeCarBut)}>
                            {tire}
                        </Button>
                        <img src={car} className={classes.carImg} data-aos="fade-left" data-aos-duration="1000"/>
                    </div>
                    <img src={car_back} className={classes.carBack}/>
                </div>
                <NavLink to="/services" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Подробнее</NavLink>
            </div>
            <div className={classes.aboutus} data-aos="fade-down" data-aos-delay="100">
                <h2>О НАС</h2>
                <div className={classes.aboutInfo}>
                    <img src={about}/>
                    <div className={classes.aboutText}>
                        <h3>Доверьте ремонт Вашего Авто профессионалам!</h3>
                        <p>СТО в Запорожье сотни , но СТО на Бульваре Шевченко уже для многих оказалось единственным. Любой автовладелец сталкивается с такой бытовой необходимостью,
                            как ремонт авто. Становится вопрос выбора не только качественного автосервиса
                            в Запорожье, но и такой компании, где бы любой мастер действительно ручался за
                            свою работу. Создавая условия для вас, мы тщательно позаботились о том, чтобы
                            ваши требования и пожелания были полностью удовлетворены.
                        </p>
                        <p>
                            За последние годы наша компания постоянно развивается и растет.
                            Мы предоставляем широкий спектр услуг обеспечивающий прекрасный результат
                            и положительное влияние для вашей деятельности.
                        </p>
                    </div>
                </div>
                <div className={classes.points}>
                    <Points/>
                </div>
            </div>
            <div className={classes.statistic} ref={countRef}>
                <div className={classes.stat} data-aos="fade-down">
                    <CountUp end={98} start={isStartCounter} duration={3} suffix="%" redraw={isStartCounter}/>
                    <p>Довольных <br/> клиентов</p>
                </div>
                <div className={classes.stat} data-aos="fade-down">
                    <CountUp end={9} start={isStartCounter} duration={3}/>
                    <p>Отремонтированных <br/> авто в день</p>
                </div>
                <div className={classes.stat} data-aos="fade-down">
                    <CountUp end={986} start={isStartCounter} duration={3}/>
                    <p>Проведенных ТО <br/> в год</p>
                </div>
                <div className={classes.stat} data-aos="fade-down">
                    <div>
                        <CountUp end={10} start={isStartCounter} duration={3}/>
                        &nbsp;
                        &nbsp;
                        <span>100</span>
                    </div>
                    <p>Довольных <br/> клиентов</p>
                </div>
            </div>
            <div className={classes.sale}>
                <div className={classes.saleHeader} data-aos="zoom-in" data-aos-duration="800">
                    <h2>КАК ПОЛУЧИТЬ СКИДКУ</h2>
                    <p>-15%</p>
                    <span>НА ШИНОМОНТАЖ ИЛИ РАЗВАЛ-СХОЖДЕНИЕ</span>
                </div>
                <div className={classes.terms} data-aos="fade" data-aos-delay="100">
                    <div className={classes.termBlock}>
                        <img src={phone}/>
                        <span>Позвонить на СТО <br/> на Бульваре Шевченко.</span>
                    </div>
                    <div className={classes.termBlock}>
                        <img src={chat}/>
                        <span>Озвучить, что вы по<br/>акционному шиномонтажу <br/>либо развал - схождению.</span>
                    </div>
                    <div className={classes.termBlock}>
                        <img src={calendar}/>
                        <span>Записаться на акционный <br/>шиномонтаж либо на <br/>регулировку развал-схождения.</span>
                    </div>
                    <div className={classes.termBlock}>
                        <img src={buy}/>
                        <span>Приехать, переобуться <br/>либо отрегулировать углы <br/>установки колес <br/> и сэкономить деньги.</span>
                    </div>
                </div>
                <div className={classes.termMobile}>
                    <div className={classes.termLvl}>
                        <div className={classes.termBlock}>
                            <img src={phone}/>
                            <span>Позвонить на СТО <br/> на Бульваре Шевченко.</span>
                        </div>
                        <div className={classes.termBlock}>
                            <img src={chat}/>
                            <span>Озвучить, что вы по<br/>акционному шиномонтажу <br/>либо развал - схождению.</span>
                        </div>
                    </div>
                    <div className={classes.termLvl}>
                        <div className={classes.termBlock}>
                            <img src={calendar}/>
                            <span>Записаться на акционный <br/>шиномонтаж либо на <br/>регулировку развал-схождения.</span>
                        </div>
                        <div className={classes.termBlock}>
                            <img src={buy}/>
                            <span>Приехать, переобуться <br/>либо отрегулировать углы <br/>установки колес <br/>  сэкономить деньги.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.comments} data-aos="fade">
                <h2>ОТЗЫВЫ</h2>
                <Slider className={classes.slider} dotsClass={classes.dotsSlider} classes={material} {...sliderSettings}>
                    {comments.map((item, index) => <Comment key={"comment" + index} item={item}/>)}
                </Slider>
            </div>
            <div className={classes.order} data-aos="fade-down" id="order" ref={orderRef}>
                <h2>ЗАПИСАТЬСЯ НА СЕРВИС</h2>
                {props.isOrdered ? 
                <div className={classes.done} data-aos="fade" data-aos-duration={300}>
                    <h2>Ваша запись принята. <br/>Спасибо, что доверяете нам!</h2>
                    <p>Мы перезвоним Вам в ближайшее время для уточнения деталей и подтверждения записи</p>
                </div>
                : <OrderForm/>}
            </div>
            <h2 className={classes.contactHeader}>КОНТАКТЫ</h2>
            <Footer map={true} contacts={size > 1279 ? true : false}/>
        </div>
    );
}

let mapStateToProps = (state) => ({
    isFetching: state.common.isFetching,
    isOrdered: state.common.isOrdered
});

export default connect(mapStateToProps, {
    makeOrder, setIsOrdered
})(Main);