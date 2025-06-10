import { casesData, renderCaseCard, renderModalCaseCard } from './casesData.js';
import { initNeuralBackground } from './neuralBackground.js';
import { pricingData, renderPricingCard } from './pricingData.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize neural background
    initNeuralBackground();

    // Render cases
    const casesContainer = document.querySelector('.cases-slider .swiper-wrapper');
    casesContainer.innerHTML = casesData.map(caseData => renderCaseCard(caseData)).join('');

    // Initialize cases slider
    const casesSwiper = new Swiper('.cases-slider .swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.cases-slider .swiper-pagination',
            clickable: true,
        },

        autoplay: {
            delay: 5000, // 5 секунд
            disableOnInteraction: true // продолжать автопрокрутку после взаимодействия пользователя
        },

        breakpoints: {
            // >= 768px
            768: {
                slidesPerView: 2,
            },
            // >= 1024px
            1024: {
                slidesPerView: 2,
            }
        }
    });

    // Initialize pricing cards
    const pricingContainer = document.querySelector('.pricing-grid');
    pricingContainer.innerHTML = pricingData.map(pricing => renderPricingCard(pricing)).join('');
});

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

// Modal handling
const modal = document.getElementById('contactModal');
const successModal = document.getElementById('successModal');
const span = document.querySelector('.close-modal');
const form = document.getElementById('contactForm');
const closeButtons = document.querySelectorAll('.close-modal');
const successBtn = document.querySelector('.success-btn');

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('contact-btn')) {
        modal.style.display = 'block';
    }
});

// Обработчик закрытия по крестику
span.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Возвращаем прокрутку
});

// Обработчик закрытия по клику вне модального окна
window.addEventListener('click', (e) => {
    if (e.target === modal || e.target === successModal) {
        modal.style.display = 'none';
        successModal.style.display = 'none';
        document.body.style.overflow = ''; // Возвращаем прокрутку
    }
});

// Обновляем обработчик формы
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    
    const BOT_TOKEN = '7808652944:AAHDqPPqu2_IbKpFg02rBjWwtDJN_aDomjs'; // Replace with your bot token
    const CHAT_ID = '612414314'; // Replace with your chat ID
    
    const message = `
🔥 Новая заявка!

👤 Имя: ${name}
📱 Контакт: ${contact}
    `;
    
    try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });

        if (response.ok) {
            form.reset();
            modal.style.display = 'none';
            successModal.style.display = 'block';
        } else {
            throw new Error('Ошибка отправки');
        }
    } catch (error) {
        alert('Произошла ошибка. Пожалуйста, попробуйте позже.');
    }
});

// Обработчики закрытия для success модалки
closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'none';
        successModal.style.display = 'none';
        document.body.style.overflow = ''; // Возвращаем прокрутку
    });
});

// Изменяем обработчик для кнопки "Отлично"
successBtn.addEventListener('click', () => {
    successModal.style.display = 'none';
    modal.style.display = 'none';
    document.body.style.overflow = '';
});

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