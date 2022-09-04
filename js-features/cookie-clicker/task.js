const img = document.getElementById('cookie');
const count = document.getElementById('clicker__counter');

img.onclick = function () {
    if (img.width == 200) {
        img.width = 300; 
    } else {
        img.width = 200;
    }
    
    count.textContent = +count.textContent + 1;
}
