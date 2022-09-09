const sliderItem = Array.from(document.querySelectorAll('.slider__item'));
const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');
let count = 0;

function activSlide() {
    sliderItem.forEach(function(el, index) {
        if (index === count) {
            el.classList.add('slider__item_active');
        } else {
            el.classList.remove('slider__item_active');
        }
    });
}


sliderArrowPrev.addEventListener ('click', () => {
    if (count === 0) {
        count = (sliderItem.length - 1)
    } else {
        count--;
    }
    activSlide();
});

sliderArrowNext.addEventListener ('click', () => {
    if (count === sliderItem.length - 1) {
        count = 0
    } else {
        count++;
    }
    activSlide();
});

