(() => {
    const menuOpenBtn = document.querySelector('[data-menu-button-open]');
    const menuCloseBtn = document.querySelector('[data-menu-button-close]');
    const mobileMenuRef = document.querySelector('[data-menu]');
    const body = document.querySelector('body');

    let openModalBtns = document.querySelectorAll('[data-modal-open]');
    openModalBtns.forEach(e => {
        e.addEventListener('click', () => {
            const expanded = menuOpenBtn.getAttribute('aria-expanded') === 'true' || false;
            menuOpenBtn.classList.toggle('is-open');
            menuOpenBtn.setAttribute('aria-expanded', !expanded);
            mobileMenuRef.classList.toggle('is-open');
        });
    });

    let sections = document.querySelectorAll('.mobile__nav-item');
    sections.forEach(e => {
        e.addEventListener('click', () => {
            const expanded = menuOpenBtn.getAttribute('aria-expanded') === 'true' || false;
            menuOpenBtn.classList.toggle('is-open');
            menuOpenBtn.setAttribute('aria-expanded', !expanded);
            mobileMenuRef.classList.toggle('is-open');
            body.classList.toggle('no-scroll');
        });
    });


    menuOpenBtn.addEventListener('click', () => {
        const expanded = menuOpenBtn.getAttribute('aria-expanded') === 'true' || false;

        menuOpenBtn.classList.toggle('is-open');
        menuOpenBtn.setAttribute('aria-expanded', !expanded);
        mobileMenuRef.classList.toggle('is-open');
        body.classList.toggle('no-scroll');
    });
    menuCloseBtn.addEventListener('click', () => {
        const expanded = menuOpenBtn.getAttribute('aria-expanded') === 'true' || false;

        menuOpenBtn.classList.toggle('is-open');
        menuOpenBtn.setAttribute('aria-expanded', !expanded);
        mobileMenuRef.classList.toggle('is-open');
        body.classList.toggle('no-scroll');
    });
})();