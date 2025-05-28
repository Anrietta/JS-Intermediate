                // Перелічувані властивості, перебір об'єктів (Enumerated properties, object enumeration)

    // https://uk.javascript.info/property-descriptors#neperelichuvana-vlastivist
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
    // https://uk.javascript.info/keys-values-entries


// перераховуємо властивості в обєктаі за допомогою циклу for in

const user = {
    firstName: 'Test',
    lastName: 'Testovich'
};

for(const key in user) {
    console.log(`user[${key}] = ${user[key]}`);
}
console.log(user);


// можем перерахувати властивості масива за допомогою цикла for in, хоча для масивів краще використовувати цикл for of

// отже, цикл for in перелічує тільки перелічувані властивості (enumerable: true) власні та успадковані
// тобто наприклад властивість масиву length не потрапляє в цикл оскільки має прапорець по замовчуванню enumerable: false

const arr = [1, 2, 3, 4, 5];

for(const index in arr) {
    console.log(`arr[${index}] = ${arr[index]}`);
}
console.log(arr);


// усі властивості обєкта і масива мають на властивостях та індексах спеціальні прапорці та дескриптори, які під капотом автоматично налаштовані на true
// тобто прапорці дозволяють нам записувати (writable), перелічувати в циклах (enumerable) та видаляти властивості (configurable). 
// їх можна змінити на значення false чим заборонити записувати (writable), зробити невидимим для цикла (enumerable ) чи заборини видаляти (configurable )
// змінити прапор чи дескриптор можна за допомогою методу Object.defineProperty.
// просто отрмати повну інформацію про ці прапори можна за доопоомогою методу getOwnPropertyDescriptor


