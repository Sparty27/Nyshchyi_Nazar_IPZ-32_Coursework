theme = document.getElementById('theme');
circle = document.querySelectorAll('.header__circle')[0];
mobileCircle = document.querySelectorAll('.header__circle')[1];
console.log(circle);
let isMovedRight = false;
theme.addEventListener('click', () => {
    document.body.classList.toggle("dark-theme");
    if (isMovedRight) {
        circle.classList.toggle('move-right');
        mobileCircle.classList.toggle('move-right');

        isMovedRight = false;
    }
    else {
        circle.classList.toggle('move-right');
        mobileCircle.classList.toggle('move-right');
        isMovedRight = true;
    }
});
mobileTheme = document.getElementById('mobile-theme');
mobileTheme.addEventListener('click', () => {
    document.body.classList.toggle("dark-theme");
    if (isMovedRight) {
        mobileCircle.classList.toggle('move-right');
        circle.classList.toggle('move-right');
        isMovedRight = false;
    }
    else {
        mobileCircle.classList.toggle('move-right');
        circle.classList.toggle('move-right');
        isMovedRight = true;
    }
});