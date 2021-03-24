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




//ENGINE

//GEELY
import geely1 from '../Assets/Images/Source/services/Engine/Geely/2.jpg';
import geely2 from '../Assets/Images/Source/services/Engine/Geely/3.jpg';
import geely3 from '../Assets/Images/Source/services/Engine/Geely/4.jpg';
import geely4 from '../Assets/Images/Source/services/Engine/Geely/5.jpg';
import geely5 from '../Assets/Images/Source/services/Engine/Geely/6.jpg';
import geely6 from '../Assets/Images/Source/services/Engine/Geely/7.jpg';

//MERC
import merc1 from '../Assets/Images/Source/services/Engine/Merc/2.jpg';
import merc2 from '../Assets/Images/Source/services/Engine/Merc/3.jpg';
import merc3 from '../Assets/Images/Source/services/Engine/Merc/4.jpg';
import merc4 from '../Assets/Images/Source/services/Engine/Merc/5.jpg';


import cal1 from '../Assets/Images/Source/services/Engine/2.jpg';
import cal2 from '../Assets/Images/Source/services/Engine/3.jpg';
import cal3 from '../Assets/Images/Source/services/Engine/4.jpg';
import cal4 from '../Assets/Images/Source/services/Engine/5.jpg';
import cal5 from '../Assets/Images/Source/services/Engine/6.jpg';
import cal6 from '../Assets/Images/Source/services/Engine/7.jpg';
import cal7 from '../Assets/Images/Source/services/Engine/8.jpg';
import cal8 from '../Assets/Images/Source/services/Engine/9.jpg';
import cal9 from '../Assets/Images/Source/services/Engine/10.jpg';
import cal10 from '../Assets/Images/Source/services/Engine/11.jpg';
import cal11 from '../Assets/Images/Source/services/Engine/12.jpg';
import cal12 from '../Assets/Images/Source/services/Engine/13.jpg';


export const services = [
    {
        path: "/services/engine",
        img: diagnostic_header,
        icon: engine,
        text: 'Диагностика и ремонт двигателей',
        headerPoints: "Основные признаки необходимости ремонта двигателя",
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
        headerFactor: "Необходимость произвести капитальный ремонт двигателя может быть вызвана действием перечисленных ниже факторов:",
        factors:[
            "Использование некачественного масла;",
            "Несвоевременная замена масла и/или масляного фильтра;",
            "Плохое состояние топливного и/или воздушного фильтров;",
            "Несвоевременно устраненные неисправности двигателя или его неправильная регулировка;",
            "Максимальные нагрузки (эксплуатация автомобиля с непрогретым двигателем в зимний период)."
        ],
        dop: [
            "Диагностика двигателя на станции техобслуживания СТО на Бульваре Шевченко проводится механическим путем и при помощи компьютерного оборудования. Проводятся контрольные измерения потребления топлива, анализ состава масла двигателя, контролируются обороты и мощность работы двигателя на всех режимах, анализируется шум и многое другое. В зависимости от полученных результатов принимается решение о необходимом ремонте двигателя и замене вышедших из строя деталей.",
            "В зависимости от доступности заменяемых узлов двигатель можно быстро демонтировать и произвести необходимый ремонт.",
            "Обращайтесь к нам. Мы произведем текущий или капитальный ремонт двигателя.",
            "Диагностику и ремонт двигателей в Запорожье,  осуществляет СТО на Бульваре Шевченко"
        ],
        works: [
            {
                title: "Замена прокладки и шлифовка плоскости ГБЦ",
                text: "Замена прокладки и шлифовка плоскости ГБЦ Gelly GC5.",
                imgs: [geely1, geely2, geely3, geely4, geely5, geely6]
            },
            {
                title: "Замена прокладки ГБЦ и сварка рубашки охлаждения",
                text: "Замена прокладки ГБЦ и сварка рубашки охлаждения на Mercedes C Class.",
                imgs: [merc1, merc2, merc3, merc4]
            },
        ]
    },
    {
        path: "/services/wheel-alignment",
        img: razval_header,
        icon: tire,
        text: 'Развал схождение',
        points: [],
        headerFactor: "",
        factors: [],
        dop: [],
        works: []
    },
    {
        path: "/services/car-chassis",
        img: diag2_header,
        icon: diagnostic,
        text: 'Диагностика и ремонт ходовой части',
        points: [],
        headerFactor: "",
        factors: [],
        dop: [],
        works: []
    },
    {
        path: "/services/tire-fitting",
        img: montage,
        icon: tire,
        text: 'Шиномонтаж',
        points: [],
        headerFactor: "",
        factors: [],
        dop: [],
        works: []
    },
    {
        path: "/services/transmission",
        img: transmission_header,
        icon: transmission,
        text: 'Ремонт механических трансмиссий',
        points: [],
        headerFactor: "",
        factors: [],
        dop: []
    },
    {
        path: "/services/electronics",
        img: electro,
        icon: battery,
        text: 'Ремонт электропроводки',
        points: [],
        headerFactor: "",
        factors: [],
        dop: [],
        works: []
    },
    {
        path: "/services/brakes",
        img: tormoza,
        icon: tire,
        text: 'Ремонт тормозной системы',
        points: [],
        headerFactor: "",
        factors: [],
        dop: [],
        works: []
    }
]