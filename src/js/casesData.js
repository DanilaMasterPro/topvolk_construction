export function renderCaseCard(caseData) {
    return `
        <div class="case-card">
            <div class="case-header">
                <div class="case-title">
                    <h3>${caseData.title}</h3>
                    <p class="case-subtitle">${caseData.subtitle}</p>
                </div>
            </div>

            <div class="case-main">
                <div class="case-gallery-container">
                    <div class="case-gallery">
                        <div class="gallery-loader">
                            <div class="loader-spinner"></div>
                        </div>
                        <div class="slider">
                            ${caseData.images.map(img => `<img src="${img}" alt="${caseData.title} view" onload="this.closest('.case-gallery').querySelector('.gallery-loader').classList.add('hidden')">`).join('')}
                        </div>
                        <div class="slider-nav"></div>
                        <div class="slider-arrows">
                            <button class="slider-arrow prev">←</button>
                            <button class="slider-arrow next">→</button>
                        </div>
                    </div>
                    
                </div>

                <div class="case-info">
                    <div class="case-details">
                        <div class="case-gallery-results">
                         <h4>Результат:</h4>
                            ${caseData.results.slice(0, -1).map(result => `<div class="result-item">${result}</div>`).join('')}
                        </div>

                        <div class="case-links">
                            <button class="view-case-btn case-btn" data-case-id="${caseData.id}">👁 Посмотреть</button>
                            <button class="case-btn contact-btn">📩 Хочу также</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function renderModalCaseCard(caseData) {
    return `
        <div class="case-card">
            <div class="case-header">
                <div class="case-title">
                    <h3>${caseData.title}</h3>
                    <p class="case-subtitle">${caseData.subtitle}</p>
                </div>
            </div>

            <div class="case-main">
                <div class="case-gallery-container">
                    <div class="case-gallery">
                        <div class="gallery-loader">
                            <div class="loader-spinner"></div>
                        </div>
                        <div class="slider">
                            ${caseData.images.map(img => `<img src="${img}" alt="${caseData.title} view" onload="this.closest('.case-gallery').querySelector('.gallery-loader').classList.add('hidden')">`).join('')}
                        </div>
                        <div class="slider-nav"></div>
                        <div class="slider-arrows">
                            <button class="slider-arrow prev">←</button>
                            <button class="slider-arrow next">→</button>
                        </div>
                    </div>
                    <div class="case-gallery-results">
                         <h4>Результат:</h4>
                        ${caseData.results.slice(0, -1).map(result => `<div class="result-item">${result}</div>`).join('')}
                    </div>
                </div>

                <div class="case-info">
                    <div class="case-details">
                        <h4 class="case-details-target">Цель проекта 🎯</h4>
                        <p>${caseData.goal}</p>
                        <br>
                        <h4>Решение:</h4>
                        <ol class="solution-steps">
                            ${caseData.steps.map(step => `<li>${step}</li>`).join('')}
                        </ol>

                        <div class="case-mobile-results">
                         <h4>Результат:</h4>
                            ${caseData.results.map(result => `<div class="result-item">${result}</div>`).join('')}
                        </div>

                        <div class="case-links">
                            <a href="${caseData.links.demo}" target="_blank" class="case-btn">🔗 Смотреть сайт</a>
                            <button class="case-btn contact-btn">📩 Хочу также</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export const casesData = [
    // {
    //     id: 'sferoom',
    //     title: 'Sferoom',
    //     subtitle: 'Услуги по продвижению музыкантов',
    //     images: [
    //         './img/sferoom1.jpg',
    //         './img/sferoom2.jpg',
    //         './img/sferoom3.jpg',
    //         './img/sferoom4.jpg',
    //         './img/sferoom5.jpg',
    //         './img/sferoom6.jpg'
    //     ],
    //     goal: 'Увеличить конверсию из посетителя в лида и сделать дизайн сайта не обычным и запоминающимся',
    //     steps: [
    //         'Анализ конкурентов - поиск интересных офферов, оценка уровня дизайна, формирование болей и потребностей целевой аудитории',
    //         'Проектирование - Объеденение всех наиболее перспективных решений выявленных при анализе, создание прототипа',
    //         'Дизайн - Сбор и удтверждение референсов, формирование концепции, отрисовка дизайн макета и UI Kit',
    //         'Верстка - Ручная реализация проекта по средствам HTML, CSS, JS с интеграцией на CMS WordPress',
    //         'Тестирование и отладка - Поиск и устранение проблем не корректного отображения',
    //         'Выпуск в продакшн - Размещение проекта на хостинге клиента, оптимизация скорости загрузки'
    //     ],
    //     results: [
    //         '✨ Современный дизайн в премиум стиле',
    //         '📈 Конверсия из посетителя в лида 20%',
    //         '⏳ Срок реализации: 8 месяцев'
    //     ],
    //     links: {
    //         demo: 'https://telegram.cyberteam-international.com/?id=sferoom',
    //         contact: 'https://t.me/daniilbortvin'
    //     }
    // },
    {
        id: 'wawe',
        title: 'Wawe bank',
        subtitle: 'Индонезийский Start-Up проект в области fin-tech',
        images: [
            './img/wawe1.jpg',
            './img/wawe2.jpg',
            './img/wawe3.jpg',
            './img/wawe4.jpg',
            './img/wawe5.jpg',
            './img/wawe6.jpg'
        ],
        goal: 'Донести ценности и преимущества нового банка для индонезийской и англоязычной аудитории. Побудить пользователей установить мобильное приложение.',
        steps: [
            'Анализ конкурентов - поиск интересных офферов, оценка уровня дизайна, формирование болей и потребностей целевой аудитории',
            'Проектирование - Объеденение всех наиболее перспективных решений выявленных при анализе, создание прототипа',
            'Дизайн - Сбор и удтверждение референсов, формирование концепции, отрисовка дизайн макета и UI Kit',
            'Разработка - Ручная реализация проекта по средствам React/Next.js',
            'Тестирование и отладка - Поиск и устранение проблем не корректного отображения на различных устройствах и платформах',
            'Выпуск в продакшн - Размещение проекта на хостинге клиента, оптимизация скорости загрузки, подключение метрик'
        ],
        results: [
            '🌏 Мультиязычный проект (EN + ID)',
            '👁 Версия для слабовидящих',
            '⏳ Срок реализации: 3 месяца',
            '🚀 Ждём запуска проекта!'
        ],
        links: {
            demo: 'https://telegram.cyberteam-international.com/?id=wawe',
            contact: 'https://t.me/daniilbortvin'
        }
    },
    {
        id: 'aibooks',
        title: 'AI Books',
        subtitle: 'AI Start-Up онлайн сервис по озвучке текстов',
        images: [
            './img/aibooks1.jpg',
            './img/aibooks2.jpg',
            './img/aibooks3.jpg',
            './img/aibooks4.jpg',
            './img/aibooks5.jpg',
        ],
        goal: 'Реализовать удобный и понятный интерфейс с функционалом генеративной озвучки текстов пользователей',
        steps: [
            'Анализ конкурентов - поиск интересных офферов, оценка функционала и интерфейсов, а также уровня дизайна',
            'Проектирование - Объеденение всех наиболее перспективных решений выявленных при анализе, создание прототипа',
            'Дизайн - Сбор и удтверждение референсов, формирование концепции, отрисовка дизайн макета и UI Kit',
            'Разработка - Ручная реализация проекта по средствам React/Next.js + NodeJs',
            'Тестирование и отладка - Поиск и устранение проблем не корректного отображения на различных устройствах и платформах',
            'Выпуск в продакшн - Размещение проекта на хостинге клиента, оптимизация скорости загрузки, подключение метрик, написание документации'
        ],
        results: [
            '📊 Кастомная админ панель с дашбордами',
            '📝 Генерация тестов по тексту',
            '📈 Конверсия регистраций: 3,5%',
            '⏳ Срок реализации: 6 месяцев'
        ],
        links: {
            demo: 'https://telegram.cyberteam-international.com/?id=aibooks',
            contact: 'https://t.me/daniilbortvin'
        }
    },
    {
        id: 'animationschool',
        title: 'Animation School',
        subtitle: 'Крупнейшая онлайн академия по 3д моушен-дизайну в России',
        images: [
            './img/animationschool1.jpg',
            './img/animationschool2.jpg',
            './img/animationschool3.jpg',
            './img/animationschool4.jpg',
            './img/animationschool5.jpg',
        ],
        goal: 'Увеличить конверсию из посетителя в лида и сделать дизайн сайта более привлекательным и современным',
        steps: [
            'Анализ конкурентов - поиск интересных офферов, оценка уровня дизайна, формирование болей и потребностей целевой аудитории',
            'Проектирование - Объеденение всех наиболее перспективных решений выявленных при анализе, создание прототипа',
            'Дизайн - Сбор и удтверждение референсов, формирование концепции, отрисовка дизайн макета и UI Kit',
            'Верстка - Ручная реализация проекта по средствам HTML, CSS, JS',
            'Интеграция верстки на CMS WordPress',
            'Тестирование и отладка - Поиск и устранение проблем не корректного отображения на различных устройствах и платформах',
            'Выпуск в продакшн - Размещение проекта на хостинге клиента, оптимизация скорости загрузки, подключение метрик'
        ],
        results: [
            '✨ Современный, креативный дизайн',
            '📈 Конверсия из посетителя в лида 3.18%',
            '⏳ Срок реализации: 5 месяцев'
        ],
        links: {
            demo: 'https://telegram.cyberteam-international.com/?id=animationschool',
            contact: 'https://t.me/daniilbortvin'
        }
    },
    {
        id: 'carmoney66',
        title: 'CarMoney66',
        subtitle: 'Срочный выкуп автомобилей в Екатеринбурге',
        images: [
            './img/carmoney661.jpg',
            './img/carmoney662.jpg',
            './img/carmoney663.jpg',
            './img/carmoney664.jpg',
        ],
        goal: 'Создать современный, быстрый и удобный сайт для увеличения количества обращений через форму оценки авто. Сделать акцент на доверии и простоте процесса для клиента.',
        steps: [
            'Анализ конкурентов – изучили сайты лидеров на рынке автовыкупа, определили лучшие практики и составили карту болей и потребностей целевой аудитории',
            'UX-проектирование – выстроили логичный путь пользователя: от первого экрана с оффером до формы онлайн-оценки',
            'UI-дизайн – разработали минималистичный и вызывающий доверие визуал, адаптированный под все устройства',
            'Фронтенд-разработка – ручная верстка на HTML, CSS, JS с упором на легкость и быструю загрузку',
            'Интеграция с формами и аналитикой – реализована отправка заявок, подключены системы отслеживания событий (Google Analytics, Яндекс Метрика)',
            'Тестирование и запуск – проверка корректности работы на всех устройствах и браузерах, размещение проекта на хостинге клиента'
        ],
        results: [
            '✨ Современный и лёгкий интерфейс',
            '📈 Конверсия: 4.26%',
            '⏳ Срок реализации: 2 месяца'
        ],
        links: {
            demo: 'https://telegram.cyberteam-international.com/?id=carmoney66',
            contact: 'https://t.me/daniilbortvin'
        }
    }
];