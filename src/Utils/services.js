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

//LEGACY
import cal1 from '../Assets/Images/Source/services/Engine/Legacy/2.jpg';
import cal2 from '../Assets/Images/Source/services/Engine/Legacy/3.jpg';
import cal3 from '../Assets/Images/Source/services/Engine/Legacy/4.jpg';
import cal4 from '../Assets/Images/Source/services/Engine/Legacy/5.jpg';
import cal5 from '../Assets/Images/Source/services/Engine/Legacy/6.jpg';
import cal6 from '../Assets/Images/Source/services/Engine/Legacy/7.jpg';
import cal7 from '../Assets/Images/Source/services/Engine/Legacy/8.jpg';
import cal8 from '../Assets/Images/Source/services/Engine/Legacy/9.jpg';
import cal9 from '../Assets/Images/Source/services/Engine/Legacy/10.jpg';
import cal10 from '../Assets/Images/Source/services/Engine/Legacy/11.jpg';
import cal11 from '../Assets/Images/Source/services/Engine/Legacy/12.jpg';
import cal12 from '../Assets/Images/Source/services/Engine/Legacy/13.jpg';

//PRIUS
import prius1 from '../Assets/Images/Source/services/Engine/Prius/2.jpg';
import prius2 from '../Assets/Images/Source/services/Engine/Prius/3.jpg';
import prius3 from '../Assets/Images/Source/services/Engine/Prius/4.jpg';
import prius4 from '../Assets/Images/Source/services/Engine/Prius/5.jpg';
import prius5 from '../Assets/Images/Source/services/Engine/Prius/6.jpg';
import prius6 from '../Assets/Images/Source/services/Engine/Prius/7.jpg';
import prius7 from '../Assets/Images/Source/services/Engine/Prius/8.jpg';
import prius8 from '../Assets/Images/Source/services/Engine/Prius/9.jpg';
import prius9 from '../Assets/Images/Source/services/Engine/Prius/10.jpg';
import prius10 from '../Assets/Images/Source/services/Engine/Prius/11.jpg';


//CX7
import cx1 from '../Assets/Images/Source/services/Engine/Cx7/2.jpg';
import cx2 from '../Assets/Images/Source/services/Engine/Cx7/3.jpg';
import cx3 from '../Assets/Images/Source/services/Engine/Cx7/4.jpg';
import cx4 from '../Assets/Images/Source/services/Engine/Cx7/5.jpg';

//OPEL
import opel1 from '../Assets/Images/Source/services/Engine/Opel/2.jpg';
import opel2 from '../Assets/Images/Source/services/Engine/Opel/3.jpg';
import opel3 from '../Assets/Images/Source/services/Engine/Opel/4.jpg';
import opel4 from '../Assets/Images/Source/services/Engine/Opel/5.jpg';
import opel5 from '../Assets/Images/Source/services/Engine/Opel/6.jpg';


//FOCUS
import focus1 from '../Assets/Images/Source/services/Engine/Focus/2.jpg';
import focus2 from '../Assets/Images/Source/services/Engine/Focus/3.jpg';
import focus3 from '../Assets/Images/Source/services/Engine/Focus/4.jpg';
import focus4 from '../Assets/Images/Source/services/Engine/Focus/5.jpg';
import focus5 from '../Assets/Images/Source/services/Engine/Focus/6.jpg';
import focus6 from '../Assets/Images/Source/services/Engine/Focus/7.jpg';
import focus7 from '../Assets/Images/Source/services/Engine/Focus/8.jpg';
import focus8 from '../Assets/Images/Source/services/Engine/Focus/9.jpg';
import focus9 from '../Assets/Images/Source/services/Engine/Focus/10.jpg';

//FORESTER
import forester1 from '../Assets/Images/Source/services/Engine/Forester/2.jpg';
import forester2 from '../Assets/Images/Source/services/Engine/Forester/3.jpg';
import forester3 from '../Assets/Images/Source/services/Engine/Forester/4.jpg';
import forester4 from '../Assets/Images/Source/services/Engine/Forester/5.jpg';
import forester5 from '../Assets/Images/Source/services/Engine/Forester/6.jpg';
import forester6 from '../Assets/Images/Source/services/Engine/Forester/7.jpg';
import forester7 from '../Assets/Images/Source/services/Engine/Forester/8.jpg';
import forester8 from '../Assets/Images/Source/services/Engine/Forester/9.jpg';
import forester9 from '../Assets/Images/Source/services/Engine/Forester/10.jpg';
import forester10 from '../Assets/Images/Source/services/Engine/Forester/11.jpg';

//DUSTER
import duster1 from '../Assets/Images/Source/services/Engine/Duster/2.jpg';
import duster2 from '../Assets/Images/Source/services/Engine/Duster/3.jpg';
import duster3 from '../Assets/Images/Source/services/Engine/Duster/4.jpg';
import duster4 from '../Assets/Images/Source/services/Engine/Duster/5.jpg';
import duster5 from '../Assets/Images/Source/services/Engine/Duster/6.jpg';
import duster6 from '../Assets/Images/Source/services/Engine/Duster/7.jpg';
import duster7 from '../Assets/Images/Source/services/Engine/Duster/8.jpg';

export const services = [
    {
        path: "/services/engine",
        img: diagnostic_header,
        icon: engine,
        text: 'Диагностика и ремонт двигателей',
        headerPoints: "Основные признаки необходимости ремонта двигателя:",
        points:[
            "Повышеный расход моторного масла от метки “max” до метки “min” на щупе за 1000 км пробега;",
            "Слишком дымный выхлоп из выхлопной трубы.  Цвет дыма тоже является важным признаком и указывает на возникшие в двигателе неисправности;",
            "Нагар на свечах зажигания. Если нагар светло-серого цвета- система работает нормально. Все остальные цвета нагара на свечах зажигания (черный, белый или красный) являются сигналом неисправности двигателя авто;",
            "Неравномерность работы двигателя на холостом ходу говорит о возможной неисправности датчиков, например, датчика холостого хода. В таком случае нужна диагностика двигателя;",
            "Слишком высокий расход бензина;",
            "Ощутимое падение мощности двигателя;",
            "Посторонние шумы и стуки в двигателе. Любые появившиеся глухие или звонкие звуки сигнализируют о неполадках в узлах и агрегатах;",
            "Падение давления масла. Бортовая система автомобиля сигнализирует об этом загорающейся лампочкой на панели приборов;",
            "Постоянный перегрев двигателя. Если двигатель начал часто перегреваться без особых причин, например, даже осенью;"
        ],
        headerFactor: "Необходимость произвести капитальный ремонт двигателя может быть вызвана действием перечисленных ниже факторов:",
        factors:[
            "Использование некачественного масла;",
            "Несвоевременная замена масла и/или масляного фильтра;",
            "Плохое состояние топливного и/или воздушного фильтров;",
            "Несвоевременно устраненные неисправности двигателя или его неправильная регулировка;",
            "Максимальные нагрузки (эксплуатация автомобиля с непрогретым двигателем в зимний период);"
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
            {
                title: "Замена коленвала на Subaru Legacy",
                text: "Замена коленвала на автомобиле Subaru Legacy. 'Масляное голодание' привело к тому, что провернуло вкладыш коленвала. После диагностики коленвала, была выявлена трещина. Произведена замена коленвала на оригинальный, замена полного комплекта прокладок двигателя, шлифовка плоскостей ГБЦ, шлифовка плоскости блока. Поршневая система и клапана в удовлетворительном состоянии.",
                imgs: [cal1, cal2, cal3, cal4, cal5, cal6, cal7, cal8, cal9, cal10, cal11, cal12]
            },
            {
                title: "Замена поршневых колец на автомобиле Toyota Prius.",
                text: "Замена поршневых колец на автомобиле Toyota Prius. После замера цилиндров, была возможность заменить поршневые кольца, не растачивая блок и не устанавливая новые поршни ремонтного размера. Так же, были заменены сальники клапанов, произведена шлифовка ГБЦ.",
                imgs: [prius1, prius2, prius3, prius4, prius5, prius6, prius7, prius8, prius9, prius10]
            },
            {
                title: "Замена цепи cx7",
                text: "Замена комплекта ГРМ Mazda CX7.",
                imgs: [cx1, cx2, cx3, cx4]
            },
            {
                title: "Капитальный ремонт двигателя Opel Omega",
                text: "Капитальный ремонт двигателя Opel Omega B 2.0. Двигатель 'брал' масло. После замеров и диагностики двигателя было принято решение произвести капитальный ремонт двигателя. Заменена поршневая группа (первый ремонт) Kolbenschmidt, вкладыши коренные и шатунные Kolbenschmidt, комплект прокладок двигателя, направляющие втулки клапанов и клапана оригинал. Если у Вас возникли любые вопросы по двигателю , обращайтесь к нам и мы всегда будем рады Вам помочь в консультации, диагностике и ремонте Вашего автомобиля.",
                imgs: [opel1, opel2, opel3, opel4, opel5]
            },
            {
                title: "Капитальный ремонт двигателя Ford Focus 2",
                text: "Капитальный ремонт двигателя Ford Focus 2. Поршневая группа ремонтная Nural, вкладыши коренные и шатунные Kolbenschmidt, полный комплект прокладок, и остальное, что требуется при ремонте двигателя согласно техническим условиям. Причиной капитального ремонта стало откалывание свечи зажигания и в следствии - деформация поршня. Проверяйте вовремя свечи и заменяйте их по регламенту. А мы всегда будем рады Вам помочь в консультации, диагностике и ремонте Вашего автомобиля.",
                imgs: [focus1, focus2, focus3, focus4, focus5, focus6, focus7, focus8, focus9]
            },
            {
                title: "Капитальныий ремонт оппозитного двигателя Subaru Forester",
                text: "Капитальныий ремонт оппозитного двигателя Subaru Forester. Клиент приехал с жалобой - двигатель ест масло 1л на 1000 км. Было принято решение разбора двигателя. После снятия ГБЦ был произведен замер цилиндров на износ. Вердикт: замена поршневой системы. По головке блока цилиндров были произведены следующие работы: восстановление рабочих фасок седел клапанов, восстановление направляющих втулок клапанов способом «колайн», опрессовка и шлифовка ГБЦ. По блоку цилиндров были произведены следующие работы: рассточка на первый ремонт цилиндров, шлифовка плоскости блока, проверка биения коленвала. Так как блок алюминиевый при большом пробеге может вести постель коленвала. После данной проверки постель и  коленвал оказались в хорошем состоянии.",
                imgs: [forester1, forester2, forester3, forester4, forester5, forester6, forester7, forester8, forester9, forester10]
            },
            {
                title: "Ремонт головки  блока цилиндров и замена поршня Renault Duster",
                text: "Ремонт головки  блока цилиндров и замена поршня Renault Duster 2013. Предыстория данной проблемы такова: клиент ранее менял ремень ГРМ, выставили неправильно метки на шестернях без специальных фиксаторов, следовательно ремень ГРМ растянулся со временем и погнуло клапана. Машину притянули, сняли ГБЦ, увидели 4 погнутых клапана и 1 клапан достал до поршня (что видно дальше на фото). Был произведен ремонт ГБЦ, заменено 8 впускных клапанов и 1 поршень.",
                imgs: [duster1, duster2, duster3, duster4, duster5, duster6, duster7]
            }
        ]
    },
    {
        path: "/services/wheel-alignment",
        img: razval_header,
        icon: tire,
        text: 'Развал схождение',
        headerPoints: "СТО на Бульваре Шевченко рекомендует проверять углы установки колес:",
        points: [
            "каждые 20000-25000 км пробега;",
            "после ремонта подвески или рулевого управления;",
            "после кузовных работ;",
            "после сезонной замены шин;",
            "при уводе автомобиля от прямолинейного движения;",
            "если изменилось положение руля при прямолинейном движении;",
            "если автомобиль рыскает по дороге;",
            "если автомобиль плохо управляется в повороте;",
            "если наблюдается повышенный или неравномерный износ шин;"
        ],
        headerFactor: "",
        factors: [],
        dop: [
            "Такая работа требует высокой точности, поэтому выполняется на специальном оборудовании на профессиональных автосервисах. Определить углы и правильно выставить развал-схождение можно при условии применения компьютерной техники.",
            "Развал – это угол, образуемый плоскостью вращения колеса и перпендикуляром к дороге. Нулевой угол имеет колесо, которое стоит вертикально.",
            "Угол продольного наклона шкворня, или кастер, отвечает за стабильную управляемость и предотвращает уход авто в сторону. Неправильный кастер ведет к затруднённому вращению руля. Нарушить его возможно при ударе, вследствие которого деформируется нижний рычаг подвески или балка.",
            "С учётом качества дорожного покрытия в Украине рекомендуется проверять развал-схождение иномарок через 30 тыс. км пробега и отечественных машин – через 15 тыс. км. Нарушить углы можно при попадании колеса в выбоину на дороге, при ударе о бордюр, при которых деформируется колёсный диск.",
            "Развал-схождение на СТО на Бульваре Шевченко производится на немецком оборудовании Beissbarth."
        ],
        works: []
    },
    {
        path: "/services/car-chassis",
        img: diag2_header,
        icon: diagnostic,
        text: 'Диагностика и ремонт ходовой части',
        headerPoints: "Признаки того, что Вам требуется ремонт ходовой:",
        points: [
            "Раскачка машины при торможениях или прохождении поворотов на скорости;",
            "Увод машины в сторону при движении по прямой;",
            "Пробивание подвески даже при не очень значительных неровностях;",
            "Различного рода вибрации при езде;",
            "Повышенный или неравномерный износ шин;",
            "Посторонние звуки и стуки в подвеске при движении;"
        ],
        headerFactor: "",
        factors: [],
        dop: [
            "Ремонт ходовой части автомобиля – ответственная задача каждого автомобилиста, являющиеся залогом безопасности пассажиров и транспортного средства.",
            "Диагностика ходовой части автомобиля, выполняемая  специалистами СТО на Бульваре Шевченко — обеспечит выявление дефектов авто, влияющих на движение авто. Следует отметить, что для максимальной долговечности и безопасности езды на автомобиле нужно не реже, чем через каждые 10-15 тыс пробега проводить диагностику ходовой части автомобиля. При необходимости следует проводить ремонт ходовой, это обеспечит большую долговечность исправных частей и не заставит Вас волноваться при прохождении крутых поворотов.",
            "Весь спектр наших услуг, выполняется первоклассными профессионалами с колоссальным опытом. Ремонт ходовой в Запорожье, от СТО на Бульваре Шевченко отличается отменными характеристиками высочайшего качества.",
            "Своевременная качественная диагностика ходовой – залог безопасного долгосрочного функционирования. Замечая сложности в работе своего авто, слыша посторонние звуки – не стоит затягивать, обращайтесь к истинным профессионалам, мы сможем помочь Вам на высочайших уровнях профессионализма и качества!"
        ],
        works: []
    },
    {
        path: "/services/tire-fitting",
        img: montage,
        icon: tire,
        text: 'Шиномонтаж',
        headerPoints: "Услуги нашего шиномонтажа:",
        points: [
            "Шиномонтаж колес;",
            "Ремонт проколов и порезов;",
            "Балансировка колес;",
            "Замена шин;"
        ],
        headerFactor: "",
        factors: [],
        dop: [
            "Автосервис на Бульваре Шевченко готов предложить Вам широкий спектр услуг по шиномонтажу, ремонту и балансировке ваших колес и колесных дисков — если Вы цените свое время и для Вас важен качественный сервис и профессионализм специалистов которые будут работать с Вашим автомобилем – выбирайте услуги нашего шиномонтажа!",
            "На сегодняшний день наш шиномонтаж оснащен всем необходимым немецким оборудованием и профессиональными инструментами для выполнения работ",
            "Также, для вашего удобства, мы предлагаем сезонное хранение резины на нашем СТО."
        ],
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
        dop: [],
        works: []
    },
    {
        path: "/services/electronics",
        img: electro,
        icon: battery,
        text: 'Ремонт электропроводки',
        headerPoints: "Если Вы обнаружили у автомобиля такие симптомы:",
        points: [
            "Загорелась лампочка ABS;",
            "Горит CHECK ENGINE;",
            "Двигатель плохо заводится;",
            "На холодную или на горячую машина не заводится совсем;",
            "Двигатель заводится и глохнет;",
            "Горят ошибки на панели автомобиля;",
            "Горит датчик давления;",
            "Горит лампа температуры;",
            "Высвечивается ошибка тормозной системы;",
            "Слишком часто моргает указатель поворота;",
            "Нет освещения;",
            "Не работает система отопления, люк, стеклоподъёмники;",
            "Горит индикатор разряда аккумулятора;",
            "С ошибками срабатывает сигнализация;",
            "Не заводится двигатель;"
        ],
        headerFactor: "",
        factors: [],
        dop: [
            "Любые дефекты могут привести к сбоям в двигателе и другим неприятностям, поэтому ремонт автоэлектрики нельзя откладывать в долгий ящик. Автомобиль, как и человек, нуждается в уходе. Хороший автомобилист всегда заботится о здоровье железного друга, поэтому диагностика электрики должна проводиться систематически для предотвращения более сложных поломок.",
            "Транспорт имеет множество узлов, зависящих от электрики: зажигание, система впрыска, стартеры, освещение, генераторы и прочие. И каждый является важным элементом в работоспособности всей автомобильной системы.",
            "Проведение самостоятельного ремонта транспортного средства чревато большими рисками. Возможно, несколько десятилетий назад такие действия были оправданы, однако тогда устройство системы было намного проще. Современная автоэлектрика и электроника – это довольно сложный механизм, предоставляющий автомобилисту удобство и уникальные возможности, именно поэтому ремонт должен проводить квалифицированный специалист.",
            "Приезжайте к нам! Наше СТО производит ремонт автоэлектрики любой сложности. Вы можете быть уверенны в результате."
        ],
        works: []
    },
    {
        path: "/services/brakes",
        img: tormoza,
        icon: tire,
        text: 'Ремонт тормозной системы',
        headerPoints: "Мы профессионально осуществялем:",
        points: [
            "Замена тормозных колодок;",
            "Замена тормозных дисков;",
            "Замена тормозных барабанов;",
            "Регулировка ручного тормоза;",
            "Замена колодок ручного тормоза;",
            "Замена троса ручного тормоза;",
            "Замена тормозных шлангов;",
            "Замена трубки тормозной магистрали;",
            "Замена вакуумного усилителя тормоза;",
            "Замена главного тормозного цилиндра;",
            "Замена рабочего тормозного цилиндра;",
            "Ремонт тормозного суппорта;",
            "Замена тормозных суппортов;",
            "Ремонт ABS;",
            "И не только…"
        ],
        headerFactor:  "Поводы для ремонта тормозов:",
        factors: [
            "Снижение уровня тормозной жидкости;",
            "Подтекание суппортов;",
            "Жесткость или провалы педали «тормоза»;",
            "Биения;",
            "Стуки в области тормозных барабанов;",
            "Загорелся индикатор abs;",
            "На патрубках появились трещинки;"
        ],
        dop: [
            "Это поводы для неотлагательного посещения автосервиса. Управлять авто с любой неисправностью тормозной системы– это непростительный риск и глупость.",
            "Невозможно переоценить важность и обязательность исправно работающей тормозной системы. Минимальность расстояния, за которое автомобиль смог остановиться после момента, когда Вы надавили на педаль - бесценно.",
            "Банально, но хорошо работающая тормозная система– Ваша безопасность, плохо работающая- опасность как для Вас, так и для участников дорожного движения."
        ],
        works: []
    }
] 