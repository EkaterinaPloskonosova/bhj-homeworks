const reveal = document.querySelector('.reveal');

document.addEventListener('scroll', () => {
    const {top, bottom} = reveal.getBoundingClientRect();
    if (top < window.innerHeight && bottom > 0) {
        reveal.classList.add('reveal_active');
    }
    
    if (bottom < 0) {
        reveal.classList.remove('reveal_active');
    }
});

