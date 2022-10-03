const editor = document.getElementById('editor');

editor.addEventListener('input', () => {
    localStorage.setItem('editor', editor.value);
});
editor.textContent = localStorage.getItem('editor');