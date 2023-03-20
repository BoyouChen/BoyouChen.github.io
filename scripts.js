function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function fadeInOnScroll() {
    const sections = document.querySelectorAll('section');

    for (const section of sections) {
        if (isElementInViewport(section)) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = 0;
            section.style.transform = 'translateY(20px)';
        }
    }
}

document.addEventListener('DOMContentLoaded', fadeInOnScroll);
window.addEventListener('scroll', fadeInOnScroll);
