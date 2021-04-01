const progressBar = document.getElementById('progress');
const form = document.getElementById('form');
let xhr = new XMLHttpRequest;

form.addEventListener('submit', (event) => {
    let formData = new FormData(form);
    event.preventDefault();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData);
})
xhr.upload.addEventListener('progress', (event) => {
    progressBar.value = event.loaded / event.total;
})