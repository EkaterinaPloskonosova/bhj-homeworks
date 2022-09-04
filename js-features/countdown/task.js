const startTimer = document.getElementById('timer');
const outTimer = setInterval (function(){
    startTimer.textContent -= 1;

    if (startTimer.textContent  == 0) {
        clearInterval(outTimer);
        alert('Вы победили в конкурсе!');
    }
}, 1000);

// const deadline ='00-00-00';
// let time = new Date();
//  time.toLocaleTimeString().slice(0,-3);
