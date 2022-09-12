const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'));

dropdownValue.addEventListener('click', () => {
    dropdownList.classList.add('dropdown__list_active');
});

dropdownLink.forEach(function (el) {
    el.addEventListener('click', function(value) {
        dropdownList.classList.remove('dropdown__list_active');
        dropdownValue.textContent = el.textContent;
        value.preventDefault();
    });
});