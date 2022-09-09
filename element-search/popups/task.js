const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');

const modalClose = document.getElementsByClassName('modal__close');
const showSuccess = document.getElementsByClassName('show-success');

modalMain.classList.add('modal_active');

Array.from(modalClose, el => {
    el.onclick = () => {
        el.closest('.modal').classList.remove('modal_active');
    }
});

Array.from(showSuccess, el => {
    el.onclick = () => {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.add('modal_active');
    }
});