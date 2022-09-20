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

        let tooltip = document.querySelector('.tooltip');
        let {top, left} = i.getBoundingClientRect();

        if (!tooltip) {
            i.insertAdjacentElement('afterend', createTooltip(i.title, top, left));
        } else {
            tooltip.remove();
        }
    });
});