const textarea = document.getElementById('editor');
let save;

if (localStorage.getItem('text')) {
    textarea.innerHTML = localStorage.text;
}

textarea.addEventListener('input', (event) => {
    save = textarea.value;
    localStorage.setItem('text', save);    
})
