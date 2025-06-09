export function renderPricingCard(pricingData) {
    return `
        <div class="pricing-card">
            <div class="pricing-card-left">
                <div class="pricing-header">
                    <h3>${pricingData.name}</h3>
                    <div class="pricing-description">
                        <p>${pricingData.description}</p>
                        ${pricingData.subDescription ? `<p>${pricingData.subDescription}</p>` : ''}
                    </div>
                </div>
                <div class="price-action-wrapper">
                    <div class="price">${pricingData.price}</div>
                    <button class="pricing-btn contact-btn">Получить консультацию</button>
                </div>
            </div>

            <div class="pricing-card-center">
                ${pricingData.features.slice(0, 2).map(feature => `
                    <div class="feature-section">
                        <h5>${feature.title}</h5>
                        <ul>
                            ${feature.items.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>

            <div class="pricing-card-right">
                ${pricingData.features.slice(2, 4).map(feature => `
                    <div class="feature-section">
                        <h5>${feature.title}</h5>
                        <ul>
                            ${feature.items.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

export const pricingData = [
    {
        id: 'traffic',
        name: 'ТРАФИК',
        price: 'от 600$',
        description: '1 месяц ведения рекламного трафика на один канал на выбор: Яндекс.Директ, VK, YouTube, Google Ads, Telegram, Meta (если доступна).',
        subDescription: 'Работаю сам. Без посредников, менеджеров и лишней бюрократии. Всё по делу.',
        features: [
            {
                title: 'Стратегия и запуск',
                items: [
                    'Подбираю подходящий канал под твою нишу',
                    'Разрабатываю стратегию и гипотезы',
                    'Настраиваю рекламный кабинет и подготавливаю всё к запуску'
                ]
            },
            {
                title: 'Настройка и оптимизация',
                items: [
                    'Сегментирую аудитории, подбираю интересы и ключи',
                    'Собираю/чищу семантическое ядро (если это контекст)',
                    'Оптимизирую кампании по результатам и метрикам'
                ]
            },
            {
                title: 'Креативы и тексты',
                items: [
                    'Пишу рекламные заголовки и тексты',
                    'Создаю баннеры, подбираю подходящие визуалы',
                    'По необходимости собираю посадочную страницу (на Tilda, LP и др.)'
                ]
            },
            {
                title: 'Аналитика и отчёты',
                items: [
                    'Подключаю метрику/аналитику',
                    'Отслеживаю результаты: клики, лиды, стоимость заявки',
                    'Даю чёткие выводы и рекомендации, что можно улучшить'
                ]
            }
        ]
    }
    // Здесь можно добавить другие тарифы
];