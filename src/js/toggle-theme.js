theme = document.getElementById('theme');
circle = document.querySelectorAll('.header__circle')[0];
mobileCircle = document.querySelectorAll('.header__circle')[1];
console.log(circle);

if(localStorage.getItem('isLightTheme') == null){ localStorage.setItem('isLightTheme', 'false')};
if(localStorage.getItem('isLightTheme') == 'true') {
    document.body.classList.toggle("dark-theme");
    circle.classList.toggle('move-right');
    mobileCircle.classList.toggle('move-right');
}

theme.addEventListener('click', () => {
    document.body.classList.toggle("dark-theme");
    if (localStorage.getItem('isLightTheme') == 'true') {
        localStorage.setItem('isLightTheme', 'false')
    }
    else {
        localStorage.setItem('isLightTheme', 'true')
    }
    circle.classList.toggle('move-right');
    mobileCircle.classList.toggle('move-right');
});

mobileTheme = document.getElementById('mobile-theme');
mobileTheme.addEventListener('click', () => {
    document.body.classList.toggle("dark-theme");
    if (localStorage.getItem('isLightTheme') == 'true') {
        localStorage.setItem('isLightTheme', 'false')
    }
    else {
        localStorage.setItem('isLightTheme', 'true')
    }
    circle.classList.toggle('move-right');
    mobileCircle.classList.toggle('move-right');
});