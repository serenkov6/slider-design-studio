
// Находим контейнер со слайдами
const slides = document.querySelector('.slides');

// Определяем количество слайдов
const slideCount = document.querySelectorAll('.slide').length;

// Находим кнопки «Назад» и «Вперёд»
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Находим сам слайдер (нужен для остановки автопрокрутки при наведении)
const slider = document.querySelector('.slider');

let currentIndex = 0; // Переменная для хранения текущего слайда
let autoPlayInterval; // Переменная для хранения интервала автопрокрутки

// Функция для смены слайдов
function goToSlide(index) {
    if (index < 0) {
        index = slideCount - 1; // Если нажали «Назад» на первом слайде, переходим на последний
    } else if (index >= slideCount) {
        index = 0; // Если нажали «Вперёд» на последнем слайде, переходим на первый
    }

    currentIndex = index; // Запоминаем текущий слайд
    slides.style.transform = `translateX(${-index * 100}%)`; // Сдвигаем контейнер со слайдами
}

// Добавляем обработчик клика для кнопки «Назад»
prevButton.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
});

// Добавляем обработчик клика для кнопки «Вперёд»
nextButton.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
});

/**
     * Функция запуска автоматического перелистывания слайдов
     * Устанавливает интервал на три секунды
     */
function startAutoPlay () {
    autoPlayInterval = setInterval(() => {
        goToSlide (currentIndex + 1);
    }, 3000)
}

/**
     * Функция остановки автопрокрутки
     * Останавливает заданный ранее интервал
     */
function stopAutoPlay () {
    clearInterval(autoPlayInterval);
}

// Запускаем автопрокрутку при загрузке страницы
startAutoPlay();

// Останавливаем автопрокрутку, если пользователь навёл курсор на слайдер
slider.addEventListener('mouseenter', stopAutoPlay);

// Возобновляем автопрокрутку, когда пользователь убирает курсор
slider.addEventListener('mouseleave', startAutoPlay);