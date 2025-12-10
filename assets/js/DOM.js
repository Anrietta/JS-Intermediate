                    // DOM (Модель об'єкта документа). (Document object Model)


    // DOM - обєктна модель документа, яка представляє весь вміст сторінки у вигляжі обєктів, які можна змінювати
    // Відповідно до DOM, кожен HTML-елемент є обєктом

    // JS викоується в браузерному оточенні, який в свою чергу складається з Window що є глобальним обєктом для JS(являє собою вікно браузера і має методи для керування ним) і складається з:
    // - DOM (Document Object Model)
    // - BOM (Browser Object Model) - в браузері навігатор, доступ до рядка з посиланням, кнопка назад/вперед, екран
    // - JS (Object, Array, Function...)

    // Основкний обєкт DOM через який реалізовано роботу з сторінкою це Document який знаходиться у Window (в консолі можна глянути)
    // для того щоб JS міг взаємодіяти з  сутностями на сторінці, потрібно отримати доступ до цих сутностей/елементів





                    // Доступ до елементів


// Для роботи з DOM використовують інтерфес Document
// document є властивістю глобального обєкта window, який в свою чергу теж складається з обєктів (document.head, document.body тощо)

    // console.log(document.body);  // отримаємо вміст body в поточному html документі
    // console.log(document);  // отримаємо вміст поточного html документа
    // console.log(document.head);  // отримаємо вміст head поточного html документа

// Можна ще обєкт document щоб переконатись що це дійсно обєкт можна вивести його в консоль за допомогою функції console.dir

// console.dir(document);  // отримаємо обєкт document з всіма властивостями та ланцюжком прототипів які теж містять властивості

// Щоб отримати всі інші оєкти DOM потрібно використовувати спеціальні методи за допомогою яких можна достукатися до елементів сторінки




// Завдання 1 : Пошук Елементів DOM
// 📄 HTML-структура для Практики
// 🎯 Ваші Завдання (JavaScript):
// Напишіть JS-вираз для виконання кожного завдання.
// Завдання 1: Прямий Доступ Отримайте посилання на елемент <body> за допомогою найшвидшого способу.
// Завдання 2: Пошук за ID Отримайте елемент <header> з ID main-header.
// Завдання 3: Універсальний Пошук (Один Елемент) Отримайте першу кнопку (<button>) з класом btn.
// Завдання 4: Універсальний Пошук (Колекція) Отримайте колекцію усіх елементів <p> з класом name.
// Завдання 5: Локальний Пошук Отримайте колекцію усіх карток (<div>) з класом active, 
// але шукайте їх лише всередині елемента content (спочатку отримайте content за ID, а потім шукайте всередині нього).


// const body = document.body;
// console.log(body);

// const mainHeader = document.getElementById('main-header');
// console.log(mainHeader);

// const btn = document.querySelector('.btn');
// console.log(btn);

// const parNames = document.querySelectorAll('p.name');
// console.log(parNames);

// const content = document.getElementById('content');
// console.log(content);
// const activeColl = content.querySelectorAll('div.active');
// console.log(activeColl);



// Завдання 2 : Комбінований Пошук та Колекції
// Уявіть, що у вас є таке меню та список завдань:
// Ваші Завдання (JavaScript):
// Визначте, який метод (та область пошуку) є найбільш доречним для кожного завдання,
// і зверніть увагу на тип колекції, який ви отримаєте.
// Завдання 1: Локальний Пошук (HTMLCollection) Отримайте всі елементи <li> (за тегом), 
// але шукайте їх лише всередині контейнера з ID tasks-container. Використовуйте метод, який повертає HTMLCollection.
// Завдання 2: Специфічний Пошук (NodeList) Отримайте колекцію усіх посилань (<a>),
// які мають одночасно класи nav-link та current.
// Завдання 3: Пошук Текстових Вузлів Отримайте всі дочірні вузли (включно з текстом і коментарями) 
// контейнера tasks-container (спочатку отримайте контейнер за ID). Яку властивість Node ви використаєте?
// Завдання 4: Пошук Першого Елемента Отримайте посилання, яке знаходиться між "Налаштування" та "Профіль". 
// Використовуйте універсальний селектор та властивість, що повертає лише один елемент.

// const tasksCont = document.getElementById('tasks-container');
// console.log(tasksCont);
// const listColl = tasksCont.getElementsByTagName('li');
// console.log(listColl);

// const body = document.body;
// const anch = body.querySelectorAll('a.nav-link.current');
// console.log(anch);


// const nodesColl = tasksCont.childNodes;
// console.log(nodesColl);
// // я використала властивість childNodes для навігації по DOM-дереву щоб отримати всі дочірні вузли
// // firstChild - щоб отримати перший дочірній вузол
// // next Sibling - щоб отримати наступний вузол на томуж рівні DOM-дерева

// const firstLink = body.querySelector('a');
// console.log(firstLink);




// -------------------------------------------------------------------------------------------------------------------------


                        //  Події (Events)

// // що таке події
// // які бувають події(клік миші, тощо)

// // способи як навішувати події на елементи

// //  1 спосіб через властивість елемента (мінус що таким чином на елемент можна навісити лише одн обробник для конкретної події)
// const btn = document.getElementById('clickBtn');
// console.log(btn);
// console.dir(btn);  // якщо повидитись на отриманий елемент як на обєкт то можна повитись в ньому багато властивостей які починаються з on...
//                     // вони по замовчуванню мають значення null, а якщо ми на них навішаєм подію то значенням буде функція (обробник події)

// const clickHandler = function(event) {  // створюємо обробник - це функція, яка приймає параметр event
//     console.log('btn was clicked');  // тіло функції це те що має виконатись коли подія настає, тобто відбувся клік миші
// }; 
// btn.onclick = clickHandler; // навішуємо оброник події на кнопку яку ми отримали раніше


// // як зняти обробник
// btn.onclick = null;    // на ту ж кнопку на той самий обробник навішуємо null і все


// // 2 спосіб чере метод addEventListener елемента (можна навішуваи багато обробників для конкретної події)

// // addEventListener приймає два агрумента : подія та обробник
// // element.addEventListener('click', clickHandler);
 
// // щоб навішати кілька подій на елемент, ми їх просто поступово по черзі прописуємо

// // щоб зняти обробник є зворотній метод який приймає ті самі два агрумента : подія та обробник - які ми навішували
// // element.removeEventListener('click', clickHandler)

// const loginBtn = document.getElementById('loginBtn'); // отримаємо обєкт кнопки з DOM
// console.dir(loginBtn)

// function loginBtnHandler(e) {  // створюємо обробник
//     alert('Login in process');
// }

//                             // в 2 способі click - це назва самої події для методу addEventListener, 
//                             // а в 1 способі onclick -це назва властивості в обєкті кнопки яку ми отримали
// loginBtn.addEventListener('click', loginBtnHandler); // навішуємо на кнопку обробник з двома парам (назва події, обробник події)
// loginBtn.removeEventListener('click', loginBtnHandler); // знімаємо з кнопки обробник з тими ж параметрами, що і навішували


// // Задвання: вивести "Click me!" коли наводимо курсором миші на кнопку loginBtn

// // кнопку ми вже отримали раніше, тому створюємо обробник 
// function loginBtnMousemoveHandler (e) {
//     console.log('Click me!');
// }

// loginBtn.addEventListener('mousemove', loginBtnMousemoveHandler); // навішуємо обробник на кнопку


// // Завдання: додати кнопку і при натисканні на неї виводити Hello World!

// const helloBtn = document.getElementById('helloBtn');
// console.log(helloBtn);

// function helloBtnHandler (e) {
//     console.log('Hello world!');
// }

// helloBtn.addEventListener('click', helloBtnHandler);


// Задача 1 :

// Завдання 1: Запобігання Стандартній Дії
// Напишіть код, який:
// Отримує посилання на елемент з ID link-prevent.
// Навішує на нього обробник події click.
// Всередині обробника скасовує стандартну дію браузера (тобто, запобігає переходу на google.com).
// Виводить у консоль повідомлення: "Перехід скасовано. Виконується JS-функція."

// 🎯 Завдання 2: Управління Потоком (Bubbling)
// Напишіть код, який демонструє ефект event.stopPropagation():
// Отримайте елементи div#container та a#link-prevent.
// Навісьте обробник кліку на Батьківський елемент (#container), 
// який виводить: "Клік почутий на КОНТЕЙНЕРІ!".
// Навісьте обробник кліку на Дочірній елемент (#link-prevent), який:
// Виводить: "Клік на ПОСИЛАННІ!".
// Зупиняє подальше спливання події до батьків.
// Перевірте: Коли ви клікаєте на посиланні, ви маєте побачити лише повідомлення
//  від посилання, але не від контейнера.

// 🎯 Завдання 3: Багаторазове Спрацювання та Видалення
// Напишіть код, який демонструє роботу addEventListener та removeEventListener:
// Отримайте кнопку з ID add-remove-btn.
// Створіть іменовану функцію singleClickHandler, яка виводить у консоль: "Обробник спрацював!".
// Навісьте цю функцію на кнопку по події click.
// Зніміть цю функцію з кнопки по події click, використовуючи метод removeEventListener.
// Перевірте: Після виконання коду, клік на кнопці не повинен виводити нічого в консоль.

// --------- 1

// const linkPrevent = document.getElementById('link-prevent');
// console.log(linkPrevent);

// function linkPreventDef(e) {
//     e.preventDefault();

//     console.log('Перехід скасовано. Виконується JS-функція.');
// }

// linkPrevent.addEventListener('click', linkPreventDef);

// ------- 2

// const container = document.getElementById('container');
// const linkPrevent = document.getElementById('link-prevent');
// console.log(container, linkPrevent);

// function containerListener(e) {
//     console.log('Клік почутий на КОНТЕЙНЕРІ!');
// }

// function linkListener(e) {
//     console.log('Клік на ПОСИЛАННІ!');
//     e.stopPropagation();
// }

// container.addEventListener('click', containerListener);
// linkPrevent.addEventListener('click', linkListener);

// ------- 3

// const actionBtn = document.getElementById('add-remove-btn');

// const singleClickHandler = function(e) {
//     console.log('Обробник спрацював!');
// }

// actionBtn.addEventListener('click', singleClickHandler);

// actionBtn.removeEventListener('click', singleClickHandler);



// Задача 2

// Ваше Завдання: Використання Делегування
// Напишіть JavaScript-код, який виконує наступні кроки, використовуючи лише один обробник події:
// Отримання Батька: Отримайте елемент ul#task-list.
// Делегування: Навісьте обробник події click лише на ul#task-list.
// Ідентифікація Цілі: Всередині обробника перевірте: чи є елемент, на який 
// клікнули (event.target), одним із дочірніх елементів із класом task-item?
// Виведення Результату: Якщо клік стався на елементі з класом task-item, виведіть у консоль:
// Повідомлення: "Ви натиснули на завдання: [Текст завдання]"
// Використайте event.target.textContent для отримання тексту завдання.
// Додаткова Перевірка (Challenge):
// Клікніть на порожню область всередині ul#task-list (але не на <li>).
// Перевірте: Обробник має спрацювати (бо ви клікнули по ul), але логіка
//  ідентифікації цілі повинна запобігти виведенню повідомлення "Ви натиснули на завдання...".

// const taskList = document.getElementById('task-list');
// // console.log(taskList);

// function taskHandler(e) {
//     console.log(e);
//     const taskItem = e.target.closest('.task-item');  // closest - метод для перевірки найближчого батьківського елемента від того що вказаний в дужках
//     if (taskItem)  {  // якщо клік відбувся на дочірньому елементі найближчого від батька 
//         console.log(`Ви натиснули на завдання: ${e.target.textContent}`);
//     } 
// }

// taskList.addEventListener('click', taskHandler);



// Задача 3

// Ваші Завдання (JavaScript):
// Напишіть код для виконання трьох незалежних завдань:
// Завдання 1: Зупинка Спливання (Form -> Wrapper) Навісьте обробник кліку на 
// батьківський елемент div#wrapper, який виводить: "Клік почутий на Wrapper!".
// Потім наведіть обробник кліку на кнопку button#send-btn, який виводить: 
// "Клік почутий на кнопці!" І зупиняє подальше поширення події
// (щоб div#wrapper не спрацював).
// Завдання 2: Скасування Стандартної Дії (Form Submit)Навісьте обробник на
// подію submit на елемент form#comment-form.У цьому обробнику скасуйте 
// стандартну дію (тобто, запобіжіть перезавантаженню сторінки).Замість 
// перезавантаження виведіть у консоль: "Форма оброблена через JS, перезавантаження скасовано."
// Завдання 3: Управління Подією Клавіатури Навісьте обробник на подію keydown
// на елементі textarea#comment-text.Налаштуйте обробник так, щоб він запобігав
// стандартній дії додавання нового рядка (перенесення) лише тоді,
// коли користувач натискає клавішу Enter (клавіша має властивість key: 'Enter').

// ------1

// const wrapper = document.getElementById('wrapper');
// const wrapperFormBtn = wrapper.querySelector('#send-btn'); 

// function wrapperHandler (e) {
//     console.log('Клік почутий на Wrapper!');
// }

// function wrapperFormBtnHandler(e) {
//     console.log('Клік почутий на кнопці!');
//     e.stopPropagation();
// }

// wrapper.addEventListener('click', wrapperHandler);
// wrapperFormBtn.addEventListener('click', wrapperFormBtnHandler);


// -------2
// const form = document.getElementById('comment-form');  // отримуємо форму для зміни стандартної поведінки
// console.dir(form);

// function submitHandler(e) {
//     // спершу скасовуємо стандартну поведінку
//     e.preventDefault();
//     // потім виводимо повідомлення
//     console.log('Форма оброблена через JS, перезавантаження скасовано.');
// }

// // навішуємо обробник на форму а не на кнопку відправки, оскільки submit відбувається на самій формі
// // кнопка лише запускає цей процес коли на неї клікають, починається Спливання Bubbling
// // і від кліку на кнопку хендлер піднімається вверх по їєрархії до вформи де відбувається submit
// form.addEventListener('submit', submitHandler);

// -------3

// const textArea = document.getElementById('comment-text');

// function textAreaKeyDownHandler(e) {
//     if (e.key === 'Enter') {   // коли натискається Enter не перенось строку!
//         e.preventDefault();
//     }
// }

// textArea.addEventListener('keydown', textAreaKeyDownHandler);