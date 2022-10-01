const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
    if(xhr.readyState === xhr.DONE) {
        const text = JSON.parse(xhr.responseText);
        pollTitle.innerHTML = `${text.data.title}`;
        const answers = text.data.answers;
        answers.forEach(el => {
        pollAnswers.insertAdjacentHTML('beforeEnd', `<button class="poll__answer">${el}</button>`);
        });

        const pollAnswer = document.querySelectorAll('.poll__answer');
        pollAnswer.forEach(el => {
            el.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            });
        });
    }
});

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();