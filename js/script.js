const iconMenu = document.querySelector('.bi-list');
const menu = document.querySelector('.menu');

function toggleMenu() {
    menu.classList.toggle('active');
}


function changeIcon() {
    iconMenu.classList.contains('bi-list')
        ? iconMenu.classList.replace('bi-list', 'bi-x')
        : iconMenu.classList.replace('bi-x', 'bi-list');
}

iconMenu.addEventListener('click', () => {
    changeIcon();
    toggleMenu();
});