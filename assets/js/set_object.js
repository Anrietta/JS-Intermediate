                // Об'єкт SET (SET object)

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set

//Множина set - зберігає тільки унікальні значення (вони не повинні повторюватись)
// Множина в математиці - це сукупність елементів в якій всі значення різні (не повторюються)

// Set - це колекція значень, обєкт що дозволяє зберігати унікальні значення будь-якого типу, хоч примітиви хоч посилання на обєкти
// Створюється за допомогою конструктора (так само як і map)
// Має властивість set.size - такий самий як в Array length (так само я і map)

// Об’єкт Set – це особливий тип колекції: “множина” значень (без ключів), де кожне значення може з’являтися тільки раз.

// Основні методи:

// new Set([iterable]) – створює Set, якщо аргументом виступає об’єкт-ітератор, тоді значення копіюються в Set.
// set.add(value) – додає нове значення до Set, повертає Set.
// set.delete(value) – видаляє значення з Set, повертає true, якщо value наявне в множині значень на момент виклику методу, інакше false.
// set.has(value) – повертає true, якщо value присутнє в множині Set, інакше false.
// set.clear() – видаляє всі значення множини Set.
// set.size – повертає кількість елементів в множині.
// Родзинкою Set є виклики set.add(value), що повторюються з однаковими значеннями value. Повторні виклики цього методу не змінюють Set. Це причина того, що кожне значення з’являється тільки один раз.


// Set має ті ж вбудовані методи, що і Map:

// forEach() - Функція в forEach у Set має 3 аргументи: значення ‘value’, потім знову те саме значення ‘valueAgain’, і тільки потім цільовий об’єкт. Значення з’являється в списку аргументів двічі для сумісності з map (ключ/значення)
// set.keys() – повертає об’єкт-ітератор для значень,
// set.values() – те ж саме, що set.keys(), для сумісності з Map,
// set.entries() – повертає об’єкт-ітератор для пар виду [значення, значення], присутній для сумісності з Map.



// При створенні Set в нього потрібно передати ітеративний обєкт (тобто будь який обєкт який містить Symbol.iterator)

const set1 = new Set();
console.log(set1);   // Set (0)[[Entries]]No properties size: 0[[Prototype]]: Set add: ƒ add()clear: ƒ clear()constructor: ƒ Set()delete: ƒ delete()difference: ƒ difference()entries: ƒ entries()forEach: ƒ forEach()has: ƒ has()intersection: ƒ intersection()isDisjointFrom: ƒ isDisjointFrom()isSubsetOf: ƒ isSubsetOf()isSupersetOf: ƒ isSupersetOf()keys: ƒ values()size: (...)symmetricDifference: ƒ symmetricDifference()union: ƒ union()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "Set"get size: ƒ size()[[Prototype]]: Object

const set2 = new Set ([1, 2, 3, 4, 5 ,6]);
console.log(set2);  // Set(6) {1, 2, 3, 4, 5, …} - виводить як і має бути 6 значень

// що буде якщо задати однакові значення :
const set3 = new Set ([0, 2, 3 , 0 , 2, 3]);
console.log(set3);  // Set(3) {0, 2, 3} - виводить лише унікальні, ті що повторні ігнорує і змінює сайз


// Методи SET (основні - застосовуються до екземплярів) :

// 1. метод add() - додати значення в  set - повертає set (множину)

    set1.add(10);
    console.log(set1);  // Set(1) {10} - в пустий set додали 10

    // можна використовувати чейнінг
    set1.add(11).add(12).add(13);
    console.log(set1);  // Set(4) {10, 11, 12, 13}

// 2. метод has() - перевірити, чи міститься значення в set - повертає boolean (true/false)

    console.log(set1.has(13));  // true
    console.log(set1.has(9));  // false

// 3. Зчитувати елементи з set неможливо, тому в ньому й нема ні ключа ні індекса ні методу get. 
//    Множина set потрібна якраз для того щоб відфільтровувати унікальні значення

// 4. метод delete() - видалити значення з set - повертає множину без видаленого символу і зміниьться сайз

    set1.delete(13);
    console.log(set1);  // Set(3) {10, 11, 12} 

// 5. метод clear() - очистити set повністю

    // set1.clear();
    // console.log(set1);  // Set(0) {size: 0}



// Вбудовані методи set (застосовуються до самого set):

// 1. forEach (for...of) - щоб перебрати set (set ітерабельний)
// Функція в forEach у Set має 3 аргументи: значення ‘value’, потім знову те саме значення ‘valueAgain’, і тільки потім цільовий об’єкт. 
// Значення з’являється в списку аргументів двічі для сумісності з map (ключ/значення)

set1.forEach((s, s_again, set) => console.log(s, s_again, set));  // 10 10 Set(3) {10, 11, 12}  11 11 Set(3) {10, 11, 12}  12 12 Set(3) {10, 11, 12}
set1.forEach((s) => console.log(s));  // 10 11 12

for (const item of set1) {
    console.log(item);  // 10 11 12
}


// 2. метод set.keys() - щоб отримати значення з set (для сумісності з map), повертає об`єкт SetIterator, який має властивість Symbol.iterator в ланцюжку прототипів і тому може ітеруватись/ перебиратись
console.log(set1.keys());  // SetIterator {10, 11, 12}

// 3. метод set.values() - також щоб отримати значення з set , повертає об`єкт SetIterator, який має властивість Symbol.iterator в ланцюжку прототипів і тому може ітеруватись/ перебиратись
console.log(set1.values());  // SetIterator {10, 11, 12}

// 4. метод set.entries() -  щоб отримати пару значення/значення з set (для сумісності з map), повертає об`єкт SetIterator, який має властивість Symbol.iterator в ланцюжку прототипів і тому може ітеруватись/ перебиратись
console.log(set1.entries());  // SetIterator {10 => 10, 11 => 11, 12 => 12}


        
