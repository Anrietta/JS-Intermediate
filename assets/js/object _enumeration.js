                // Перелічувані властивості, перебір об'єктів (Enumerated properties, object enumeration)

    // https://uk.javascript.info/property-descriptors#neperelichuvana-vlastivist
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
    // https://uk.javascript.info/keys-values-entries


// перераховуємо властивості в обєктаі за допомогою циклу for in

// const user = {
//     firstName: 'Test',
//     lastName: 'Testovich'
// };

// for(const key in user) {
//     console.log(`user[${key}] = ${user[key]}`);
// }
// console.log(user);


// можем перерахувати властивості масива за допомогою цикла for in, хоча для масивів краще використовувати цикл for of

// отже, цикл for in перелічує тільки перелічувані властивості (enumerable: true) власні та успадковані
// тобто наприклад властивість масиву length не потрапляє в цикл оскільки має прапорець по замовчуванню enumerable: false

// const arr = [1, 2, 3, 4, 5];

// for(const index in arr) {
//     console.log(`arr[${index}] = ${arr[index]}`);
// }
// console.log(arr);


// усі властивості обєкта і масива мають на властивостях та індексах спеціальні прапорці та дескриптори, які під капотом автоматично налаштовані на true
// тобто прапорці дозволяють нам записувати (writable), перелічувати в циклах (enumerable) та видаляти властивості (configurable). 
// їх можна змінити на значення false чим заборонити записувати (writable), зробити невидимим для цикла (enumerable ) чи заборини видаляти (configurable )
// змінити прапор чи дескриптор можна за допомогою методу Object.defineProperty.
// просто отрмати повну інформацію про ці прапори можна за доопоомогою методу getOwnPropertyDescriptor
// Повернене значення – це так званий об’єкт “дескриптор властивості”: він містить значення та всі прапори.


// Різниця дуже проста:
// Прапорці – це окремі характеристики/налаштування властивості (value, writable, enumerable, configurable - чи можна змінювати, чи видно, чи можна налаштовувати).
// Дескриптор – це ОБ'ЄКТ, який МІСТИТЬ усі ці прапорці (та значення або геттери/сеттери) для однієї властивості.
// Коли ви використовуєте Object.defineProperty() для зміни налаштування прапорця, ви передаєте саме дескриптор, щоб описати, як повинна поводитися властивість.


// Приклад :

// function User1 (name, surname, age, isMale, email, isSubscribed) {
//     this.firstName = name;
//     this.lastName = surname;
//     this.age = age;
//     this.isMale = isMale;
//     this.email = email;
//     this.isSubscribed = isSubscribed;
// }

// User1.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName
//     }`;
// };

// const user1 = new User1('Test', 'Testovych', 20, true, 't@mail.com', true);

// for (let key in user1) {
//     console.log('key :>> ', key);   // тут нам виведе всі властивості від конструктора (тобто власні властивості) + метод getFullName який зашитий в прототип і так він повитягує всі перелічувані властивості у всьому ланцюжку прототипів (що є успадкованими властивостями від прототипа)
// }

// Ось це виведення методів власних чи прототипів часто заважатиме нам в роботі коли нам потрібно отримати властивості а не методи
// і щоб виключити потрапляння перелічуваних методів не потрібно лізти в прапори та дескриптори (чіпати прапорці насправді ми будемо дуууже рідко і це не той випадок) є простіші способи


// 1 метод - перевірити які властивості є власними а які успадковані через метод прототипу Object властивість hasOwnProperty
// тобто модна впаяти додаткову перевірку

// for (const key in user1) {
//     if (user1.hasOwnProperty(key)) {
//         console.log('Own key :>> ', key);  // тут нам виведе всі властивості від конструктора (тобто власні) без властивостей і методів з прототипів (успадкованих)
//     }
// }

// може просто в консолі перевірити чи властивість власна чи успадкована
// console.log(user1.hasOwnProperty('email'));  // true
// console.log(user1.hasOwnProperty('getFullName'));  // false
// console.log(user1.hasOwnProperty('Hello'));  // false  - для неіснуючих властивостей результат буде такий самий як і для тих що успадковані (треба бути обережними)


// 2 метод за допомогою статичного методу Object.keys - який повертає масив з власних перелічуваних властивостей переданого обєкта в тому ж порядки ніби по ним пройшовся цикл for...in. Різниця  в тому, що цикл for...in поверне методи та властивості в т.ч. з прототипів а не лише власні

    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

    // console.log('Object.keys(user1) :>> ', Object.keys(user1));  // отримаємо лише власні властивості з конструктора

    // або так за допомогою методу масивів forEach
    // Object.keys(user1).forEach(uKey => console.log(`user[${uKey}] = ${user1[uKey]}`)); // отримаємо лише власні властивості з конструктора у форматі user[firstName] = Test

    // + ще є Object.values() аналогічний до Object.keys()
    // різниця в тому що Object.values() повертає масив ЗНАЧЕНЬ власних властивостей обєкта (не успадкованих)
    // console.log(Object.values(user1)); // ['Test', 'Testovych', 20, true, 't@mail.com', true]
    // console.log(Object.keys(user1)); //['firstName', 'lastName', 'age', 'isMale', 'email', 'isSubscribed']

    // + ще є статичний метод Object.entries() аналогічний до Object.values() та Object.keys()
    // різниця  тому, що він повертає масив, в середдині якого будуть масиви (ключ:значення) обєкта
    // воно виглядає дивно, але воно потрібно коли ми будемо перетворювати типи даних (ми ще цього не вчили), крім обєктів і масивів є ще й інші про які ми ще не вчили (напр з MAP в обєкт і навпаки)

    // console.log(Object.entries(user1));   //[Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
                                            // 0: (2) ['firstName', 'Test']
                                            // 1: (2) ['lastName', 'Testovych']
                                            // ...
                                            // 5: (2) ['isSubscribed', true]




// Задачка :
// Задати обєкт телефона і вивести масив його ключів(властивостей) і масив значень цих властивостей

// const phone = {
//     brand: 'Samsung',
//     model: 'c30',
//     year: 2018,
//     color: 'olive',
//     size: 7
// }

// console.log(Object.keys(phone), Object.values(phone));