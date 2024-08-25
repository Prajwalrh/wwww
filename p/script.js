window.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, index * 200);
    });
});
