import React, { useEffect, useRef, useState } from 'react';
import classes from './Main.module.css';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import CountUp from 'react-countup';
import Slider from 'infinite-react-carousel';

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
import navigation from '../../Assets/Images/Source/navigation.svg';
import maintenance from '../../Assets/Images/Source/maintenance.svg';
import mechanic from '../../Assets/Images/Source/mechanic.svg';
import disk from '../../Assets/Images/Source/disk.svg';
import time from '../../Assets/Images/Source/time.svg';
import call from '../../Assets/Images/Source/call.svg';
import phone from '../../Assets/Images/Source/phone.svg';
import chat from '../../Assets/Images/Source/chat.svg';
import calendar from '../../Assets/Images/Source/calendar.svg';
import buy from '../../Assets/Images/Source/buy.svg';
import user1 from '../../Assets/Images/Source/user1.svg';
import user2 from '../../Assets/Images/Source/user2.svg';
import Comment from '../../Components/Comment/Comment';

const Main = (props) => {
    const [currentOption, setCurrentOption] = useState(null);
    const countRef = useRef();

    const comments = [
        {
            name: "Иван",
            text: "Нашел через интернет, пол года назад, очень близко живу и по этому обслуживают только у этих ребят - быстро и качественно, всегда пытаются отнестись с пониманием. Всегда оставляю им свою машину и не боюсь что с ней что-то станет. Сегодня забрал свой автомобиль после капитального ремонта и хоть это длилось две недели, но это виноват мой поставщик запчастей. Спасибо вам ребята.",
            img: user1
        },
        {
            name: "Егор",
            text: "Летом заехал на этот автосервис. Изначально подумал: центр - цены космос, потом подумал, что и ехать особо не знаю куда и решил починится у них. Такое хорошее отношение и качественное обслуживание редко встречается. Продиагностировали, заменили стойку, отрегулировали фары. Вывод такой: при необходимости поеду опять туда же!!",
            img: user2
        },
        {
            name: "Иван",
            text: "Нашел через интернет, пол года назад, очень близко живу и по этому обслуживают только у этих ребят - быстро и качественно, всегда пытаются отнестись с пониманием. Всегда оставляю им свою машину и не боюсь что с ней что-то станет. Сегодня забрал свой автомобиль после капитального ремонта и хоть это длилось две недели, но это виноват мой поставщик запчастей. Спасибо вам ребята.",
            img: user1
        },
        {
            name: "Егор",
            text: "Летом заехал на этот автосервис. Изначально подумал: центр - цены космос, потом подумал, что и ехать особо не знаю куда и решил починится у них. Такое хорошее отношение и качественное обслуживание редко встречается. Продиагностировали, заменили стойку, отрегулировали фары. Вывод такой: при необходимости поеду опять туда же!!",
            img: user2
        }
    ];

    const serviceOptions = [
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
    ];

    const [isStartCounter, setIsStartCounter] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY >= countRef.current.getBoundingClientRect().top - 20){
                setIsStartCounter(true);
            }
        })
    },[]);

    return(
        <div className={classes.main}>
            <div className={classes.title}>
                <h1>АВТОСЕРВИС <br/> В ЗАПОРОЖЬЕ</h1>
                <p>Ваше авто в надежных руках</p>
                <Button>Записаться</Button>
            </div>
            <div className={classes.services}>
                <h2>НАШИ УСЛУГИ</h2>
                <div className={classes.options}>
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
                    <div className={classes.selectedInfo}>
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
                        <img src={car} className={classes.carImg}/>
                    </div>
                    <img src={car_back} className={classes.carBack}/>
                </div>
                <NavLink to="/services">Подробнее</NavLink>
            </div>
            <div className={classes.aboutus}>
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
                    <div className={classes.pointsLine}>
                        <div className={classes.pointBlock}>
                            <img src={navigation}/>
                            <div className={classes.pointBlockText}>
                                <h4>Расположение</h4>
                                <span>Мы находимся в самом центре города</span>
                            </div>
                        </div>
                        <div className={classes.pointBlock}>
                            <img src={maintenance}/>
                            <div className={classes.pointBlockText}>
                                <h4>Гарантия</h4>
                                <span>Мы предоставляем гарантию на все проведенные нами работы</span>
                            </div>
                        </div>
                        <div className={classes.pointBlock}>
                            <img src={mechanic}/>
                            <div className={classes.pointBlockText}>
                                <h4>Опыт</h4>
                                <span>Каждый наш мастер обладает более чем десятилетним стажем</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.pointsLine}>
                        <div className={classes.pointBlock}>
                            <img src={disk}/>
                            <div className={classes.pointBlockText}>
                                <h4>Качество</h4>
                                <span>Грамотный подбор масел и автозапчастей для любых автомобилей</span>
                            </div>
                        </div>
                        <div className={classes.pointBlock}>
                            <img src={time}/>
                            <div className={classes.pointBlockText}>
                                <h4>Сроки</h4>
                                <span>В 90% случаев мы выполняем ремонт или сервис авто в тот же день</span>
                            </div>
                        </div>
                        <div className={classes.pointBlock}>
                            <img src={call}/>
                            <div className={classes.pointBlockText}>
                                <h4>Всегда на связи</h4>
                                <span>Вы можете быть всегда на связи с закрепленным за Вами мастером</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.statistic} ref={countRef}>
                <div className={classes.stat}>
                    <CountUp end={98} start={isStartCounter} duration={3} suffix="%" redraw={isStartCounter}/>
                    <p>Довольных <br/> клиентов</p>
                </div>
                <div className={classes.stat}>
                    <CountUp end={9} start={isStartCounter} duration={3}/>
                    <p>Отремонтированных <br/> авто в день</p>
                </div>
                <div className={classes.stat}>
                    <CountUp end={986} start={isStartCounter} duration={3}/>
                    <p>Проведенных ТО <br/> в год</p>
                </div>
                <div className={classes.stat}>
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
                <div className={classes.saleHeader}>
                    <h2>КАК ПОЛУЧИТЬ СКИДКУ</h2>
                    <p>-15%</p>
                    <span>НА ШИНОМОНТАЖ ИЛИ РАЗВАЛ-СХОЖДЕНИЕ</span>
                </div>
                <div className={classes.terms}>
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
                        <span>Приехать, переобуться <br/>либо отрегулировать углы <br/>установки колес <br/>  сэкономить деньги.</span>
                    </div>
                </div>
            </div>
            <div className={classes.comments}>
                <h2>Отзывы</h2>
                <Slider className={classes.slider} dots infinite slidesToShow={2} autoplay arrows={false} swipe >
                    {comments.map((item, index) => <Comment key={"comment" + index} item={item}/>)}
                </Slider>
            </div>
        </div>
    );
}

export default Main;