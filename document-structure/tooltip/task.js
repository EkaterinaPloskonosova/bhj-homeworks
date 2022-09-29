const hasTooltips = Array.from(document.querySelectorAll('.has-tooltip'));

const createTooltip = (title, top, left) => {
    let tooltip = document.createElement('div');

    tooltip.textContent = title;
    tooltip.classList.add('tooltip', 'tooltip_active');
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 20 + 'px';
    
    return tooltip;
}

hasTooltips.forEach(i => {
    i.addEventListener('click', (event) => {
        event.preventDefault();

        const tooltip = document.querySelector('.tooltip');
        let {top, left} = i.getBoundingClientRect();
        if (tooltip) {
            if (tooltip === event.target.nextElementSibling) {
                tooltip.remove();
                return;
            } else {
                tooltip.remove();
            }
        }
        i.insertAdjacentElement('afterend', createTooltip(i.title, top, left));
        
    });
});