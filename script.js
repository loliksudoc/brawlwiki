// Функция для прокрутки страницы до секции по id
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Функция для отображения всплывающего окна с характеристиками персонажа
function showPopup(character) {
    const popup = document.getElementById('popup');
    const title = document.getElementById('popup-title');
    const description = document.getElementById('popup-description');

    title.textContent = `Характеристики ${character}`;
    description.textContent = `Здесь будет описание характеристик ${character}, которое ты сможешь отредактировать.`;
    
    popup.style.display = 'flex'; // Показываем попап
}

// Функция для закрытия всплывающего окна
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'; // Скрываем попап
}
