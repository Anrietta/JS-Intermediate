
// Варіант 1: Якщо ми хочемо робити валідацію всієї форми (кожного інпута) при натисканні кнопки submit

const form = document.querySelector('form');

// function submitHandler(e) {
//     e.preventDefault();

//     // console.log(e.target.elements);

//     const [nameInput] = form.querySelectorAll('input');
//     if (/^[A-Z][a-z]{2,19}(-[A-Z][a-z]{2,19})?$/.test(nameInput.value)) {
//         nameInput.classList.add('valid');
//         nameInput.classList.remove('invalid');
//     } else {
//         nameInput.classList.add('invalid');
//         nameInput.classList.remove('valid');
//     }
//     // console.log(inputs);
// }

// form.addEventListener('submit', submitHandler);




// Варіант 2: Якщо ми хочемо робити валідацію всієї форми (кожного інпута) в момент введення даних в інпут - для одного інпута
const [nameInput] = form.querySelectorAll('input');

function inputNameHandler(e) {
    console.dir(e.target);

    if (/^[A-Z][a-z]{2,19}(-[A-Z][a-z]{2,19})?$/.test(e.target.value)) {
        nameInput.classList.add('valid');
        nameInput.classList.remove('invalid');
    } else {
        nameInput.classList.add('invalid');
        nameInput.classList.remove('valid');
    }

}
nameInput.addEventListener('input', inputNameHandler);

// Варіант 3: Якщо ми хочемо робити валідацію всієї форми (кожного інпута) в момент введення даних в інпут - для всіх інпутів

// робим обєкт-мапу для збереження назви інпута і регулярки до нього
const INPUTS_REG_EXPS = {
   'first-name': /^[A-Z][a-z]{2,19}(-[A-Z][a-z]{2,19})?$/,
   'last-name': /^[A-Z][a-z]{2,19}(-[A-Z][a-z]{2,19})?$/,
   'email': /^.+@.+$/,
   'phone-number': /^\+380\d{9}&/,
   'password': /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*_].*).{8,32}$/,
   'password-confirmation': /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*_].*).{8,32}$/
}

// отримуємо всі інпути
const inputs = form.querySelectorAll('input');
inputs.forEach(i => i.addEventListener('input', inputHandler))

function inputHandler(e) {
    console.dir(e.target);

    // перевіряємо рядок e.target.value за допомогою регулярки в INPUTS_REG_EXPS[e.target.name]
    if (INPUTS_REG_EXPS[e.target.name].test(e.target.value)) {
        e.target.classList.add('valid');
        e.target.classList.remove('invalid');
    } else {
        e.target.classList.add('invalid');
        e.target.classList.remove('valid');
    }

}

