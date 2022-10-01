const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
   
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    
    xhr.upload.onprogress = function(e) {
        progress.value = e.loaded / e.total;
    }
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData);
})

