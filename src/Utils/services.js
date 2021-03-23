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
        text: 'Диагностика и ремонт двигателей',
        headerPoints: "",
        points:[
            "Повышеный расход моторного масла от метки “max” до метки “min” на щупе за 1000 км пробега.",
            "Слишком дымный выхлоп из выхлопной трубы.  Цвет дыма тоже является важным признаком и указывает на возникшие в двигателе неисправности.",
            "Нагар на свечах зажигания. Если нагар светло-серого цвета- система работает нормально. Все остальные цвета нагара на свечах зажигания (черный, белый или красный) являются сигналом неисправности двигателя авто.",
            "Неравномерность работы двигателя на холостом ходу говорит о возможной неисправности датчиков, например, датчика холостого хода. В таком случае нужна диагностика двигателя.",
            "Слишком высокий расход бензина.",
            "Ощутимое падение мощности двигателя.",
            "Посторонние шумы и стуки в двигателе. Любые появившиеся глухие или звонкие звуки сигнализируют о неполадках в узлах и агрегатах.",
            "Падение давления масла. Бортовая система автомобиля сигнализирует об этом загорающейся лампочкой на панели приборов.",
            "Постоянный перегрев двигателя. Если двигатель начал часто перегреваться без особых причин, например, даже осенью."
        ],
        
    },
    {
        path: "/services/wheel-alignment",
        img: razval_header,
        icon: tire,
        text: 'Развал схождение',
        points: []
    },
    {
        path: "/services/car-chassis",
        img: diag2_header,
        icon: diagnostic,
        text: 'Диагностика и ремонт ходовой части',
        points: []
    },
    {
        path: "/services/tire-fitting",
        img: montage,
        icon: tire,
        text: 'Шиномонтаж',
        points: []
    },
    {
        path: "/services/transmission",
        img: transmission_header,
        icon: transmission,
        text: 'Ремонт механических трансмиссий',
        points: []
    },
    {
        path: "/services/electronics",
        img: electro,
        icon: battery,
        text: 'Ремонт электропроводки',
        points: []
    },
    {
        path: "/services/brakes",
        img: tormoza,
        icon: tire,
        text: 'Ремонт тормозной системы',
        points: []
    }
]