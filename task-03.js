const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const passwordEntered = prompt("Введите пароль");
if(passwordEntered === null) {
    message = 'Отменено пользователем!'
} else if(passwordEntered !== ADMIN_PASSWORD) {
    message = 'Доступ запрещен, неверный пароль!'
} else if(passwordEntered === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!'
}
console.log(alert(message));