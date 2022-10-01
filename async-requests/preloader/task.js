const loader = document.getElementById("loader");
const items = document.querySelector("#items");

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove("loader_active");
        const data = JSON.parse(xhr.responseText);
        const arrData = Object.entries(data.response.Valute);
        arrData.forEach(el => {
            items.innerHTML += `<div class="item">
                <div class="item__code">${el[1].CharCode}</div>
                <div class="item__value">${el[1].Value}</div>
                <div class="item__currency">руб.</div>
                </div>`
            });
    }
});
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
xhr.send();