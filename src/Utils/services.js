import diagnostic_header from '../Assets/Images/Source/services/diagnonstic_header.jpg';
import razval_header from '../Assets/Images/Source/services/razval_header.jpg';
import diag2_header from '../Assets/Images/Source/services/diag2_header.jpg';
import montage from '../Assets/Images/Source/services/montage.jpg';
import transmission_header from '../Assets/Images/Source/services/transmission.jpg';
import electro from '../Assets/Images/Source/services/electro.jpg';
import tormoza from '../Assets/Images/Source/services/tormoza.jpg';
import { diagnostic } from '../Assets/Images/Icons/diagnostic';
import { oil } from '../Assets/Images/Icons/oil';
import { battery } from '../Assets/Images/Icons/battery';
import { engine } from '../Assets/Images/Icons/engine';
import { tire } from '../Assets/Images/Icons/tire';
import { transmission } from '../Assets/Images/Icons/transmisson';


export const services = [
    {
        path: "/services/engine",
        img: diagnostic_header,
        icon: engine,
        text: 'Диагностика и ремонт двигателей'
    },
    {
        path: "/services/wheel-alignment",
        img: razval_header,
        icon: tire,
        text: 'Развал схождение'
    },
    {
        path: "/services/car-chassis",
        img: diag2_header,
        icon: diagnostic,
        text: 'Диагностика и ремонт ходовой части'
    },
    {
        path: "/services/tire-fitting",
        img: montage,
        icon: tire,
        text: 'Шиномонтаж'
    },
    {
        path: "/services/transmission",
        img: transmission_header,
        icon: transmission,
        text: 'Ремонт механических трансмиссий'
    },
    {
        path: "/services/electronics",
        img: electro,
        icon: battery,
        text: 'Ремонт электропроводки'
    },
    {
        path: "/services/brakes",
        img: tormoza,
        icon: tire,
        text: 'Ремонт тормозной системы'
    }
]