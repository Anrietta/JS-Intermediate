            // Тип даних Symbol. Ітеровані колекції (Symbol data type. Iterative collections)

            // https://uk.javascript.info/symbol
            // https://uk.javascript.info/iterable
            // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Iteration_protocols
            // https://refactoring.guru/uk


// Symbol - це примітивний тип даних, який в чистому вигляді використовується дуже рідко.
// Це такий тип даних який генерує завідомо унікальні значення, випадкові, але ми їх не можемо побачити анвіть якщо виведемо їх в консоль
// Можна в дужки доати певний ідентифікатор, щоб знати для чого він треба, але всерівно виведеться лише назва ідентифікатора (ключа)
// назва ідентифікатора не має значення, вони можуть бути всюди однакові, але це всерівно будуть різні Symbol, навіть якщо ми їх порівняємо
// Використовується Symbol для певних секюрних властивостей, яке ми не зможемо прочитати ніде якщо ми не знаємо ключа

const s = Symbol();
console.log(s);  // Symbol()

const n = Symbol(123);
console.log(n);  // Symbol(123)


const n2 = Symbol(123);
console.log(n);  // Symbol(123)

console.log(n === n2);  // false

// два Symbol не можуть бути однакові з імовірністю 99,99%, оскільки він генерує абсолютно випадкові значення і імовірність що коли небуть вони співпадуть дуже низька
Symbol() === Symbol()
false


console.log(typeof n);  // symbol - окремий примітивний тип даних

const keyInOptionObj = Symbol('key');  // в якості ключів обєктів можна використовувати String або Symbol (див.обєкт option)

const option = {  //
    url: 'http://some.address.com',
    [keyInOptionObj]: 'kndcvljuiyhdbniuqioweyuioi5fc51vv48wd952df'  // назву ключа Symbol берем в [] щоб зробити її властивістю обєкта, і зберігаємо в ній наприклад якийсь хеш засекюрений для доступу до чогось
}
for (const key in option) {
    console.log(key);  // url  - якщо ми захочемо перебрати наш обєкт, який містить Symbol ми отримаємо всі властивості крім Symbol, при тому що він виглядає так само як перелічувані властивостіі обєкта  у властивостях
                        // але якщо ми весь обєкт подивимся в консолі то там буде видно Symbol
}

console.log(option);  // {url: 'http://some.address.com', Symbol(key): 'kndcvljuiyhdbniuqioweyuioi5fc51vv48wd952df'}




// Приклад використання Symbol для генерації унікальних значень:

                            // назва змінної у множині - тому що цей обєкт містить набір або колекцію пов'язаних між собою значень. Тобто це не одна тема а набір всіх можливих тем
const THEMES = {            // назва змінної у верхньому регістрі - тому що це правило, що повідомляє що її значення НЕ повинно змінюватись (фіксований незмінний набір значень, або одне значення )
    LIGHT: Symbol('light'),
    DARK: Symbol('dark')
};

const theme = THEMES.DARK;  // назва змінної в нижньому регістрі - тому що це поточний вибір або стан з набору THEMES, яка зберігає одну конкретну тему з колекції

switch (theme) {
    case THEMES.DARK:
        console.log('THEMES.DARK :>> ', THEMES.DARK);
        break;
    case THEMES.LIGHT:
        console.log('THEMES.LIGHT :>> ', THEMES.LIGHT);
        break;
    default:
        console.log('unexpected value');
}



// ------------------------------------------------------------------------------------------------------------------------------------------------------------


                // Ітератор (Iterator)

// https://uk.javascript.info/iterable
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Iteration_protocols
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
// https://refactoring.guru/uk/design-patterns/iterator


// Symbol надає додаткову можливість виконати перебір цілої колекції (приміняється в циклах for...of)
// Symbol.iterator - це протокол, алгоритм, як будь яку колекцію зробити такою щоб її мождна було використовувати в циклі for...of

// Ітератор -  це інтерфейс,я кий дає доступ до елементів колекції (масива чи контейнера та навігацію по ним)
// тобто ІТЕРАТОР - це спосіб як можна перебрати всі елементи колекції

// Ітератор (Iterator) в JavaScript — це об'єкт, який дозволяє вам послідовно перебирати елементи колекції (масиву, рядка, мапи тощо) один за одним, при цьому він пам'ятає свою поточну позицію.

// Простими словами, ітератор — це як вказівник, який знає, де він зараз знаходиться у списку елементів і як перейти до наступного елемента.

// Ключові особливості та "протокол ітератора":
// Щоб об'єкт був ітератором, він повинен реалізовувати метод next().

// Метод next():
// Це єдиний обов'язковий метод для ітератора.
// Кожен виклик next() повертає об'єкт з двома властивостями:
// value: Поточний елемент з колекції.
// done: Булеве значення (true або false).
// false, якщо є ще елементи для перебору.
// true, якщо елементи закінчилися.
// Як це працює (ітерабельні та ітератори):
// Важливо розрізняти ітерабельні об'єкти (iterables) та ітератори (iterators):

// Ітерабельний об'єкт (Iterable): Це об'єкт, який можна перебрати. Він має спеціальний метод [Symbol.iterator](), який повертає ітератор.

// Приклади: Array (масиви), String (рядки), Map, Set.
// Коли ви використовуєте цикл for...of або спред-оператор (...) з масивом, вони працюють саме з ітерабельними об'єктами, отримуючи від них ітератор.
// Ітератор (Iterator): Це сам об'єкт, який повертається методом [Symbol.iterator]() і має метод next(). Він виконує фактичний перебір.

// Навіщо вони потрібні?
// Стандартизація перебору: Ітератори надають уніфікований спосіб доступу до елементів будь-якої колекції, незалежно від її внутрішньої структури.
// Основа для for...of: Цикл for...of (найзручніший спосіб перебору в JS) працює саме завдяки протоколу ітератора.
// Ефективність: Дозволяють перебирати елементи по одному, не завантажуючи всю колекцію в пам'ять одночасно (особливо важливо для великих або нескінченних послідовностей).
// Приклад (як це виглядає "під капотом" for...of):

// JavaScript

// const myArray = [1, 2, 3];

// // Те, що відбувається "під капотом" for...of:
// const myIterator = myArray[Symbol.iterator](); // Отримуємо ітератор для масиву

// console.log(myIterator.next()); // { value: 1, done: false }
// console.log(myIterator.next()); // { value: 2, done: false }
// console.log(myIterator.next()); // { value: 3, done: false }
// console.log(myIterator.next()); // { value: undefined, done: true } (більше немає елементів)


// Отже перебирати циклом for...of мождна перебирати ті обєкти в яких є Symbol.iterator.
// У JavaScript багато вбудованих об'єктів за замовчуванням мають метод [Symbol.iterator]() і, отже, є ітерабельними, що дозволяє перебирати їх за допомогою циклу for...of.

// Щоб перевірити чи можна якийсь обєкт проітерувати циклом fjr...of, можна ввсети його в консоль і глянути в Prototype чи має він властивість Symbol(Symbol.iterator). Якщо є то можна, якщо нема то неможна

// Ось основні з них:
// 1. Масиви (Array):

// const arr = [1, 2, 3];
// for (const item of arr) {
//     console.log(item); // 1, 2, 3
// }

// 2. Рядки (String): Перебирає символи рядка.

// const str = "hello";
// for (const char of str) {
//     console.log(char); // h, e, l, l, o
// }

// 3. Map (Map): Перебирає пари [ключ, значення].

// const myMap = new Map([['a', 1], ['b', 2]]);
// for (const entry of myMap) {
//     console.log(entry); // ['a', 1], ['b', 2]
// }
// // Або деструктуризація:
// for (const [key, value] of myMap) {
//     console.log(key, value); // a 1, b 2
// }

// 4. Set (Set): Перебирає унікальні значення.

// const mySet = new Set([1, 2, 2, 3]);
// for (const item of mySet) {
//     console.log(item); // 1, 2, 3
// }

// 5. Типізовані масиви (Typed Arrays): Наприклад, Int8Array, Uint8Array, Float64Array тощо.

// const typedArr = new Int32Array([10, 20, 30]);
// for (const num of typedArr) {
//     console.log(num); // 10, 20, 30
// }


// 6. Об'єкт arguments: Псевдомасив, доступний усередині функцій, який містить аргументи, передані функції.

// function sum() {
//     for (const arg of arguments) {
//         console.log(arg);
//     }
// }
// sum(1, 2, 3); // 1, 2, 3

// 7. NodeList та інші колекції DOM: Об'єкти, повернуті такими методами, як document.querySelectorAll().

// // У браузері
// const paragraphs = document.querySelectorAll('p');
// for (const p of paragraphs) {
//     console.log(p.textContent);
// }

// 8. Об'єкти-генератори (Generator objects): Об'єкти, які повертаються генераторними функціями.

// function* generateNumbers() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
// const generator = generateNumbers();
// for (const num of generator) {
//     console.log(num); // 1, 2, 3
// }

// Зверніть увагу: Звичайні об'єкти ({ key: 'value' }) НЕ є ітерабельними за замовчуванням і не можуть бути безпосередньо перебрані за допомогою for...of. 
// Для їх перебору потрібно використовувати Object.keys(), Object.values() або Object.entries(), які повертають масиви (а масиви вже є ітерабельними).