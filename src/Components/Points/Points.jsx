import React from 'react';
import classes from './Points.module.css';

import navigation from '../../Assets/Images/Source/navigation.svg';
import maintenance from '../../Assets/Images/Source/maintenance.svg';
import mechanic from '../../Assets/Images/Source/mechanic.svg';
import disk from '../../Assets/Images/Source/disk.svg';
import time from '../../Assets/Images/Source/time.svg';
import call from '../../Assets/Images/Source/call.svg';

const Points = (props) => {
    return(
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
            <div className={classes.pointsLineMobile}>
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
            </div>
            <div className={classes.pointsLineMobile}>
                <div className={classes.pointBlock}>
                    <img src={mechanic}/>
                    <div className={classes.pointBlockText}>
                        <h4>Опыт</h4>
                        <span>Каждый наш мастер обладает более чем десятилетним стажем</span>
                    </div>
                </div>
                <div className={classes.pointBlock}>
                    <img src={disk}/>
                    <div className={classes.pointBlockText}>
                        <h4>Качество</h4>
                        <span>Грамотный подбор масел и автозапчастей для любых автомобилей</span>
                    </div>
                </div>
            </div>
            <div className={classes.pointsLineMobile}>
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

    );
}

export default Points;