document.addEventListener("DOMContentLoaded", function () {


    const menuButton = document.getElementById('menuButton');
    const horizontalMenu = document.querySelector('.horizontal-menu');
    const menuDropdown = document.querySelector('.menu-dropdown');


    menuButton.addEventListener('click', () => {
        if (horizontalMenu.style.display === 'none' || horizontalMenu.style.display === '') {
            horizontalMenu.style.display = 'block';
            menuDropdown.style.display = 'none'; // Приховуємо випадаюче вікно
        } else {
            horizontalMenu.style.display = 'none';
        }
    });
    menuButton.addEventListener('click', () => {
        if (menuDropdown.style.display === 'none' || menuDropdown.style.display === '') {
            menuDropdown.style.display = 'block';
        } else {
            menuDropdown.style.display = 'none';
        }
    });
});



