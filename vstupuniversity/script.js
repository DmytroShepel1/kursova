document.addEventListener('DOMContentLoaded', function () {
    $('.slick-slider').slick({
        slidesToShow: 3, // Кількість логотипів, що відображаються одночасно
        autoplay: true, // Автоматичне прокручування
        autoplaySpeed: 1000, // Час в мс між слайдами
        speed: 6000, // Тривалість анімації переходу
        infinite: true, // Безкінечна карусель
        centerMode: true, // Центрування слайдів
        centerPadding: '0', // Відсутність відступів по боках
        arrows: false, // Відключаємо кнопки навігації
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1 // Кількість слайдів для мобільних пристроїв
                }
            }
        ]
    });
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Перевірка ім'я
        const firstName = document.getElementById('firstName').value;
        if (firstName.trim() === '') {
            alert('Будь ласка, введіть ім\'я');
            return;
        }

        // Перевірка прізвища
        const lastName = document.getElementById('lastName').value;
        if (lastName.trim() === '') {
            alert('Будь ласка, введіть прізвище');
            return;
        }

        // Перевірка номера телефону
        const phone = document.getElementById('phone').value;
        const phonePattern = /^\+?\d{10,15}$/;
        if (!phonePattern.test(phone)) {
            alert('Будь ласка, введіть коректний номер телефону');
            return;
        }

        // Перевірка email
        const email = document.getElementById('email').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Будь ласка, введіть коректний email');
            return;
        }

        // Перевірка повідомлення
        const message = document.getElementById('message').value;
        if (message.trim() === '') {
            alert('Будь ласка, введіть повідомлення');
            return;
        }

        // Якщо всі поля заповнені коректно, форма може бути відправлена
        alert('Форма відправлена успішно!');
        form.reset();
    });
});
// Функція для прокручування на верх
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').addClass('show');
        } else {
            $('.back-to-top').removeClass('show');
        }
    });
});

function scrollToTop() {
    $('html, body').animate({scrollTop : 0},800);
    return false;
}





