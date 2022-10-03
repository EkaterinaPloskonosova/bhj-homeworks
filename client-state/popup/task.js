const subscribeModal = document.getElementById("subscribe-modal");
const closeModal = document.querySelector('.modal__close');

if (document.cookie !== 'modal=close') {
    subscribeModal.classList.add('modal_active');
}

closeModal.addEventListener('click', () => {
    subscribeModal.classList.remove('modal_active');
    document.cookie = 'modal=close';
});