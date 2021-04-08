import React, { useEffect } from 'react';
import classes from './Preloader.module.css';
import preloader from '../../Assets/Images/Icons/preloader.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Preloader = (props) => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return(
        <div className={classes.main} data-aos="fade" data-aos-duration={300}>
            <img src={preloader} data-aos="zoom-in" data-aos-duration={200}/>
        </div>
    );
}

export default Preloader;