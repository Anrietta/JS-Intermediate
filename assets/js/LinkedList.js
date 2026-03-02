// // Клас для створення одного вузла
// class Node {
//   constructor(value) {
//     this.value = value; // Самі дані
//     this.next = null;   // Посилання на наступний вузол (спочатку нікого немає)
//   }
// }

// // Клас для створення зв'язного списку
// class LinkedList {
//   constructor() {
//     this.head = null; // Список порожній, голови немає
//   }

//   // Метод для додавання в кінець (схоже на push)
//   add(value) {
//     const newNode = new Node(value);

//     // Якщо список порожній, новий вузол стає "головою"
//     if (this.head === null) {
//       this.head = newNode;
//     } else {
//       // Якщо не порожній, треба дійти до останнього вузла
//       let current = this.head;
//       while (current.next !== null) {
//         current = current.next; // Перестрибуємо на наступний вузол
//       }
//       // Коли знайшли останній (у якого next === null), чіпляємо до нього новий
//       current.next = newNode;
//     }
//   }

//   // Метод для виводу всіх елементів (щоб ми бачили результат)
//   print() {
//     let current = this.head;
//     let result = "";
//     while (current) {
//       result += current.value + " -> ";
//       current = current.next;
//     }
//     console.log(result + "null");
//   }
// }

// const list = new LinkedList();
// list.add("Київ");
// list.add("Львів");
// list.add("Одеса");

// list.print(); 
// // Результат у консолі: Київ -> Львів -> Одеса -> null




// Завдання: "Список справ (ToDo List)"
// Твоя мета — створити однозв'язний список (Singly Linked List), 
// який буде імітувати чергу справ.Що треба зробити:Створити клас 
// Node:Має властивість task (це будуть наші дані — текст справи).
// Має властивість next (посилання на наступний вузол). 
// Створити клас ToDoList:Має властивість head (початок списку).
// Реалізувати метод addTask(text): додає нову справу в кінець списку 
// (пам'ятай про цикл while, щоб знайти останній вузол, або використай tail, 
// якщо хочеш спробувати варіант $O(1)$).Реалізувати метод showTasks(): 
// виводить у консоль усі справи по порядку.Твій стартовий шаблон:
// Скопіюй це собі в редактор і допиши логіку там, де стоять коментарі.


// Рівень "Зірочка" ⭐ (якщо хочеш ще трохи розім'ятися)
// Спробуй реалізувати метод deleteFirst().Він має видаляти першу 
// справу (Голову).Підказка: тобі треба просто сказати списку, 
// що тепер this.head — це той, хто був другим.
// Це та сама операція $O(1)$, про яку ми говорили.
// Не забудь подумати, що станеться, якщо список вже порожній 
// (якщо this.head === null).



// клас для створення вузла (ми їх створюватимемо в класі TodoList)
// class Node {
//   constructor(task) {
//     this.task = task;    // дані що зберігаються у вузлі
//     this.next = null;   // для старту пустий (бо ще нема наступного вузла)
//   }
// }

// class ToDoList {
//   constructor() {
//     this.head = null;   // голова для старту пуста (бо список ще пустий)
//   }

//   // метод для додавання вузлів в кінець списку
//   addTask(text) {
//     const newNode = new Node(text);
//     // Твій код тут:
//     // 1. Якщо голова порожня — нова справа стає головою.
//     if (this.head === null) {
//         this.head = newNode;
//     } else {
//         // 2. Якщо ні — знайди останній вузол і приєднай до нього новий.
//         let current = this.head;
//         while(current.next !== null) {
//             current = current.next;
//         }
//         // Коли знайшли останній (у якого next === null), чіпляємо до нього новий
//         current.next = newNode;

//     }
//   }

//   deleteFirst() {
//     let current = this.head;
//     if (current) {
//         this.head = current.next;
//     }
//   }

//     // Додамо метод clear(), щоб видалити все одним махом

//     clear() {
//         this.head = null; // відрізаємо голову і весь список втрачає звязки
//     }

//   // метод для виведення списку тасок в консоль
//   showTasks() {
//     // Твій код тут:
//     // Пройдися циклом по всьому списку і виведи кожну справу в консоль.
//     let current = this.head;
//     let result = '';
//     while(current) {
//         result += current.task + ' ' + '->' + ' ';
//         current = current.next;
//     }
//     console.log(result + current);

// }
// }

// // ПЕРЕВІРКА:
// const myTasks = new ToDoList();
// myTasks.addTask("Купити молоко");
// myTasks.addTask("Помити кота");
// myTasks.addTask("Вивчити Linked List");

// myTasks.showTasks();   // Купити молоко -> Помити кота -> Вивчити Linked List -> null
// // Маленька підказка:Коли будеш писати showTasks, згадай: ми починаємо з 
// // let current = this.head, а в циклі щоразу "перестрибуємо" далі: 
// // current = current.next.

// // видаляємо перший вузол списку (голову) зробивши другий вузол головою
// myTasks.deleteFirst();
// myTasks.showTasks();    // Помити кота -> Вивчити Linked List -> null

// // видалимо увесь список
// myTasks.clear();
// myTasks.showTasks();    // null




// Завдання: "Список улюблених кольорів (Syngly Linked List)"

// стврюю клас для створення вузлів

// class Node {
//     constructor(color) {
//         this.value  = color;
//         this.next = null;
//     } 
// }

// // створюю фабрику зі стсвореня звязного списку
// class colorLinkedList {
//     constructor() {
//         this.head = null;
//     }

//     addNode(value) {
//         const newColor = new Node(value);

//         if (this.head === null) {
//             this.head = newColor;
//         } else {
//             let current = this.head;
//             while(current.next !== null) {
//                 current = current.next;
//             }
//             current.next = newColor;
//         }
//     }

//     deleteFirstNode() {
//         if (this.head !== null) {
//             this.head = this.head.next;
//         }

//     }

//     clearAllNodes() {
//         this.head = null;
//     }

//     print() {
//         let current = this.head;
//         let result = '';

//         while(current) {
//             result += current.value + ' ' + '=>' + ' ';
//             current = current.next;
//         }

//         console.log(result + current);
//     }
// }

// const myFavColors = new colorLinkedList();

// myFavColors.addNode('yellow');
// myFavColors.addNode('green');
// myFavColors.addNode('blue');
// myFavColors.addNode('red');

// myFavColors.print();   // yellow => green => blue => red => null

// myFavColors.deleteFirstNode();
// myFavColors.print();     // green => blue => red => null

// myFavColors.clearAllNodes();
// myFavColors.print();    // null





// Завдання: "Список улюблених чисел (Syngly Linked List) + Хвіст"

// class Node {
//     constructor(value) {
//         this.num = value;
//         this.next = null;
//     }
// }

// class NumLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     addHeadNode(value) {
//         const newNum = new Node(value);
//         if (this.head === null) {
//             this.head = newNum;
//             this.tail = newNum;
//         } else {
//             newNum.next = this.head;  // новий вузол посилаиметься на попередню голову
//             this.head = newNum;  // новий вузол стане новою головою
//         }
//     }

//     addTailNode(value) {
//         const newNum = new Node(value)
//         if (this.head === null) {
//             this.head = newNum;
//             this.tail = newNum;
//         } else {
//             this.tail.next = newNum;
//             this.tail = newNum;
//             // this.tail.next = null;  // це зайве, значення null приходить разом з новим вузлом з конструктора 
//         }
//     }

//     print() {
//         let current = this.head;
//         let result = '';

//         while(current) {
//             result += current.num + '->';
//             current = current.next;
//         }
//         console.log(result + current);

//     }
// }

// const myNums = new NumLinkedList();
// myNums.addTailNode(1);
// myNums.addTailNode(3);
// myNums.addTailNode(5);
// myNums.addTailNode(7);
// myNums.addTailNode(9);

// myNums.print();  // 1->3->5->7->9->null

// myNums.addHeadNode(-1);
// myNums.addHeadNode(-3);
// myNums.addHeadNode(-5);
// myNums.addHeadNode(-7);
// myNums.addHeadNode(-9);

// myNums.print();  // -9->-7->-5->-3->-1->1->3->5->7->9->null



// Завдання: "Плейлист (Doubly Linked List)"
// Уяви, що ми робимо музичний плеєр. 
// У ньому важливо мати можливість перемкнути на наступну пісню і повернутися 
// до попередньої.

// Що треба зробити:
// Клас SongNode:
// title (назва пісні).
// next (посилання вперед).
// prev (посилання назад).

// Клас Playlist:
// head та tail.
// Метод addSong(title): додає пісню в кінець. (Тут треба правильно "зшити" next 
// останнього і prev нового!).
// Метод showForward(): виводить список пісень від першої до останньої.
// Метод showBackward(): виводить список від останньої до першої (використовуючи prev).
// На що звернути увагу:
// Коли додаєш вузол, у тебе тепер два завдання: сказати новому вузлу, хто його "тато" 
// (prev), і сказати старому хвосту, хто його "дитина" (next).

// Завдання: «Вставити пісню ПІСЛЯ конкретної пісні»
// Додати метод для додавання пісні після конкретної пісні.
// Уяви, що ти хочеш додати ремікс одразу після оригіналу. Нам треба:
// Знайти пісню, після якої ми робимо вставку (targetTitle).
// Створити нову пісню.
// Якщо ця пісня — хвіст, ми просто викликаємо твій addSong().
// Якщо це середина — ми «розсовуємо» вузли.
// Логіка «розсування» (4 кроки):
// Нова пісня має вказати prev на поточну пісню.
// Нова пісня має вказати next на наступну пісню.
// Наступна пісня має переставити свій prev на нову пісню.
// Поточна пісня має переставити свій next на нову пісню.

// Додати метод для видалення останнього вузла.Уяви, що ми хочемо видалити останню пісню (Help!). У двозв'язному списку це зробити 
// набагато легше, ніж в однозв'язному. Згадай: в однозв'язному нам доводилося бігти від 
// самої голови, щоб знайти "передостаннього", а тут...

// Запитання: Як ти думаєш, маючи прямий доступ до this.tail, як нам швидко 
// видалити останній елемент і зробити "Help!" недосяжним, а "Let It Be" — новим хвостом?

// Додати метод для видалення першого вузла

// Додати метод для видалення з будь якого місця за назвою пісні

// Додати метод для очищення всього списку

// Твій стартовий шаблон:

// class SongNode {
//   constructor(title) {
//     this.title = title;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class Playlist {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   addSong(title) {
//     const newSong = new SongNode(title);
//     if (!this.head) {
//       this.head = newSong;
//       this.tail = newSong;
//     } else {
//       // ПІДКАЗКА: 
//       // 1. Нова пісня має знати, хто був до неї (this.tail)
//       // 2. Старий хвіст має знати, що за ним тепер є нова пісня
//       // 3. Оновити сам хвіст
//         this.tail.next = newSong;
//         newSong.prev = this.tail;
//         this.tail = newSong;
//     }
//   }

//   insertAfter(targetTitle, newTitle) {
//     if (!this.head) return;  // якщо список пустий - виходим

//     let current = this.head;  // починаєм шукати з голови

//     // поки current!==null та назва пісні не дорівнює targetTitle переходим до наступного вузла
//     while(current && current.title !== targetTitle) {
//         current = current.next;
//     }

//     if (!current) return;  // якщо не знайшли пісню - виходим

//     // якщо знайшли пісню і вона хвіст то викликаєм функцію додати пісню в хвіст
//     if (current === this.tail) {
//         this.addSong(newTitle);  
//         return;  // і виходим з функції
//     }

//     // якщо ми дійшли сюди значить список не пустий, пісню знайшли і вона не хвіст
//     // створимо обєкт нової пісні і додамо її після шуканої пісні
//     const newSong = new SongNode(newTitle);

//     newSong.prev = current;  // нова пісня має вказати prev на поточну пісню
//     newSong.next = current.next;  // нова пісня має вказати next на наступну пісню
//     current.next.prev = newSong; // Наступна пісня має переставити свій prev на нову пісню
//     current.next = newSong; // Поточна пісня має переставити свій next на нову пісню
//   }

//   removeLastSong() {
//     if (!this.tail) return;  // якщо список порожній - нічого не робим

//     this.tail = this.tail.prev;  // робимо попередній елемент новим хвостом

//     // Якщо після попереднього рядка коду в списку ще хтось залишається, тобто
//     // в списку було > 1 вузла
//     if (this.tail) {
//         this.tail.next = null;
//     } else {
//         // а якщо в списку було < 1 вузла (тобто був лише 1 елемент) 
//         this.head = null; // обнуляємо і голову, щоб весь список став зовсім порожнім
//     }
//   }

//   removeFirstSong() {
//     if (!this.head) return;  // якщо список пооржній, виходжу з функції

//     this.head = this.head.next;  // якщо список нне порожній то роблю головою наступний елемент

//     // якщо в списку більше ніж 1 вузол
//     if (this.head) {
//         this.head.prev = null;  // обнуляю новій голові prev
//     } else {
//         this.tail = null; // інакше обнуляю хвіст щоб зробити список зовсім порожнім
//     }
//   }

//   removeByTitle(title) {
//     if (!this.head) return;  // якщо список пустий - виходим

//     let current = this.head;  // якщо список не пустий то починаємо з голови проходитись по циклу

//     // поки current !== null та title не збігається ми будемо рухатись до настпуного вузла
//     while (current && current.title !== title) {
//         current = current.next
//     }

//     // якщо дійшли до кінця спсику і не знайшли те що шукали - виходим
//     if (!current) return;

//     // якщо знайшли що шукали, і ця пісня є головою, то просто викличем метод видалення голови
//     if (current === this.head) {
//         this.removeFirstSong();
//         return;
//     }

//     // якщо знайшли що шукали, і ця пісня є хвостом, то просто викличем метод видалення хвоста
//     if (current === this.tail) {
//         this.removeLastSong();
//         return;
//     }

//     // якщо ми дійшли сюди, значить ми знайшли те що шукали, і це не голова і не хвіст!

//     // тоді для попереднього вузла, наступним робимо того хто йшов після current
//     current.prev.next = current.next;
//     // для наступного вузла попереднім робимо того хто йшов перед current
//     current.next.prev = current.prev;

//     // ми розриваємо зв'язки з current і garbage collector його видалить
//     // наша робота лише не посилатись на нього щоб він самовидаливсчя з списку
//   }

//   clearAllSongs() {
//     // у двозв'язних спсиках щоб очистити весь список за раз потрібно обнулити і head і tail
//     // тому що вони обидва є точками входу в список (на відміну від однозв'язного списку, 
//     // в якому вхід лише один через head)
//     this.head = null;
//     this.tail = null;
//   }

//   showForward() {
//     let current = this.head;
//     let result = "Плейлист (вперед): ";
//     while (current) {
//       result += current.title + " <-> ";
//       current = current.next;
//     }
//     console.log(result + "null");
//   }

//   showBackward() {
//     // Твій код тут:
//     // Почни з this.tail і йди по current.prev
//     let current = this.tail;
//     let result = 'Плейлист (назад): ';
//     while(current) {
//         result += current.title + '<->';
//         current = current.prev;
//     }
//     console.log(result + 'null');
//   }
// }

// // ПЕРЕВІРКА:
// const myMusic = new Playlist();
// myMusic.addSong("Yesterday");
// myMusic.addSong("Let It Be");
// myMusic.addSong("Do it");
// myMusic.addSong("La la la");
// myMusic.addSong("Help!");

// // myMusic.removeLastSong();
// // myMusic.removeFirstSong();
// // myMusic.clearAllSongs();
// myMusic.removeByTitle('Do it')
// myMusic.insertAfter('La la la', 'Amandish')


// myMusic.showForward();
// myMusic.showBackward();




// Завдання: "Колесо Фортуни" (Circular Doubly Linked List)
// Уяви, що ми створюємо гру "Колесо Фортуни". Стрілка стоїть на одному секторі, 
// і ми можемо крутити колесо як вправо, так і вліво. Коли ми доходимо до останнього 
// сектора, наступним знову стає перший.

// Що тобі потрібно написати:
// Клас SectorNode:
// value (наприклад, сума грошей: 100, 500, "Bankrupt").
// next та prev.
// Клас FortuneWheel:
// head (сектор, на якому зараз стрілка).
// tail (потрібен для зручності додавання нових секторів).
// Метод addSector(value): додає новий сектор.
// Важливо: Якщо це перший сектор — він вказує сам на себе.
// Важливо: Якщо вже є сектори — новий вставляється між tail та head, замикаючи коло.
// Метод spin(steps, direction):
// Приймає кількість кроків (steps) та напрямок ('forward' або 'backward').
// Пересуває this.head на вказану кількість кроків по колу.
// Виводить у консоль: "Стрілка зупинилася на: [value]".
// Приклад роботи:


// class SectorNode {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//         this.prev = null;

//     }
// }

// class FortuneWheel {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     addSector(value) {
//         const newSector = new SectorNode(value);

//         // якщо список пустий то робим головою новий сектор (і хвостом)
//         // інакше новий сектор буде новим хвостом поєднаним з головою
//         if (!this.head) {
//             this.head = newSector;
//             this.tail = newSector;
//             // ЗАМИКАННЯ кільця: навіть один елемент має знати про себе
//             newSector.next = newSector;
//             newSector.prev = newSector
//         } else {
//             // Новий сектор вклинюється між хвостом і головою
//             newSector.prev = this.tail; // новий хвіст зєднується з старим хвостом
//             newSector.next = this.head;  // новий хвіст зєднується з головою

//             this.tail.next = newSector;   // старий хвіст зєднується з новим хвостом
//             this.head.prev = newSector;   // голова зєднується з новим хвостом

//             this.tail = newSector;  // хвостом стає новий сектор
//         }

//         // варіант з більш чистим if...else і замиканням кільця
//         // if (!this.head) {
//             //     this.head = newSector;
//             //     this.tail = newSector;
//             // } else {
//             //     this.tail.next = newSector;
//             //     newSector.prev = this.tail;
//             //     this.tail = newSector;
//             // }

//             // // УНІВЕРСАЛЬНЕ ЗАМИКАННЯ кільця:
//             // // Працює завжди, незалежно від кількості елементів (хоч 1 хоч 100)
//             // this.tail.next = this.head;
//             // this.head.prev = this.tail;
//     }

//     spin(steps, direction) {
//         let stepsCounter = 0;
//         let current = this.head;

//         if (!current) return;

//         while(current && stepsCounter !== steps) {
//             if (direction === 'forward') {
//                 current = current.next;
//                 stepsCounter++;
//             }
//             if (direction === 'backward') {
//                 current = current.prev;
//                 stepsCounter++;
//             }
            
//         }
//         // Оновлюємо положення стрілки (голову), щоб наступний спін почався звідси
//         this.head = current;  
//         console.log('Стрілка зупинилась на :' + current.value);
//     }

//     print() {
//         if (!this.head) return;

//         let current = this.head;
//         let result = '';

//         do {
//             result += current.value + '=>';
//             current = current.next;
//         } while (current !== this.head) 

//         console.log(result + '(back to ' + this.head.value + ')');

//     }
// }


// const wheel = new FortuneWheel();
// wheel.addSector(100);
// wheel.addSector(500);
// wheel.addSector(0); // Bankrupt

// wheel.print();


// wheel.spin(1, 'forward'); // Має вивести 500
// wheel.spin(2, 'forward'); // Пройде 0 і знову зупиниться на 100 (коло замикається!)
// wheel.spin(1, 'backward'); // Повернеться на 0




// Завдання: «Карусель браузера» (Tab Carousel)
// Уяви, що ти пишеш логіку для перемикання вкладок (Tabs) у браузері за допомогою 
// клавіш Ctrl + Tab (вперед) та Ctrl + Shift + Tab (назад). Якщо ти доходиш до останньої 
// вкладки й натискаєш «вперед» — ти опиняєшся на першій.

// Що потрібно написати:
// Клас TabNode:
// url (адреса сайту, наприклад "https://www.google.com/search?q=google.com").
// next та prev.
// Клас TabCarousel:
// currentTab (це буде наш аналог head, вкладка, яка зараз відкрита).
// tail (остання додана вкладка).
// Метод openTab(url): додає нову вкладку в кінець.
// Важливо: Використовуй ту універсальну формулу замикання, яку ми обговорили 
// (this.tail.next = this.currentTab тощо).
// Метод nextTab(): перемикає currentTab на наступну і виводить: 
// "Зараз відкрита вкладка: [url]".
// Метод prevTab(): перемикає currentTab на попередню і виводить: 
// "Зараз відкрита вкладка: [url]".
// Метод showAllTabs(): виводить весь список вкладок по колу один раз.
// Умова «з нуля»:
// Спробуй написати все в новому файлі (або просто все видали), не підглядаючи 
// в попередній код «Колеса Фортуни».
// Маленька порада: Коли в методі openTab створюєш першу вкладку, не забудь призначити
//  її і в currentTab, і в tail.


// class TabNode {
//     constructor(url) {
//         this.url = url;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class TabCarousel {
//     constructor() {
//         this.currentTab = null;  // аналог head
//         this.tail = null;
//     }

//     openTab(url) {
//         const newTab = new TabNode(url);

//         // якщо список пустий то робим новий вузол головою і хвостом
//         if (!this.currentTab) {
//             this.currentTab = newTab;
//             this.tail = newTab;
//         } else {
//             // інакше 
//             this.tail.next = newTab;  // поточний хвіст зєднуємо з новим вузлом 
//             newTab.prev = this.tail;   // новий вузол зєднуємо з поточним хвостом
//             this.tail = newTab;  // робимо новий вузол хвостом
//         }
//         this.tail.next = this.currentTab;    // новий хвіст зєднуємо з головою (навіть якщо в списку лише один вузол)
//         this.currentTab.prev = this.tail;   // голову зєднуємо з новим хвостом (навіть якщо в списку лише один вузол)
//     }

//     // метод щоб перейти на наступну вкладку
//     nextTab() {
//         let current = this.currentTab;  // починаємо з голови

//         if (!current) return;  // якщо список пустий - виходимо

//         current = current.next;  // інакше переходим до наступного вузла

//         this.currentTab = current;  // робимо головою наступний вузол
//         // це дає змогу утворити динамічне кільце з вузлів, 
//         // і тоді метод ShowAllTabs буде завжди показувати всі елементи по колу,
//         //  але першим буде той який зараз в голові

//         console.log(`Зараз відкрита вкладка: [ ${this.currentTab.url}]`);

//     }

//     // метод щоб перейти на попередню вкладку
//     prevTab() { 
//         let current = this.currentTab;  // починаємо з голови

//         if (!current) return;  // якщо список пустий - виходимо

//         current = current.prev;  // інакше переходимо до попереднього вузла

//         this.currentTab = current;  // робим головою попередній вузол 
//         // це дає змогу утворити динамічне кільце з вузлів, 
//         // і тоді метод ShowAllTabs буде завжди показувати всі елементи по колу,
//         //  але першим буде той який зараз в голові

//         console.log(`Зараз відкрита вкладка: [ ${this.currentTab.url}]`);
//     }

//     // метод закрити поточну вкладку (видалити поточний вузол)
//     closeCurrentTab() {

//         if (!this.currentTab) return;  // якщо список пустий - виходим

//         // якщо в списку лише один вузол (він посилається сам на себе) 
//         if (this.currentTab.next === this.currentTab)  {

//             // коли я обнулила весь обєкт вузла - додатково обнуляти prev та next нетреба
//             this.currentTab = null;
//             this.tail = null;

//             console.log('Всі вкладки закрито!');
//         } else {
//             // якщо в списку більше 1 вузла
//             this.currentTab.prev.next = this.currentTab.next;  // попередній вузол посилаємо до наступного вузла (уникаємо поточного)
//             this.currentTab.next.prev = this.currentTab.prev;  // наступний вузол посилаємо до попереднього вузла (уникаємо поточного)

//             // якщо поточний вузол це хвіст, то хвостом робим попередній вузол від поточного
//             if (this.currentTab === this.tail) {
//                 this.tail = this.currentTab.prev;
//             }

//             // головою робим наступнпий вузол від поточого
//             this.currentTab = this.currentTab.next;

//             // голову і хвіст важливо задати інакше все весь список полетить

//             console.log(`Вкладку закрито. Зараз активна : [ ${this.currentTab.url} ]`);

//         }


//     }

//     // метод щоб вивести весь список
//     showAllTabs() {
//         let current = this.currentTab;  // починаємо з голови
//         let allTabs = '';  // накопичувач

//         if (!current) return;  // якщо список пустий - виходим

//         do {
//             allTabs += current.url + ' => ';  // додаємо в накопичувач перший вузол списку
//             current = current.next;  // переходим до наступного вузла
            
//         } while(current !== this.currentTab)  // допоки по колу не дійдемо знову до голови
        
//         console.log(allTabs);

//     }
// }


// const tabsSession = new TabCarousel();

// tabsSession.openTab('https://www.111.com');
// tabsSession.openTab('https://www.222.com');
// tabsSession.openTab('https://www.333.com');

// tabsSession.nextTab();   // Зараз відкрита вкладка: [ https://www.222.com]

// tabsSession.prevTab();  // Зараз відкрита вкладка: [ https://www.111.com]


// tabsSession.showAllTabs();  // https://www.111.com => https://www.222.com => https://www.333.com => 

// tabsSession.closeCurrentTab();  // Вкладку закрито. Зараз активна : [ https://www.222.com ]
// tabsSession.showAllTabs();  // https://www.222.com => https://www.333.com => 

// tabsSession.closeCurrentTab();  // Вкладку закрито. Зараз активна : [ https://www.333.com ]
// tabsSession.showAllTabs();  // https://www.333.com => 





// -------------------------------------------------------------------------------------------------------------------------------


        // Stack (Data Structure) in JS



// Завдання: «Валідатор дужок» (Bracket Validator)
// Тобі потрібно написати функцію, яка перевіряє, чи є рядок з дужками збалансованим.
// Що таке збалансований рядок?
// Кожна відкриваюча дужка ( повинна мати свою закриваючу дужку ).
// Дужки мають закриватися у правильному порядку (не можна закрити дужку, 
// яку ще не відкрили).

// Приклади:
// "(())" — true (все чітко).
// "()()" — true (дві пари).
// "(()" — false (одна не закрита).
// "())" — false (зайва закриваюча).
// ")(" — false (спочатку закрили, потім відкрили).

// 🛠 Твій алгоритм дій:
// Використовуй свій клас Stack (з методами push, pop та властивістю size).
// Створи функцію isValid(str).
// Пробіжися по кожному символу рядка через цикл for...of.
// Логіка всередині циклу:
// Якщо символ — це (, клади його в стек: stack.push('(').
// Якщо символ — це ), спробуй витягнути щось зі стека: const last = stack.pop().
// Якщо pop() повернув null — значить, закриваюча дужка з'явилася раніше відкриваючої.
// Одразу повертай false.
// Після циклу:
// Якщо стек порожній (stack.size === 0), значить всі пари знайшли одна одну — 
// повертай true.
// Якщо в стеку щось залишилося — значить, були зайві відкриваючі дужки — повертай 
// false.
// Заготовка для коду:

// class StackNode { 
//     constructor(value) {
//         this.value = value;  // значення
//         this.next = null;  // посилання на наступний вузол
//     }    
// }

// class Stack {
//     constructor() {
//         this.top = null;
//         this.size = 0;
//     }

//     push(value) {
//         const newNode = new StackNode(value);  // створюю новий інстанс (вузол)

//         newNode.next = this.top;  // новий вузол посилається на той що був top
//         this.top = newNode; // новим top-ом робим новий вузол
//         this.size++; // збільшуєм розімр стека
//     }

//     pop() {
//         if (!this.top) return null;

//         const currTopValue = this.top.value; 

//         this.top = this.top.next;

//         this.size--;

//         return currTopValue;
//     }
// }

// function isValid(str) {
//     const stack = new Stack();

//     for (let char of str) {
//         // Твій код тут
//         if (char === '(') {
//             stack.push(char);
//         } else if (char === ')') {
//             const last = stack.pop();
//             if (!last) return false;
//         }
//     }

//     // Твій код тут
//     return stack.size === 0;


// }

// // Тести для перевірки:
// console.log("1. (()) :", isValid("(())")); // true
// console.log("2. ()() :", isValid("()()")); // true
// console.log("3. (()  :", isValid("(()"));  // false
// console.log("4. ())  :", isValid("())"));  // false
// console.log("5. )(   :", isValid(")("));   // false


// 🌟 Бонусний рівень (ускладнюємо задачу)
// Уяви, що тепер у тебе є не тільки круглі дужки, а ще й квадратні [] та фігурні {}.
// Рядок може бути таким: "{[()]}" — це true.
// А таким: "{[(])}" — це false (бо ми закриваємо ], хоча останньою відкривали ().
// Що зміниться в логіці?
// Якщо бачимо будь-яку відкриваючу ((, [, {) — робимо push.
// Якщо бачимо закриваючу — робимо pop() і перевіряємо, чи пара співпала. Наприклад, 
// якщо ми витягли зі стека [, а поточний символ ), то це помилка.

// function isValidBonusLevel(str) {
//     const stack = new Stack();

//     for (let char of str) {
//         // Твій код тут

//         if (char === '(' || char === '[' || char === '{') {
//             stack.push(char);
//         } else if (char === ')' || char === ']' || char === '}') {
//             const last = stack.pop();

//             if (!last) return false;

//             if (char === ')' && last !== '(') return false;
//             if (char === ']' && last !== '[') return false;
//             if (char === '}' && last !== '{') return false;
//         }
//     }

//     // Твій код тут
//     return stack.size === 0;


// }

// // --- ГРУПА 1: Мають бути TRUE (Правильні) ---
// console.log("T1. Всі типи: ", isValidBonusLevel("{[()]}"));    // true
// console.log("T2. Послідовні: ", isValidBonusLevel("()[]{}")); // true
// console.log("T3. Складна вкладеність: ", isValidBonusLevel("(({[()]}))")); // true

// // --- ГРУПА 2: Мають бути FALSE (Помилкові) ---
// console.log("F1. Невірний порядок (Перехрестя): ", isValidBonusLevel("([)]")); // false (!!!)
// console.log("F2. Не той тип: ", isValidBonusLevel("(]"));      // false
// console.log("F3. Зайва відкриваюча: ", isValidBonusLevel("({[()]")); // false
// console.log("F4. Зайва закриваюча: ", isValidBonusLevel("{[()]}}")); // false
// console.log("F5. Переплутані сусіди: ", isValidBonusLevel("{[(])}")); // false



// Щоб не писати багато if, програмісти часто використовують об'єкт, де ключі — 
// це закриваючі дужки, а значення — відкриваючі:

// function isValidBonusLevel(str) {
//     const stack = new Stack();

//     // об'єкт мапа для збереження дужок, замість використання багатьох перевірок if
//     const bracketsMap = {
//         ')': '(',
//         ']': '[',
//         '}': '{'
//     };

//     for (let char of str) {
//         // Твій код тут
//         if (char === '(' || char === '[' || char === '{') {
//             // якщо дужка відкриваюча - додаємо її в стек
//             stack.push(char);
//         } else if (char === ')' || char === ']' || char === '}') {
//             // якщо дужка закриваюча забираєм її зі стека
//             const last = stack.pop();
//             // якщо забрана дужка не дорівнює останній дужці яку ми додали 
//             // в стек то повертаємо фолс - значить дужки не співпали
//             if (last !== bracketsMap[char]) return false; 
//             // Якщо стек порожній pop() повернув null, а в мапі '(' — це теж спрацює як false
//         }
//     }

//     // умова if (stack.size === 0) {return true} else {return false} зайвий
//     // бо скорочена умова виконає ту ж роботу!
//     return stack.size === 0;


// }




// Задача: «Система Скасування» (Undo System)
// Уяви, що ти пишеш спрощений "Блокнот". У користувача є текст, і він може робити 
// дві дії:
// Написати слово (додає текст).
// Скасувати (Undo) — видаляє останнє написане слово і повертає текст до попереднього
// стану.
// Твій алгоритм:
// Тобі потрібно створити клас TextEditor, який всередині використовує твій Stack для
// зберігання історії станів.
// Кожного разу, коли користувач пише новий текст, ти робиш push поточного стану в стек.
// Коли користувач натискає "Undo", ти робиш pop, щоб дістати попередній стан.
// Підказка:
// Ця задача показує головну фішку стека — збереження хронології. Коли ми робимо undo, 
// нам не важливо, скільки всього було правок, нам важливо лише те, що було останнім.

// клас для створення вузлів (компонент стека)
// class StackNode {
//     constructor(value) {
//         this.value = value;  // значення
//         this.next = null; // посилання на наступний (той що був доданий в стек перед поточним)
//     }
// }

// // клас генератор вузлів та методів роботи зі стеком
// class Stack {
//     // формуємо стек
//     constructor() {
//         this.top = null;  // спершу останній вузол пустий
//         this.size = 0; // розмір пустий
//     }

//     // метод додавання в стек
//     push(value) {
//         const newNode = new StackNode(value);  // створюємо новий вузол
//         newNode.next = this.top;  // новий вузол зєднуємо з попереднім top
//         this.top = newNode;  // новим top робим новий вузол
//         this.size++;  // збільшуємо розмір стека
//     }

//     // метод видалення зі стека
//     pop() {
//         //якщо стек пустий повертаємо null і виходимо
//         if(!this.top) return null;

//         // інакше:
//         const res = this.top.value;  // збергіаємо значення(дані) останнього вузла top
//         this.top = this.top.next; // робимо top-ом попередній вузол (той на який посилання в next)
//         this.size--; // зменшуємо розмір стека
//         return res; // повертаємо збережені дані (з старого top)
//     }
// }

// // клас для збереження тексту в стек
// class TextEditor {
//     constructor() {
//         this.content = ""; // тут зберігаємо поточний текст
//         this.history = new Stack(); // сюди зберігаємо версії(знімки) контенту
//     }

//     // 1. Метод для додавання тексту
//     type(newText) {
//         // ПЕРЕД ТИМ як змінити контент, зберігаємо поточний стан у стек history
//         this.history.push(this.content);
//         // Потім додаємо новий контент newText до this.content
//         this.content += newText;  // тут буде попередній контент + поточний контент
//     }

//     // 2. Метод для скасування
//     undo() {
//         // витягуємо(pop) останній стан(знімок/вузол) зі стека history
//         const lastType = this.history.pop();
//         // Якщо stack порожній - виводимо повідомлення "Нічого скасовувати" і виходимо
//         if (lastType === null) {
//             console.log("Скасовувати нічого");
//             return;
//         }
//         // Якщо стек не порожній, зробимо цей стан(знімок/вузол) поточним (this.content)
//         this.content = lastType;
        
//     }
// }

// // ПЕРЕВІРКА:
// const myNote = new TextEditor();

// myNote.type("Привіт");
// myNote.type(" Привіт, Світ");
// myNote.type(" Привіт, Світ! Як справи?");

// console.log("Зараз:", myNote.content);  // 'Привіт' 'Привіт, Світ' 'Привіт, Світ! Як справи?'

// myNote.undo();
// console.log("Після 1-го Undo:", myNote.content); // " Привіт, Світ"

// myNote.undo();
// console.log("Після 2-го Undo:", myNote.content); // "Привіт"

// myNote.undo();
// console.log("Після 3-го Undo:", myNote.content); // ""

// myNote.undo();
// console.log("Після 4-го Undo:", myNote.content); // повідомленя "Скасовувати нічого"





// 16.4   Задача про парні дужки. (classroom)
// Написати функцію, яка приймає вираз, що містить дужки різних типів - (), [], {}, <>, і перевіряє, 
// чи правильно вони відкриваються і закриваються.
// checkSequence(‘()(([]))’) // true
// checkSequence(‘{][)’) // false
// Підказка: для реалізації використовуйте структуру Stack
// (Зображення - підказка для реалізації)
// Для початку зробіть функцію, яка підтримує хоча б один вид дужок, потім ускладніть її,
//  в ідеалі - зробіть налаштовуваною, тобто щоб вона приймала як параметри пару дужок, 
//  на яку треба перевіряти

// клас для створення вузлів
// class Node {
//     constructor(data) {
//         this.data = data,  // тут збергіаємо дані вузла
//         this.next = null;   // тут зберігаємо посилання на наступний вузол
//     }
// }

// // клас для створення стека (в середині нього будем створювати вузли)
// class Stack {
//     constructor() {
//         this.top = null;   // верхівка стека (голова)
//         this.size = 0;  // розмір стека
//     }

//     // метод для додавання вузлів в стек (приймає як аргумент дані що мають збергігатись у вузлі)
//     push(data) {
//         const newNode = new Node(data);  // створюємо новий вузол

//         newNode.next = this.top;  // новий вузол посилається на той що був Топом
//         this.top = newNode;  // новим топом стає новий вузол, попередній топ стає під ним

//         this.size++;  // збільшуємо розмір стека
//     }

//     // метод видалення вузла зі стека 
//     pop() {
//         if (!this.top) return null;  // якщо сек пустий (небуло останнього) то повертаєм null

//         // якщо стек не пустий
//         const lastData = this.top.data;  // збережемо дані поточного топа перед тим як видалити 

//         this.top = this.top.next;  // новим топом робимо наступний вузол (той що був під ним)
//         this.size--;  // зменшуємо розмір стека

//         return lastData;  // віддаємо дані видаленого вузла

//     }

// }


// // функція для перевірки чи правильно відкриваються та закриваються дужки + чи той самий тип дужок
// // str - будь який ітерований тип даних що містить дужки
// // config - щось типу бази для перевірки (обєкт мапа) щоб перевірити щоб обидві дужки були одного типу
// // можна передати свій config як другий параметр, інакше буде цей по замовчуванню
// function isBracketsPaired(str, config = {'(':')', '{':'}', '[':']'}) {

//     // якщо str пустий/ поламаний,чи його не передали АБО str не є ітерованим повертаємо false
//     if (!str || typeof str[Symbol.iterator] !== 'function') {
//         console.error(str + ': Об"єкт неітерований!');
//         return false;
//     }

//     // якщо str ОК створимо інстанс Стека
//     const myStack = new Stack();

//     // йдемо циклом по кожному символу в str
//     for (char of str) {

//         // якщо char є ключем в config значить це відкриваюча дужка
//         if (Object.keys(config).includes(char)) {
//             // додаємо її в стек
//             myStack.push(char);
//             continue;  // переходим до наступного char без зайвих перевірок нижче по функції
//         }

//         // якщо char є властивістю в config значить це закриваюча дужка
//         if (Object.values(config).includes(char)) {
//             // видаляємо її зі стека
//             let lastData = myStack.pop();

//             // якщо зі стека повернувся null значить стек пустий поточний char не знайде пару
//             // повертаємо false
//             if (lastData === null) {
//                 return false;
//             }

//             // якщо зі стека повернулось значення, і значення в config за цим ключем не співпадає з поточним char
//             // який на цьому етапі точно є закриваючою дужкою, значить дужки не одного типу, парність порушена
//             // повертаємо false;
//             if (config[lastData] !== char) {
//                 return false;
//             }
//         }
//         // якщо str містить будь які інші символи крім дужок, то вони порігноруються якщо їх нема в config
//     }

//     // якщо після завершення циклу стек пустий значить всі дужки співпали, або їх там взагалі не було що теж ОК)
//     return myStack.size === 0;
// }

// console.log(isBracketsPaired('{{}}'));
// console.log(isBracketsPaired('{{}]'));
// console.log(isBracketsPaired('(){}[])'));
// console.log(isBracketsPaired('ab(c)'));




// -------------------------------------------------------------------------------------------------------------------------------------------

                // Queue (Data Structure) JS

// Задача: «Система керування принтером»
// Уяви, що ти пишеш софт для офісного принтера. Принтер один, а працівників багато. 
// Кожен надсилає документ, і вони мають друкуватися чітко в тому порядку, в якому надійшли.
// Твоє завдання:
// Створити клас Printer, який використовує твою Queue.
// Методи:
// addDocument(name) — додає назву документа в чергу.
// print() — "друкує" (виводить в консоль) назву першого документа в черзі та видаляє його. 
// Якщо черга порожня — пише "Черга порожня".
// showQueue() — просто показує, скільки документів зараз чекають (використовуй size).
// Приклад роботи:

// // клас для створення вузла
// class Node {
//     constructor(doc) {
//         this.doc = doc;
//         this.next = null;
//     }
// }

// // клас для керування чергою
// class Queue {
//     constructor() {
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }

//     // метод для додавання вузла в кінець (в черзі додаємо вузли завжди в кінець)
//     enqueue(doc) {
//         const newDoc = new Node(doc);  // створюємо інстанс вузла

//         if (this.size === 0) {  // якщо черга пуста новий вузол буде початком і кінцем черги
//             this.first = newDoc;
//             this.last = newDoc;
//         } else {
//             // інакше новий вузол буде новим хвостом
//             this.last.next = newDoc;  // спершу старий хвіст посилаємо на новий вузол
//             this.last = newDoc;  // потім новий вузол стає новим хвостом
//             // next=null прийде сам з конструктора нового вузла
//         }

//         this.size++;  // збільшуємо розмір черги
//     }

//     // метод для видалення вузлів з початку (в черзі видаляємо лише з початку)
//     dequeue() {
        
//         if (this.size === 0) return null;  // якщо черга пуста - повернути null і вийти
        
//         const firstDoc = this.first.doc;  // зберігаємо значення(дані) першого елемента в черзі
//         this.first = this.first.next; // перекидаємо посилання на той вузол що був наступний
//         this.size--;  // зменшуємо  розмір черги

//         if (this.size === 0) {
//             this.last = null;  // якщо після видалення черга стала пуста то занулити last
//         }
//         return firstDoc; // повертаємо збережене значення видаленого вузла
//     }
// }

// // клас для роботи з принтером і постановкою в чергу
// class Printer {
//     constructor() {
//         this.queue = new Queue();  // створюю інстанс черги всередині принтера
//     }

//     // метод додавання документа в чергу
//     addDoc(fileName) {
//         this.queue.enqueue(fileName);   // викликаю метод enqueue класу Queue
//         console.log(`Додано до черги: ${fileName}`);
//     }

//     // метод надрукувати перший елем у черзі (і видалити його з черги)
//     print() {
//         // викликаю метод dequeue класу Queue (який поверне значення видаленого вузла)
//         const docToPrint = this.queue.dequeue();  // зберігаю дані видаленого елемента з черги

//         // якщо метод dequeue повернув null то вихожу з функції (бо черга пуста)
//         if (docToPrint === null) {   // перевірка занадто широка (!docToPrint) бо ненадрукується 0 або пуста сторінка            console.log('Черга порожня');
//             return;
//         }
//         // інакше друкую повідолення
//         console.log(`Друкую: ${docToPrint}`);
//     }

//     // метод щоб показати поточну кількість документів у черзі
//     getPendingCount() {
//         return this.queue.size;
//     }

//     // метод щоб показати всю чергу (візуалізація черги)
//     showFullQueue() {
//         let current = this.queue.first;  // зберігаю перший вузол
//         let result = 'FRONT -> ';  // накопичувач для елементів в черзі

//         // допоки current трушний (ми не дійшли до хвоста)
//         while(current) {
//             result += `[${current.doc}] -> `;  // додаю до накопичувача поточний вузол
//             current = current.next;  // перехожу до наступного вузла
//         }

//         console.log(result + 'END');  // друкую все що накопичила в result
//     }

// }


// const myPrinter = new Printer();

// myPrinter.addDoc("Звіт_2025.pdf");
// myPrinter.addDoc("Фото_з_корпоративу.jpg");
// myPrinter.addDoc("Рецепт_борщу.docx");

// myPrinter.showFullQueue();
// //FRONT -> [Звіт_2025.pdf] -> [Фото_з_корпоративу.jpg] -> [Рецепт_борщу.docx] -> END

// myPrinter.print(); // Друкує: "Друкую: Звіт_2025.pdf"
// myPrinter.print(); // Друкує: "Друкую: Фото_з_корпоративу.jpg"
// console.log("Кількість документів в черзі становить:", myPrinter.getPendingCount()); // 1






// Задача: «Електронна черга в кафе»
// Уяви, що ти відкрила невелике кафе. Клієнти підходять, замовляють каву або десерт, 
// отримують номер чека і чекають, поки їхнє замовлення приготують. Оскільки бариста один, 
// він готує замовлення суворо по черзі.
// Твоє завдання:
// Створити клас CafeQueue. Він має працювати так:
// Метод takeOrder(customerName, dish): приймає ім'я клієнта та страву. Зберігає їх у чергу 
// як один об'єкт (наприклад: { name: "Анна", order: "Латте" }).
// Метод serveNext():
// Дістає замовлення з черги.
// Виводить у консоль: "Готово! [Страва] для клієнта [Ім'я]. Смачного!".
// Якщо замовлень немає — пише: "Всі клієнти обслужені!".
// Метод status(): показує, скільки людей ще чекають у черзі.
// Чому ця задача корисна?
// Тут ти навчишся передавати в чергу не просто рядки (назви), а цілі об'єкти. В реальному 
// програмуванні в структурах даних майже завжди лежать складні об'єкти з багатьма полями.

// class Node {
//     constructor(data) {
//         this.data = data;  // тут збергігатиметься обєкт {name, dish}
//         this.next = null;
//     }
// }

// class Queue {
//     constructor() {
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }

//     // додати вузол в чергу (зажди в кінець!)
//     enqueue(data) {

//         const newOrder = new Node(data);  // створюємо новий вузол (обєкт)

//         if (this.size === 0) {    // якщо черга пуста
//             this.first = newOrder;  // новий вузол робим головою і хвостом
//             this.last = newOrder;
//         } else {
//             // інакше старий хвіст посилається на нвоий вузол
//             this.last.next = newOrder;
//             this.last = newOrder;  // ноівий вузол стає новим хвостом
//             // this.last.next = null нетреба бо він прийде з конструктора з новим вузлом
//         }
//         this.size++;  // збільшуємо розмір черги
//     }

//     // метод видалення з вузлів з черги (завжди з початку!)
//     dequeue() {
//         if (this.size === 0) return null;  // якщо черга пуста, видаляти нічого, повертаєм null

//         const firstOrderData = this.first.data;  // зберігаємо дані першого вузла (обєкт {name, data})

//         this.first = this.first.next;  // першим вузлом робим той що був наступним 
//         this.size--;  // зменшуємо розімр черги

//         if (this.size === 0) { // якщо після видалення черга стала пуста
//             this.last = null;   // обнуляємо хвіст
//         }

//         return firstOrderData;  // повертаємо обєкт {name, dish}
//     }
// }

// class CafeQueue {
//     constructor() {
//         this.queue = new Queue();  // створюємо інстанс для черги
//     }

//     // метод щоб додати замовлення в чергу
//     takeOrder(customerName, dish) {  // отримуємо дані у вигляді двох стрінгів які треба упакувати в обєкт
//         let order = {};  // створимо пустий обєкт
//         order.name = customerName; // додаємо першу властивість + знач
//         order.dish = dish;  // додаємо другу властивість  + знач
 
//         this.queue.enqueue(order);  // викликаємо метод щоб додати в чергу(обєкт order {name, dish})

//     }

//     // дістати з черги замовлення (і видалти його)
//     serveNext() {
//         // викликаємо метод для видалення вузла з черги
//         const currOrder = this.queue.dequeue();  // отримуємо дані вузла - обєкт {name, dish}

//         if (currOrder === null) {  // якщо нам повернувся null - виходимо
//             console.log('Всі клієнти обслужені!');
//             return;
//         } 

//         // інакше виводим повідомлення використовуючи властивості обєкта
//         console.log(`Готово! ${currOrder.dish} для клієнта ${currOrder.name}. Смачного!`);
//     }

//     // метод для перевірки поточної кількості вузлів у черзі (кількість)
//     status() {
//         return this.queue.size;
//     }

//     // метод щоб вивести (лінійно) перелік всіх (кожного) замовлення що стоять в черзі
//     showAllOrders() {
//         let current = this.queue.first;  // збергіаємо перший вузол (вузол що містить data та next)

//         let result = 'START -> ';  // накопичувач

//         // допоки вузол не хвіст
//         while(current) {
//                                     // (current(this.queue.first) -> data -> name -> value)
//             // накопичуємо імена клієнтів обєктів (вузол -> обєкт-> властивість -> значення)
//             result += `${current.data.name} ->`;  
//             current = current.next;  // переходимо до ннаступного вузла
//         }
//         console.log(result + 'END');
//     }
// }

// // Підказка: у Node.doc (або Node.value) тепер буде лежати об'єкт {}

// const myCafe = new CafeQueue();

// myCafe.takeOrder("Олег", "Еспресо");
// myCafe.takeOrder("Марія", "Тірамісу");
// myCafe.takeOrder("Іван", "Капучино");

// console.log(`У черзі чекають: ${myCafe.status()} клієнти(ів)`);

// myCafe.showAllOrders();

// myCafe.serveNext(); // Готово! Еспресо для клієнта Олег.
// myCafe.serveNext(); // Готово! Тірамісу для клієнта Марія.

// myCafe.takeOrder("Олена", "Чай");

// myCafe.serveNext(); // Готово! Капучино для клієнта Іван.
// myCafe.serveNext(); // Готово! Чай для клієнта Олена.
// myCafe.serveNext(); // Всі клієнти обслужені!





// Задача: «Приймальне відділення лікарні»
// Уяви систему реєстрації пацієнтів. Кожен пацієнт — це об'єкт з трьома полями: name (ім'я), 
// symptom (скарга) та priority (номер у черзі).
// Твій код-челендж:
// Створити клас HospitalQueue.
// Метод registerPatient(name, symptom):
// Автоматично призначає пацієнту номер (id), який інкрементується (1, 2, 3...).
// Створює об'єкт: { id: 1, name: "Іван", symptom: "Кашель" }.
// Додає його в чергу.
// Метод examineNext():
// Витягує пацієнта з черги.
// Виводить: "Лікар приймає пацієнта №[id] ([Ім'я]). Скарга: [symptom]".
// Якщо порожньо: "Всі пацієнти здорові, лікар відпочиває!".
// Метод showWaitingList():
// Виводить список імена та ID всіх, хто чекає. Наприклад: "Чекають: №1-Іван, №2-Марія".
// На що звернути увагу:
// Коли будеш писати showWaitingList, пам'ятай: current — це вузол. 
// current.data — це об'єкт пацієнта. Отже, ID буде в current.data.id.
// Не забувай про перевірку на null в методі examineNext.

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor() {
//         this.first = null;
//         this.last = null;
//         this.size =0;
//     }

//     // метод щоб додати вузол в кінець черги
//     enqueue(data) {
//         const newNode = new Node(data);

//         if (this.size === 0) {
//             this.first = newNode;
//             this.last = newNode;
//         } else {
//             this.last.next = newNode;
//             this.last = newNode;
//         }

//         this.size++;
//     }

//     // метод щоб видалити перший елемент з черги
//     dequeue() {
//         if (this.size === 0) return null;

//         const firstNode = this.first.data;   //збергігаю обєкт

//         this.first = this.first.next;
//         this.size--;

//         if (this.size === 0) {
//             this.last = null;
//         }
//         return firstNode;
//     }
// }


// class HospitalQueue {
//     constructor() {
//         this.queue = new Queue();
//         this.nextId = 1; // Використовуй це для автоматичних номерів
//     }

//     registerPatient(name, symptom) {
//         // 1. Створи об'єкт пацієнта, додавши йому id (this.nextId)
//         const patient = {};
//         patient.id = this.nextId;
//         patient.name = name;
//         patient.symptom = symptom;

//         // 2. Додай у чергу
//         this.queue.enqueue(patient);

//         // 3. Збільш this.nextId на 1
//         this.nextId++;
//     }

//     examineNext() {
//         // Витягни з черги та виведи повідомлення
//         const currPatient = this.queue.dequeue();  // обєкт

//         if (currPatient === null) {
//             console.log('Всі пацієнти здорoві, лікар відпочиває!');
//             return;
//         } 
//         console.log(`Лікар приймає пацієнта №${currPatient.id} (${currPatient.name}). Скарга: ${currPatient.symptom}`);
//     }

//     showWaitingList() {
//         // Пройдися циклом по вузлах і збери рядок з ID та іменами
//         let current = this.queue.first;  // вузол
//         let list = 'Чекають: ';

//         while(current) {
//             list += `№${current.data.id}-${current.data.name}`;
//             if (current.next) {
//                 list += ', ';  // додаємо кому лише якщо елемент не  останній (має після себе ще next)
//             };
//             current = current.next;
//         }
//         console.log(list + '.');
//     }
// }

// // ПЕРЕВІРКА:
// const hospital = new HospitalQueue();
// hospital.registerPatient("Олена", "Біль у вусі");
// hospital.registerPatient("Дмитро", "Вивих ноги");

// hospital.showWaitingList(); // Чекають: №1-Олена, №2-Дмитро

// hospital.examineNext(); // Лікар приймає пацієнта №1 (Олена). Скарга: Біль у вусі
// hospital.examineNext(); // Лікар приймає пацієнта №2 (Дмитро). Скарга: Вивих ноги
// hospital.examineNext(); // Всі пацієнти здорові!