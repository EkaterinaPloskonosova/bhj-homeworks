const signin = document.getElementById("signin");
const form = document.querySelector("form");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");

function welcomeUser() {
    userId.textContent = localStorage.id;
    welcome.classList.add("welcome_active");
    signin.classList.remove("signin_active");
}

if (localStorage.id !== undefined) {
    welcomeUser();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
        if (xhr.response.success) {
          localStorage.setItem('id', xhr.response.user_id);
          welcomeUser();
        } else {
           alert("Неверный логин/пароль");
        }
    });
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');

    const formData = new FormData(form);
    xhr.send(formData);
});