const statsSection = document.querySelector('.stats__container');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            statsSection.classList.add('animate');
            observer.unobserve(statsSection); // Отключаем наблюдение после первого срабатывания
        }
    });
}, { threshold: 0.5 });

observer.observe(statsSection);
