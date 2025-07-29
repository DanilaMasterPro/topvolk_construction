import { casesData, renderCaseCard, renderModalCaseCard } from './casesData.js';
import { initNeuralBackground } from './neuralBackground.js';
import { pricingData, renderPricingCard } from './pricingData.js';

// Глобальная функция для открытия модального окна
function openContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Делаем функцию доступной глобально
window.openContactModal = openContactModal;

document.addEventListener('DOMContentLoaded', () => {
    // Initialize neural background
    initNeuralBackground();

    // Initialize pricing cards
    const pricingContainer = document.querySelector('.pricing-grid');
    if (pricingContainer) {
        pricingContainer.innerHTML = pricingData.map(pricing => renderPricingCard(pricing)).join('');
    }

    // Portfolio grid functionality
    initPortfolioGrid();

    // Initialize modal functionality
    initModalHandlers();
});

// Дополнительная инициализация на случай, если DOMContentLoaded уже прошло
if (document.readyState === 'loading') {
    // Документ еще загружается - обработчик выше сработает
} else {
    // Документ уже загружен - запускаем инициализацию немедленно
    initNeuralBackground();
    initPortfolioGrid();
    initModalHandlers();
}

function initializeSlider(slider) {
    const slides = slider.querySelectorAll('img');
    const loader = slider.closest('.case-gallery').querySelector('.gallery-loader');
    
    // Ждем загрузки всех изображений
    Promise.all([...slides].map(img => {
        return new Promise((resolve) => {
            if (img.complete) {
                resolve();
            } else {
                img.onload = resolve;
            }
        });
    })).then(() => {
        loader.classList.add('hidden');
    });

    const sliderNav = slider.closest('.case-gallery').querySelector('.slider-nav');
    const prevBtn = slider.closest('.case-gallery').querySelector('.slider-arrow.prev');
    const nextBtn = slider.closest('.case-gallery').querySelector('.slider-arrow.next');
    
    let currentSlide = 0;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        sliderNav.appendChild(dot);
    });
    
    const dots = sliderNav.querySelectorAll('.slider-dot');
    
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    function goToSlide(index) {
        currentSlide = index;
        slider.style.transform = `translateX(-${index * 100}%)`;
        updateDots();
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(currentSlide);
    }
    
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Optional: Auto-advance slides
    setInterval(nextSlide, 5000);
}

// Инициализация слайдера отзывов
const testimonialsSwiper = new Swiper('.testimonials-slider .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    loop: false,
    slidesPerView: 1.3,
    pagination: {
            el: '.testimonials-slider .swiper-pagination',
            clickable: true,
    },
    breakpoints: {
        768: {
            centeredSlides: false,
            slidesPerView: 3,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
        1024: {
            centeredSlides: false,
            slidesPerView: 4,
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeButton = imageModal.querySelector('.close-button');
    
    // Находим все изображения отзывов
    document.querySelectorAll('.testimonial-image').forEach(img => {
        img.addEventListener('click', function() {
            modalImage.src = this.src;
            imageModal.style.display = 'block';
        });
    });

    // Закрытие при клике на модальное окно
    imageModal.addEventListener('click', function() {
        this.style.display = 'none';
    });

    // Закрытие при клике на крестик
    closeButton.addEventListener('click', function(e) {
        e.stopPropagation(); // Предотвращаем всплытие события
        imageModal.style.display = 'none';
    });
});

// Добавьте обработчики для модального окна кейсов
const caseModal = document.getElementById('caseModal');
const caseModalContent = document.getElementById('caseModalContent');
const closeCaseModal = document.querySelector('.close-case-modal');

// Обработчик для кнопки "Посмотреть"
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-case-btn')) {
        const caseId = e.target.dataset.caseId;
        const caseData = casesData.find(c => c.id === caseId);
        if (caseData) {
            caseModalContent.innerHTML = renderModalCaseCard(caseData);
            caseModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Инициализируем слайдер для модального окна
            const modalSlider = caseModalContent.querySelector('.slider');
            if (modalSlider) {
                initializeSlider(modalSlider);
            }

            // Добавляем обработчик для кнопки "Хочу также" внутри модального окна
            const modalContactBtn = caseModalContent.querySelector('.contact-btn');
            if (modalContactBtn) {
                modalContactBtn.addEventListener('click', () => {
                    caseModal.style.display = 'none'; // Закрываем модальное окно кейса
                    modal.style.display = 'block'; // Открываем модальное окно контактной формы
                    document.body.style.overflow = 'hidden'; // Оставляем блокировку прокрутки
                });
            }
        }
    }
});

// Закрытие модального окна при клике на крестик
closeCaseModal.addEventListener('click', () => {
    caseModal.style.display = 'none';
    document.body.style.overflow = ''; // Возвращаем прокрутку
});

// Закрытие при клике вне контента
caseModal.addEventListener('click', (e) => {
    if (e.target === caseModal) {
        caseModal.style.display = 'none';
        document.body.style.overflow = '';
    }
});

// Предотвращаем закрытие при клике на контент
caseModalContent.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Общая функция для отправки формы
async function handleFormSubmit(formData, isCalculator = false) {
    const BOT_TOKEN = '8313640162:AAELBXYThEtUd0z83BUa74LqhZkVkqVKlkM';
    const CHAT_ID = '-1002751940045';
    
    const message = `
🔥 Новая заявка${isCalculator ? ' на расчет стоимости' : ''}!

👤 Имя: ${formData.name}
📱 Контакт: ${formData.contact}
    `;
    
    try {
        console.log('Sending to Telegram...');
        
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message
            })
        });

        const result = await response.json();
        console.log('Telegram response:', result);

        if (response.ok) {
            return true;
        } else {
            throw new Error(`Ошибка отправки: ${result.description}`);
        }
    } catch (error) {
        console.error('Error details:', error);
        alert(`Произошла ошибка: ${error.message}`);
        return false;
    }
}
// Portfolio grid functionality
function initPortfolioGrid() {
    const loadMoreBtn = document.querySelector('.load-more-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    // Add click handler for portfolio items (optional - for future lightbox)
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            // Here you can add lightbox functionality if needed
            console.log('Portfolio item clicked:', img.src);
        });
    });
    
    // Load more button functionality
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Here you can add functionality to load more portfolio items
            // For now, just show an alert
            alert('Load more functionality - here you can add AJAX request to load more portfolio items');
        });
    }
}

// Modal handling function
function initModalHandlers() {
    const modal = document.getElementById('contactModal');
    const successModal = document.getElementById('successModal');
    const closeButtons = document.querySelectorAll('.close-modal');
    const successBtn = document.querySelector('.success-btn');

    console.log('Initializing modal handlers...');
    
    // Прямая обработка кнопок contact-btn
    const contactButtons = document.querySelectorAll('.contact-btn');
    console.log('Found contact buttons:', contactButtons.length);
    
    contactButtons.forEach(btn => {
        // Проверяем, что кнопка не внутри формы
        if (!btn.closest('form')) {
            console.log('Adding click handler to button:', btn);
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Contact button clicked, opening modal');
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        }
    });

    // Закрытие модальных окон
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'none';
            successModal.style.display = 'none';
            document.body.style.overflow = '';
        });
    });

    // Закрытие по клику вне модального окна
    window.addEventListener('click', (e) => {
        if (e.target === modal || e.target === successModal) {
            modal.style.display = 'none';
            successModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // Кнопка "Отлично" в окне успеха
    if (successBtn) {
        successBtn.addEventListener('click', () => {
            successModal.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    // Обработка форм
    const contactForm = document.getElementById('contactForm');
    const calculatorForm = document.getElementById('calculatorForm');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = {
                name: document.getElementById('name').value,
                contact: document.getElementById('contact').value
            };
            
            if (await handleFormSubmit(formData)) {
                contactForm.reset();
                modal.style.display = 'none';
                successModal.style.display = 'block';
            }
        });
    }

    if (calculatorForm) {
        calculatorForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = {
                name: document.getElementById('calc-name').value,
                contact: document.getElementById('calc-contact').value
            };
            
            if (await handleFormSubmit(formData, true)) {
                calculatorForm.reset();
                successModal.style.display = 'block';
            }
        });
    }
}