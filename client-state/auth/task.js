const signIn = document.getElementById('signin');
const welcome = document.getElementById('welcome');
let userId = document.getElementById('user_id');

if (localStorage.user != null) {
    welcome.classList.add('welcome_active');
    userId.innerText = localStorage.user;
} else {
    signIn.classList.add('signin_active');

    let form = document.getElementById('signin__form');

    form.addEventListener('submit', (event) => {
        let xhr = new XMLHttpRequest;
        let formData = new FormData(form);

        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
        xhr.send(formData);
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                let answer = JSON.parse(this.response);

                if (answer.success === true) {
                    signIn.classList.remove('signin_active');
                    welcome.classList.add('welcome_active');
                    userId.innerText = answer.user_id;
                    localStorage.setItem('user', answer.user_id);
                } else {
                    alert("Неверный логин/пароль");
                }
            }
        }
        event.preventDefault();
    })
}






