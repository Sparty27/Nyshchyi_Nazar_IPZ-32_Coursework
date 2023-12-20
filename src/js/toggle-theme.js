theme = document.getElementById('theme');
circle = document.getElementsByClassName('header__circle')[0];
let isMovedRight = false;
theme.addEventListener('click', () => {
    document.body.classList.toggle("dark-theme");
    if (isMovedRight) {
        circle.classList.toggle('move-right');
        isMovedRight = false;
    }
    else {
        circle.classList.toggle('move-right');
        isMovedRight = true;
    }
});