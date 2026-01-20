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



// ----------------------------------------------------------------------------------------------------------------------------------------

                            // Атрибути (Attributes)       

// // Отримаєм обєкт елемента щоб могти працювати з його атрибутом
// const paragraph1 = document.querySelector('#p1');
// console.dir(paragraph1);  // тут можем перевірити наявність як атрибут елемента стає властивістю елемента
// console.log(paragraph1.title);  // тут отримаєм саме значення атрибута title: it"s a paragraph
// console.log(paragraph1.id);  // тут отримаєм саме значення id: p1



// // Два способи задавати (отримати доступ до) Атрибутів обєкта-елемента:

// // 1 спосіб - доступ через властивості element.style(назва обєкту атрибута!!) : element.style.fontSize = '16px';

// // суть в тому, що коли ми отримали елемент то всі його атрибути стають його властивостями і ми отрмуєм до них доступ
// // ми можемо їх змінювати, видаляти, задавати

// paragraph1.title = 'New title';  // змінили значення атрибута title з it"s a paragraph на New title

// // важливий нюанс з булевими атрибутами:

// // ті атрибути які мають булеве значення, ми їх в html прописуємо на елементі, або не прописуємо, 
// // оскільки вони мають стандартне значення. Коли ми хочемо в html додати hidden до елемента ми просто пишем назву атрибута не уточнюючи його значення
// // Тобто наш елемент paragraph1 має по замовчуванню властивіть hidden : false - навіть якщо він не прописаний в html елементі
// // А щоб змінити його ми прописуємо так:
// // paragraph1.hidden = true;


// // inline стилі теж є атрибутами! але мають свої властивості (ті що ми зазвичай прописуємо в CSS)
// paragraph1.style.color = 'red';
// // всі властивості стилів записані в КемелКейсі (зг.з правилами JS), а в CSS ми зазвичай пишем в КебабКейсі
// paragraph1.style.backgroundColor = 'yellow';

// // стилі через класи розглянемо пізніше, там є нюанси




// // 2 спосіб - доступ через методи - html-атрибут(рядок!!) :
//     // - element.setAttribute(name, value) - встановити значення атрибуту
//     // - element.getAttribute(name) - отримати значенння атрибуту
//     // - element.hasAttribute(name) - перевірити наявність атрибуту (true,false)
//     // - element.removeAttribute(name) - видалити атрибут
//     // - element.attributes - колекція з усіма атрибутами та їх значеннями

//     // напр: element.setAttribute('style', 'font-size: 16px;');

// const paragraph2 = document.querySelector('#p2');
// paragraph2.setAttribute('title', 'Title of p2'); // додали новий атрибут title зі значенням Title of p2
// paragraph2.setAttribute('style', 'font-size: 10px; color: blue;'); // "style = font-size: 10px; color: blue;"

// // важливий нюанс з булевими атрибутами
// // ті атрибути які мають булеве значення, ми їх в html прописуємо на елементі, або не прописуємо, 
// // оскільки вони мають стандартне значення. Коли ми хочемо в html додати hidden до елемента ми просто пишем назву атрибута не уточнюючи його значення
// // Тобто наш елемент paragraph2 має по замовчуванню властивіть hidden : false - навіть якщо він не прописаний в html елементі
// // А щоб змінити його ми прописуємо двічі його назву так:
// // paragraph2.setAttribute('hidden', 'hidden');

// console.log(paragraph2.getAttribute('style'));   // font-size: 10px; color: blue;
// console.log(paragraph2.hasAttribute('style'));   // true
// console.log(paragraph2.attributes);   // NamedNodeMap {0: id, 1: title, 2: style, id: id, title: title, style: style, length: 3}
// console.log(paragraph2.removeAttribute('title'));   // видаляємо title



// // Завдання : Задати для body(body це один з трьох унікальних елементів верхнього рівня) колір тла на вибір
// const body = document.querySelector('body').style.backgroundColor = 'green';  
// // або можна напряму задати без зберігання в змінну
// document.body.backgroundColor =  'green';  



// // є атрибути які дозволяють змінити вміст елемента, його контент:
// // - textContent
// // - innerHTML
// // - outerHTML
// paragraph2.textContent = 'Привіт, як твої справи ?'



// // image - Атрибути зображення

// // Завдання задати атрибути зображення по обєкту (динамічно)
// const imgAttr = {
//     src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stray_kitten_Rambo002.jpg/1200px-Stray_kitten_Rambo002.jpg',
//     alt: 'kitty'
// }

// const imgEl = document.querySelector('img');
// imgEl.src = imgAttr.src;
// imgEl.alt = imgAttr.alt;

// // чотири способи задати ширину зображення :
// // imgEl.setAttribute('width', '100'); - самий недобрий для використання
// // imgEl.setAttribute('style', 'width: 400px'); - так собі - перезапише всі стилі елемента а не додасть
// // imgEl.width = '500';  - добре якщо непотрібно вказувати одиниці виміру
// // imgEl.style.width = "500px"; - добре якщо потрібно вказувати одиниці виміру





// Практичні Завдання з Маніпуляцій DOM
// Ці завдання вимагають написання коду і сфокусовані лише на темах, які ми детально розібрали:
//  Атрибути/Властивості, Контент (textContent, innerHTML, outerHTML) та Стилі (element.style).

// Блок 1: Керування Атрибутами та Властивостями
// Завдання 1: Зміна Посилання та Підказки
// Умова: У вас є посилання. Ваше завдання — змінити його ціль та додати підказку.
// HTML:
// <a id="myLink" href="https://old-site.com">Перейти на старий сайт</a>
// Дії:
// Знайдіть елемент за його ID.
// Змініть URL-адресу посилання на https://new-site.com (використовуйте DOM-властивість element.href).
// Встановіть атрибут title зі значенням: "Це оновлена ціль" (використовуйте DOM-властивість element.title).

// Завдання 2: Керування Станом Кнопки та Data-Атрибутами
// Умова: Зробіть кнопку неактивною, а потім додайте їй користувацький ідентифікатор.
// HTML:
// <button id="submitBtn">Надіслати</button>
// Дії:
// Знайдіть кнопку.
// Зробіть її неактивною (використовуйте булеву DOM-властивість element.disabled).
// Встановіть їй користувацький атрибут data-action зі значенням "save-data" 
// (використовуйте setAttribute).
// Прочитайте значення цього атрибута у консоль (використовуйте dataset).

// Блок 2: Маніпуляції Вмістом
// Завдання 3: Безпечне Оновлення Тексту (XSS-Захист)
// Умова: Оновіть текстовий вміст елемента, використовуючи рядок, 
// який потенційно містить HTML.
// HTML:
// <p id="message"></p>
// Дії:
// Знайдіть елемент <p>.
// Створіть змінну userInput зі значенням: "Вітаємо! **Новий текст** 
// <script>alert('XSS!');</script>".
// Безпечно вставте userInput у елемент так, щоб <script> не спрацював,
//  а був видимий як частина тексту (використовуйте textContent).
// Перевірте результат у консолі.

// Завдання 4: Вставка Складної Структури
// Умова: Додайте до порожнього списку елементи <li> за допомогою однієї операції.
// HTML:
// <ul id="itemsList">
// </ul>
// Дії:
// Знайдіть елемент <ul>.
// Створіть рядок newItems зі структурою: <li>Пункт 1</li><li>Пункт 2</li><li>Пункт 3</li>.
// Вставте newItems у список так, щоб він створив справжні елементи 
// списку (використовуйте innerHTML).

// Завдання 5: Повна Заміна Елемента (outerHTML)
// Умова: Замініть існуючий елемент <p> на елемент <h2>.
// HTML:
// <div id="content">
//     <p id="oldText">Цей текст буде видалено.</p>
// </div>
// Дії:
// Знайдіть елемент <p id="oldText">.
// Створіть нову HTML-структуру у вигляді рядка: <h2>Це новий заголовок, 
// що замінив параграф.</h2>.
// Замініть елемент <p> на нову структуру (використовуйте outerHTML).
// Перевірте DOM у консолі, щоб переконатися, що <p> зник.

// Блок 3: Керування Стилями (Inline)
// Завдання 6: Динамічна Стилізація (Inline)
// Умова: Змініть колір фону елемента на синій, а розмір шрифту — на 24px.
// HTML:
// <div id="box">Зміни мене</div>
// Дії:
// Знайдіть елемент <div>.
// Встановіть колір фону (наприклад, '#1e90ff').
// Встановіть розмір шрифту (зверніть увагу на CamelCase).

// Завдання 7: Зміна Розміру Зображення Двома Способами
// Умова: Встановіть ширину зображення двома різними, але коректними способами, 
// які впливають на різні механізми браузера.
// HTML:
// <img id="myImage" src="placeholder.png">
// Дії:
// Знайдіть елемент <img>.
// Встановіть його ширину на 400 пікселів, використовуючи пряму DOM-властивість (element.width).
// Встановіть його висоту на 300px, використовуючи inline-стилі (element.style.height).

// // Завдання 1
// const myLink = document.body.querySelector('#myLink');
// myLink.href = 'https://new-site.com';
// myLink.title = 'Це оновлена ціль';
// console.log(myLink);

// // Завдання 2
// const submtBtn = document.body.querySelector('#submitBtn');
// submtBtn.disabled = true;
// submtBtn.setAttribute('data-action', 'save-data');
// console.log(submtBtn);
// console.log(submtBtn.getAttribute('data-action'));
// console.log(submtBtn.dataset);

// // Завдання 3
// const par = document.body.querySelector('#message');
// const userInput = 'Вітаємо! **Новий текст** <script>alert("XSS!");</script>';
// par.textContent = userInput;
// console.log(par);

// // Завдання 4
// const itemsList = document.body.querySelector('#itemsList');
// const newItems = '<li>Пункт 1</li><li>Пункт 2</li><li>Пункт 3</li>';
// itemsList.innerHTML = newItems;
// console.log(itemsList);

// // Завдання 5
// const paragraph = document.body.querySelector('#oldText');
// const newHeader = '<h2>Це новий заголовок, що замінив параграф.</h2>';
// paragraph.outerHTML = newHeader;
// console.log(paragraph); // А нема нічого :)
// console.log(document.body.querySelector('#content'));

// // Завдання 6
// const box = document.getElementById('box');
// box.style.backgroundColor = '#1e90ff';
// box.style.fontSize = '24px';
// console.log(box);

// // Завдання 7
// const myImg = document.body.querySelector('#myImage');
// myImg.width = 400;
// myImg.style.height = '300px';
// console.log(myImg);


// Нові Практичні Завдання з DOM (Частина 2)
// Уявіть, що у вас є наступний HTML-код:

// Завдання 1: Керування CSS-класами
// Отримайте елемент з id="statusBox".
// Видаліть з нього CSS-клас loading.
// Додайте до нього новий CSS-клас success.

// Завдання 2: Створення та Вставка Нового Елемента
// Отримайте контейнер ul з id="newItemsContainer".
// Створіть новий елемент списку (<li>).
// Встановіть текстовий контент цього нового елемента на "Свіжостворений пункт".
// Додайте цей новий елемент до контейнера newItemsContainer.
// Виведіть у консоль фінальний вміст контейнера.

// Завдання 3: Перевірка та Зміна Атрибута
// Отримайте елемент div з id="infoBox".
// Перевірте, чи містить елемент атрибут data-user-id, 
// і виведіть результат перевірки в консоль.
// За допомогою одного методу classList перемкніть клас active 
// (якщо він є, видаліть; якщо немає, додайте).
// Виведіть у консоль поточний список класів елемента.

// Завдання 4: Вставка Контенту Поруч з Елементом
// Отримайте елемент p з id="targetParagraph".
// Використовуючи метод insertAdjacentHTML, вставте перед цим параграфом наступний HTML: 
// <h3 class="title">Новий Заголовок</h3>.
// Виведіть у консоль вміст батьківського елемента, щоб побачити фінальну структуру.

// Завдання 5: Універсальне Керування Кнопкою
// Отримайте елемент button з id="toggleBtn".
// Встановіть для нього атрибут disabled на основі наявності CSS-класу is-disabled. 
// Якщо клас is-disabled присутній, кнопка має стати неактивною (disabled=true). 
// Якщо відсутній, вона має бути активною (disabled=false). 
// (Примітка: Припускаємо, що клас is-disabled вже є на кнопці для цього завдання).


// // Завдання 1
// const statusBox = document.body.querySelector('#statusBox');
// // я використала такий варіант, тому що classList ми ще не вчили. 
// // Наскільки я розумію саме classList тут доречно використати щоб виконати операції поокремо, 
// // спершу видалити один з класів, потім додати новий до того що залишився.
// // statusBox.removeAttribute('class');
// // statusBox.setAttribute('class', 'active success');

// // почитала про classList, спробую ще через нього)))
// statusBox.classList.remove('loading');
// statusBox.classList.add('success');
// console.log(statusBox);

// // Завдання 2
// const itemsContainer = document.getElementById('newItemsContainer');
// const item = '<li>Свіжостворений продукт</li>';  // годиться для вставки готового рядка, але не годиться саме для створення нового елементу
// itemsContainer.innerHTML = item;
// console.log(itemsContainer);

// // через метод createElement - для створення нових HTML елементів
// const newItem = document.createElement('li'); // 1. Створення елемента
// newItem.textContent = 'Свіжостворений продукт'; // 2. Встановлення контенту
// itemsContainer.appendChild(newItem); // 3. Додавання до контейнера

// // Пояснення Завдання 2: Створення Елементів
// // Ви повністю праві! Ми працювали з маніпуляцією вмістом вже існуючих елементів 
// // (innerHTML, textContent), але не вивчали процес створення нових елементів з нуля.
// // document.createElement('li'): Це метод, який використовується для створення абсолютно 
// // нового, порожнього DOM-вузла у пам'яті.
// // container.appendChild(newElement): Це метод, який додає створений вузол (дитину) до 
// // вже існуючого елемента (батька).


// // Завдання 3
// const infoBox = document.body.querySelector('#infoBox');
// console.log(infoBox.hasAttribute('data-user-id'));  // true
// // Почитала про classList, спробую через нього
// infoBox.classList.toggle('active');
// console.log(infoBox.classList);

// // Завдання 4
// const targetPar = document.body.querySelector('#targetParagraph');
// targetPar.insertAdjacentHTML('beforebegin', '<h3 class="title">Новий Заголовок</h3>');  // Ти не чемний!))) Ми цього не вчили взагалі!!
// // метод insertAdjacentHTML є чистим і швидким способом вставки HTML поряд з іншим елементом.
// console.log(targetPar);
// console.log(document.body);

// // Завдання 5
// const toggleBtn = document.body.querySelector('#toggleBtn');
// toggleBtn.classList.toggle('is-disabled');  // я не встановила атрибут що залежить від класу, правильне рішення нижче
// console.log(toggleBtn);

// // // Припускаємо, що клас 'is-disabled' вже існує
// // 1. Отримуємо булеве значення наявності класу
// const isDisabled = toggleBtn.classList.contains('is-disabled'); 
// // 2. Встановлюємо DOM-властивість на основі цього булевого значення
// toggleBtn.disabled = isDisabled;

// // Виправлення Завдання 5: Логіка disabled
// // Проблема: Ви перемкнули клас, але не зв'язали це з атрибутом disabled.
// // Правило: Якщо ми хочемо вимкнути кнопку, ми маніпулюємо булевою DOM-властивістю element.disabled.
// // Логіка (Як це мало працювати):
// // Читаємо стан: Перевіряємо, чи є клас is-disabled.
// // Код: toggleBtn.classList.contains('is-disabled') (Повертає true або false).
// // Застосовуємо атрибут: Присвоюємо це булеве значення властивості disabled.
// // Код: toggleBtn.disabled = стан_класу;


// Фінальний Блок Практики (Закріплення)
// Сконцентруйтеся на використанні DOM-властивостей, classList, element.style, 
// dataset та методів контенту.

// Завдання 1: Зміна Класу та Застосування Атрибута
// Умова: Застосуйте логіку disabled на основі наявності класу.
// HTML:
// <button id="finalBtn" class="is-disabled">Фінальна Кнопка</button>
// Дії:
// Отримайте кнопку finalBtn.
// Використовуючи метод classList.contains(), перевірте, чи містить кнопка клас is-disabled.
// Встановіть булеву DOM-властивість btn.disabled на основі результату цієї перевірки.

// Завдання 2: Комбінована Стилізація та Атрибут
// Умова: Змініть стилі елемента та встановіть його розміри, використовуючи різні механізми DOM.
// HTML:
// <div id="styledBox">Це коробка</div>
// Дії:
// Отримайте елемент styledBox.
// Встановіть інлайн-стиль: opacity (прозорість) на 0.5.
// Встановіть CSS-стиль font-weight на "bold". (Пам'ятайте про CamelCase!).
// Встановіть HTML-атрибут width на 200 (використовуйте DOM-властивість).

// Завдання 3: Аналіз та Очищення
// Умова: Збережіть користувацькі дані, але повністю очистіть видимий вміст.
// HTML:
// <div id="dataContainer" data-session-id="xyz123">
//     <h1>Привіт</h1>
//     <p>Це важливий контент.</p>
// </div>
// Дії:
// Отримайте елемент dataContainer.
// Прочитайте значення атрибута data-session-id (використовуйте dataset).
//  Збережіть його у змінній sessionId.
// Очистіть увесь внутрішній вміст елемента div, залишивши його порожнім,
//  але так, щоб збереглися всі атрибути (id, data-session-id).
// Виведіть у консоль збережене значення sessionId.


// // Завдання 1

// const finalBtn = document.getElementById('finalBtn');
// console.log(finalBtn);  // чому тут і в останньому консоль дір властивість disabled true? для цього порядок коду не має значення ? Тобто не важливо що цей консоль лог виводиться перед тим як я змінила властивість ?
// const isDisabled = finalBtn.classList.contains('is-disabled');
// console.log(isDisabled);
// finalBtn.disabled = isDisabled;
// console.dir(finalBtn);

// // Завдання 2

// const styledBox = document.body.querySelector('#styledBox');
// console.dir(styledBox);
// styledBox.style.opacity = 0.5;  // оскільки opacity не є властивістю її неможна було задати напряму styledBox.opacity = 0.5;, тому я зробила через стилі
// styledBox.style.fontWeight = 'bold';
// styledBox.setAttribute('width', 200);  // оскільки width не є стандартною властивістю для div то пряма властивітсь styledBox.width =200; тут не спрацювала б. Тому я використала метод setAttribute 

// // Завдання 3

// const dataContainer = document.body.querySelector('#dataContainer');
// console.log(dataContainer);
// const sessionId = dataContainer.dataset.sessionId;
// console.log(sessionId);
// dataContainer.innerHTML = '';  // найшвидший та найлегший спосіб очистити внутрішні вміст елемента (child)




// Завдання на "зірочку" (DOM-Challenge)

// Завдання 1: Симуляція Прогрес-бару
// Умова: Вам потрібно синхронізувати дані з атрибута з візуальним відображенням.
// HTML:
// <div id="progressBar" data-progress="75" style="width: 0%; background-color: red;"></div>
// Дії:
// Отримайте значення прогресу з data-progress (використовуйте dataset).
// Встановіть це значення як ширину (width) елемента в інлайн-стилях, обов'язково додавши значок %.
// Логіка: Якщо прогрес більше або дорівнює 50, змініть колір фону (backgroundColor) на 'green'.

// Завдання 2: "Розумна" кнопка перемикання (без classList.toggle)
// Умова: Реалізуйте логіку перемикання станів, використовуючи 
// лише перевірку атрибутів та classList.add/remove.
// HTML:
// <button id="modeBtn" data-mode="light">Увімкнути темний режим</button>
// Дії:
// Прочитайте поточний режим з data-mode.
// Логіка: * Якщо режим 'light': змініть data-mode на 'dark', 
// змініть текст кнопки на "Увімкнути світлий режим", та додайте клас dark-theme до body.
// Якщо режим 'dark': змініть data-mode на 'light', змініть текст кнопки 
// на "Увімкнути темний режим", та видаліть клас dark-theme з body.

// Завдання 3: Трансформація Тегу (Мастер outerHTML)
// Умова: Перетворіть звичайний параграф на посилання, зберігши його контент.
// HTML:
// <div id="container">
//     <p id="convertMe">Натисни, щоб перейти в Google</p>
// </div>
// Дії:
// Отримайте текст з параграфа convertMe (виберіть найбільш безпечний метод).
// Використовуючи outerHTML, повністю замініть цей параграф на тег <a>.
// Нове посилання повинно мати:
// Той самий текст, що був у параграфі.
// Атрибут href зі значенням "https://google.com".
// Інлайн-стиль color: blue та text-decoration: underline.

// 💡 Порада для Завдання 3:
// Коли ви створюєте рядок для outerHTML, 
// ви можете використовувати шаблонні рядки (ті, що з косою лапкою `), щоб було зручніше вставляти
//  змінні: const html = <a href="..."> ${змінна_з_текстом} </a>;



// // Завдання 1
// const progressBar = document.body.querySelector('#progressBar');
// console.log(progressBar);
// const progress = progressBar.dataset.progress;
// console.log(progress);
// progressBar.style.width = progress + '%';
// if (Number(progress) >= 50) {  // перетворюємо рядок у число для надійності
//     progressBar.style.backgroundColor = 'green';
// }

// // Завдання 2
// const modeBtn = document.body.querySelector('#modeBtn');
// const currentMode = modeBtn.dataset.mode;
// console.log(modeBtn);
// if (currentMode === 'light') {
//     modeBtn.dataset.mode = 'dark';
//     modeBtn.textContent = 'Увімкнути світлий режим';
//     document.body.classList.add('dark-theme');
// } else {
//     modeBtn.dataset.mode = 'light';
//     modeBtn.textContent = 'Увімкнути темний режим';
//     document.body.classList.remove('dark-theme');
// }
// console.dir(document.body);
// наче зробила, але проблема в тому що воно саме пособі змінюється з dark на light за секунду, вічний двигун))))
// це через те що його в реальності треба повісити як обробник на клік набриклад

// Завдання 3

// const convertMePar = document.body.querySelector('#convertMe');
// const convertMeParContent = convertMePar.textContent;
// const html = `<a href="https://google.com">${convertMeParContent}</a>`;

// convertMePar.outerHTML = html;

// ці стилі не працюють оскільки посилаються на мертвий елемент. 
// Після застосування outerHTML посилання на елемент не дійсне бо його не існує
// треба отримати нове посилання на елемемент, абл прописати стилі прямо в змінну html:
// const html = `<a href="https://google.com" style="color: 'blue'; text-decoration: 'underline'">${convertMeParContent}</a>`;

// convertMePar.style.color = 'blue';
// convertMePar.style.textDecoration = 'underline';
// console.dir(convertMePar);

// завдання 3 варіант 1 - пропишем стилі зразу в змінну html

// const convertMePar = document.body.querySelector('#convertMe');
// const convertMeParContent = convertMePar.textContent;
// const html = `<a href="https://google.com" style="color: blue; text-decoration: underline;">${convertMeParContent}</a>`;
// convertMePar.outerHTML = html;
// console.dir(convertMePar);

// завдання 3 варіант 2 - отримаєм нове посилання на новостворений елемент

// const convertMePar = document.body.querySelector('#convertMe');
// const convertMeParContent = convertMePar.textContent;
// const html = `<a href="https://google.com">${convertMeParContent}</a>`;
// convertMePar.outerHTML = html;
// const convertMeAnchModified =  document.body.querySelector('#container > a');
// convertMeAnchModified.style.color = 'blue';
// convertMeAnchModified.style.textDecoration = 'underline';
// console.log(convertMeAnchModified);




// Задача "Картка товару": У вас є div з класом product і атрибутом data-price="100".
// Отримайте ціну з dataset.
// Якщо ціна більше 50, додайте елементу клас expensive (через classList).
// Змініть колір тексту на золотий ('gold') через style.
// Замініть внутрішній текст елемента на "Ціна: [значення ціни] грн", 
// але зробіть слово "грн" жирним (через innerHTML).

// const product = document.body.querySelector('.product');
// const price = product.dataset.price;
// console.dir(product);
// console.log(price);

// if (Number(price) > 50) {
//     product.classList.add('expensive');
//     product.style.color = 'gold';
// }

// product.innerHTML = `Ціна: ${price} <b>грн</b>.`;



// 6 приклад практика kwiga 040

// Task: При натисканні на кнопку:
// Отримати заголовок першого рівня і встановити для нього інший колір тла
// *Виставити для заголовків другого рівня розмір шрифта 20 px і їх колір
// Встановити src та alt, розміри для головного зображення
// *Встановити src та alt, розміри зображень в кожному section

// 1 - отримати посилання на кнопку
// 2 - Задати функцію обробник і навісити її як обробник події на клік
// 3 - Прописати фнкціонал обробника :
//      Отримати посилання на h1
//      Встановити для h1 колір тла

// const btn = document.querySelector('button');
// function clickHandler(e) {
//     const h1 = document.querySelector('h1');
//     h1.style.backgroundColor = 'yellow';

    
//     const h2Elements = document.querySelectorAll('h2');
//     h2Elements.forEach(h2 => {
//         h2.style.fontSize = '20px';
//         h2.style.color = 'green';
//     })

//     const img = document.querySelector('.mainImg');
//     img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT5aQxvTnjob-J9ak9Fhx1_shpxzNWhZA4lA&s';
//     img.alt = 'cat';
//     img.style.width = '300px';
//     img.style.height = '100px';
//     img.style.objectFit = 'cover';

//     const sectionImgs = document.querySelectorAll('section > img');
//     sectionImgs.forEach(img => {
//         img.src = 'https://media.istockphoto.com/id/1443562748/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%B8%D0%BB%D0%B0%D1%8F-%D1%80%D1%8B%D0%B6%D0%B0%D1%8F-%D0%BA%D0%BE%D1%88%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=k8RwP4usK_LCpQ1bPn3fNDLk3vtfptH7CEcEMZw_K1A=';
//         img.alt = 'red cat';
//         img.style.width = '300px';
//         img.style.height = '200px';
//         img.style.objectFit = 'contain';
//     })
// }

// btn.addEventListener('click', clickHandler);



// 7 завдання - інтерактивна галерея котиків
// У тебе є секція з трьома картинками. Тобі потрібно зробити так, щоб при кліку на будь-яку 
// картинку вона "виділялася" (ставала активною),
//  а при повторному кліку — поверталася до звичайного стану.
// Твої кроки:
// Вибрати всі картинки в секції.
// Для кожної картинки додати слухач події click.
// Усередині події використовувати classList.toggle, щоб вмикати/вимикати клас .selected.
// Твій "стартовий набір" (скопіюй це собі):
// CSS:
// img {
//     cursor: pointer;
//     transition: all 0.3s ease; /* щоб зміни були плавними */
//     margin: 10px;
// }

// /* Клас, який ти маєш додавати/видаляти через JS */
// .selected {
//     outline: 5px solid gold;
//     transform: scale(1.1);
//     filter: sepia(0.5);
//     border-radius: 15px;
// }
// 🎯 Що треба написати в JavaScript:
// Напиши код, який знайде ці картинки і зробить їх "живими". Постарайся згадати:
// Як вибрати всі елементи?
// Як перебрати їх циклом?
// Як звернутися до тієї картинки, на яку саме зараз клікнули (підказка: використовуй
//  ту саму назву змінної, яку ти даєш у forEach)?

// const sectionImgs = document.body.querySelectorAll('section > img');
// console.log(sectionImgs);

// function imgClickHandler(e) {
//     e.target.classList.toggle('selected');
//     // this.classList.toggle('selected');  // тут this буде так само посилатись на e.target тому можна і так і так

// }

// sectionImgs.forEach(img => {
//     img.addEventListener('click', imgClickHandler);
// })


// 8 завдання Вибір кольору кросівок

// Завдання: "Вибір кольору кросівок"
// Уяви, що ти розробляєш сторінку товару. У тебе є кілька кнопок-колірців. 
// Користувач має обрати один, і ми повинні показати йому назву обраного кольору.

// 📋 Твої умови:
// Делегування: Повісь один обробник подій на контейнер .color-picker.
// Один активний: Тільки одна кнопка може мати клас .active одночасно.
// Зміна тексту: Коли користувач клікає на колір, текст у тегу <span> (з класом .selected-name)
//  має змінитися на назву цього кольору.
// Дані: Назву кольору бери з атрибута data-color (який я вже додав у HTML).

// 🎯 Твій план дій у JS:
// Знайди контейнер .color-picker та спан .selected-name.
// Додай слухач кліку на контейнер.
// Перевір, чи клікнули саме по кнопці кольору (.color-btn).
// Знайди попередній активний елемент і зніми з нього клас.
// Додай клас .active новому елементу.
// Головна фішка: Візьми назву кольору з e.target.dataset.color і запиши її у span.textContent.
// Підказка щодо dataset: Якщо в HTML написано data-color="Синій", то в JS ти дістаєш це 
// через element.dataset.color. Це дуже зручний спосіб зберігати інформацію прямо в тегах.

// const colorPicker = document.body.querySelector('.color-picker');
// const selectedColorName = document.body.querySelector('.selected-name');
// console.log(selectedColorName);

// function colorPickerClickHandler(e) {

//     const clickedColorBtn = e.target;
//     // Пеевіряю чи клік відбувся саме на кнопках-колірцях, бо обробник висить на контейнері:
//     // Якщо ціль на яку клікнули (target) НЕ має вказаний клас то припинити все і вийти з обробника
//     // Якщо ціль на яку клікнули (target) має вказаний клас то пордовжити виконання скрипта
//     if (!clickedColorBtn.classList.contains('color-btn')) return;

//     // Якщо ми тут, значить клік відбувся на кнопці-колірці
//     // Далі Шукаю в контейнері елемент що має клас active
//     const currentActive = colorPicker.querySelector('.active');
//     // якщо є елемент з класом active то я видаляю цей клас - для реалізації вимоги що лише одна кнопка може бути активна
//     if (currentActive) {
//         currentActive.classList.remove('active');
//     }
//     // після того як видалено з попередньої активної кнопки клас active я додаю active до кнопки на яку клікнули (target)
//     clickedColorBtn.classList.add('active');
//     // і після додавання класу active до цілі я замінюю текст в span.selected-name з стандартного на той що містиься в атрибуті data-color, для відображення поточного активного кольорпу
//     selectedColorName.textContent = clickedColorBtn.dataset.color;

// }

// colorPicker.addEventListener('click', colorPickerClickHandler);



// 9 Приклад-практика kwiga 041 - Слайдер

// масив слайдів
// const slides = [ 
//     { 
//         src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop", 
//         alt: "Панорама каньйону" 
//     }, 
//     { 
//         src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
//         alt: "Гірський туман" 
//     }, 
//     { 
//         src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop",
//         alt: "Ліс та сонце" 
//     }, 
//     { 
//         src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
//         alt: "Гірське озеро" 
//     }
// ];

// let currentSlideIndex = 0;

// // Встановлюємо в якості початкового зображення перший елемент масиву slides
// const slideImg = document.querySelector('.slider-wrapper > img');
// updateSlideImg(currentSlideIndex);

// // за допомогою деструктуризації колекції отримуємо зразу обидві кнопки і зберігаємо в окремі змінні
// const [prevBtn, nextBtn] = document.querySelectorAll('.nav-btn');

// function nextSlideHandler(e) {
//     // if (currentSlideIndex < slides.length - 1) {  // якщо поточний індекс менше ніж довжина slides то збільшуємо індекс
//     //     currentSlideIndex++;
//     // } else {   // якщо поточний індекс більше ніж довжина slides то скидаємо поточний індекс на початок, тобто 0
//     //     currentSlideIndex = 0;
//     // }

//     // альтернатива умові if..else використати формулу з ділення з остачею
//     // як це працює - якщо число менше за дільник (4), остачею є саме це число
//     // (0 + 1) % 4 = 1
//     // (1 + 1) % 4 = 2
//     // (2 + 1) % 4 = 3
//     // (3 + 1) % 4 = 0  - 4 ділиться на 4 без остачі, currentSlideIndex = 0 і ми починаємо з початку - рух по колу
//     currentSlideIndex = (currentSlideIndex + 1) % slides.length;

//     updateSlideImg(currentSlideIndex);
// }

// nextBtn.addEventListener('click', nextSlideHandler);

// function prevSlideHandler(e) {
//     // if (currentSlideIndex > 0) {  // якщо поточний індекс більше ніж перший елемент в масиві slides то зменшуємо поточний індекс
//     //     currentSlideIndex--;
//     // } else {   // якщо поточний індекс меше ніж перший елемент в slides то скидаємо поточний індекс на останній елемент slides, тобто 4 
//     //     currentSlideIndex = slides.length - 1;
//     // }

//     // альтернатива умові if..else використати формулу з ділення з остачею
//     // як це працює - якщо число менше за дільник (4), остачею є саме це число
//     // (0 - 1 + 4) % 4 = 3
//     // (-1 - 1 + 4) % 4 = 2
//     // (-2 - 1 + 4) % 4 = 1
//     // (-3 - 1 + 4) % 4 = 0  - 0 ділиться на 4 без остачі, currentSlideIndex = 0 і ми починаємо знову з кінця - рух по колу
//     // currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;

//     updateSlideImg(currentSlideIndex);
// }

// prevBtn.addEventListener('click', prevSlideHandler);

// function updateSlideImg(currentSlideIndex) {
//     slideImg.src = slides[currentSlideIndex].src;
//     slideImg.alt = slides[currentSlideIndex].alt;
// }


// 9 Приклад-практика kwiga 041 - Слайдер
// Просунутіший рівень рішення задачі з Слайдером (рефакторинг - уникаєм дублювання коду, 
// розділяємо відповідальності в обробнику - окремо лічильник окремо функціонал)

// const slides = [ 
//     { 
//         src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop", 
//         alt: "Панорама каньйону" 
//     }, 
//     { 
//         src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
//         alt: "Гірський туман" 
//     }, 
//     { 
//         src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop",
//         alt: "Ліс та сонце" 
//     }, 
//     { 
//         src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
//         alt: "Гірське озеро" 
//     }
// ];

// // Розподіл відповідальності
// // Клас описує, як слайдер має поводитися, але нічого не знає про теги <img> чи кнопки
// class Slider {
//     // конструктор створює новий екземпляр слайдера. 
//     // Він запам'ятовує масив слайдів і початковий індекс (за замовчуванням 0)
//     constructor(slides, currentSlideIndex = 0) {
//         this.slides = slides;
//         // У конструкторі звертаємося до сетера (без підкреслення), щоб початковий індекс теж пройшов перевірку на коректність.
//         this.currentSlideIndex = currentSlideIndex;
//     }

//     // сеттер - щоразу коли ми змінюємо слайд(номер слайда), він перевіряє чи це число,
//     //  чи воно не виходить за дозволені межі.
//     // якщо щось не так - він видає помилку зупиняючи код. Це захищає від багів.
//     set currentSlideIndex(v) {
//         if (typeof v !== 'number') {
//             throw TypeError();
//         }
//         if (v < 0 || v >= this.slides.length || !Number.isInteger(v)) {
//             throw RangeError();
//         }
//         // це робиться для уникнення безкінечної рекурсії, щоб сетер currentSlideIndex 
//         // не викликав сам себе поки не переповниться стек
//         // Підкреслення _ — це просто домовленість між програмістами, яка означає: 
//         // "Будь ласка, не чіпай цю властивість напряму, використовуй сетер/гетер".
//         // тобто тут створиться нова властивітсь обєкта _currentSlideIndex зі значенням v
//         this._currentSlideIndex = v;
//     }

//     // Гетер — просто повертає значення внутрішньої властивості _currentSlideIndex
//     // це робиться для уникнення безкінечної рекурсії, щоб геттер currentSlideIndex 
//     // не викликав сам себе поки не переповниться стек
//     // Підкреслення _ — це просто домовленість між програмістами, яка означає: 
//     // "Будь ласка, не чіпай цю властивість напряму, використовуй сетер/гетер".
//     // тобто тут буде повертатись створена раніше властивість обєкта зі значенням v
//     get currentSlideIndex() {
//         return this._currentSlideIndex;
//     }

//     //Метод для кроку вперед
//     incSlideIndex() {
//         this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
//     }

//     // Метод для кроку назад
//     decSlideIndex() {
//         this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
//     }

//     // Зручний гетер, який автоматично віддає цілий об'єкт поточного слайда {src, alt}, 
//     // щоб тобі не доводилося щоразу звертатися до масиву вручну.
//     get currentSlide() {
//         return this.slides[this._currentSlideIndex];
//     }
// }

// // Коли ми виходимо за межі класу, ми починаємо працювати з реальними елементами на сторінці
// const slideImg = document.querySelector('img');  // отримуємо посилання на картинку

// // Властивість onerror спрацює, якщо картинка за посиланням не завантажилась
// // onerror — це подія, яка виникає, якщо посилання на картинку виявилося "битим". 
// // В такому разі користувач побачить запасне фото котика замість порожнього місця.
// // він спрацює один раз при першому запуску, але слідкуватиме за битими картинками весь час
// // і щоразу коли відбувається зміна посилань в змінній slideImg наш обробник слухатиме!
// slideImg.onerror = () => {
//     slideImg.src = "https://www.cdc.gov/healthy-pets/media/images/2024/04/Cat-on-couch.jpg";
// };

// // отримуємо посилання на кнопки вперед назад, 
// // і за длопомогою деструтктуризації одразу зберігаємо їх у відповідні змінні
// const [prevBtn, nextBtn] = document.querySelectorAll('.nav-btn');  

// // Ми обгорнули все в блок try...catch. Це потрібно, тому що наш сетер у класі 
// // може "викинути" помилку, якщо дані будуть некоректними.
// try {
//     // Виносимо відповідальність за обчислення для слайдера на клас
//     const slider = new Slider(slides); // Створюємо об'єкт slider на основі нашого класу

//     updateSlideImg(slider.currentSlide);

//     // створюємо обробник для кроку вперед
//     function nextSlideHandler() {
//         // Тут якраз і видно розподіл відповідальностей:
//         // slider — відповідає за розрахунки.
//         // updateSlideImg — відповідає за малювання в браузері.
//         slider.incSlideIndex();  // Кажемо слайдеру (викликаємо метод обєкта класу)): "збільш свій внутрішній індекс"
//         updateSlideImg(slider.currentSlide);  // Кажемо інтерфейсу: "відобрази новий поточний слайд"
//     }
//     nextBtn.addEventListener('click', nextSlideHandler)  // навішуємо обробник на клік на кнопку вперед

//     // створюємо обробник для кроку назад
//     function prevSlideHandler() {
//         slider.decSlideIndex();  // Кажемо слайдеру (викликаємо метод обєкта класу): "зменш свій внутрішній індекс"
//         updateSlideImg(slider.currentSlide);  // Кажемо інтерфейсу: "відобрази новий поточний слайд"
//     }
//     prevBtn.addEventListener('click', prevSlideHandler)  // навішуємо обробник на клік на кнопку назад

//     function updateSlideImg(currentSlide) {
//         // currentSlide - обєкт {src, alt}
//         slideImg.src = currentSlide.src;
//         slideImg.alt = currentSlide.alt;

//     }

// } catch(e) {
//     console.error(e);
// }



// ------------------------------------------------------------------------------------------------------------------

                            // DOM Лічильник (Counter)

// план кроків до реалізації:
// спершу треба отримати посилання на кнопки
// навісити обробник на кнопку -
// навісити обробник на кнопку +
// в обробнику зменшити/збільшити лічильник

// // за допомогою дестурктуризації колекції зберігаємо отримані кнопки у особистіі змінні
// const [decrBtn, incrBtn] = document.querySelectorAll('.counterBtn');
// // отримуємо доступ до елементу лічильника 
// const counterEl = document.querySelector('#counter');

// // створюємо змінну яка буде зберігати поточний стан лічильника
// let counter = 0;
// // задаємо контент елементу counterEl, значеннням якого буде те що в змінній counter
// // замість того щоб окремо прописувати 0 в div HTML і окремо зазначати той самий 0 в скрипті
// // так ми створюємо єдине джерело даних для цього елемента, що допоможе уникнути багів
// // всі ті змінні значення яких ми бачимо на сторінці - називаються СТАНОМ
// counterEl.textContent = counter;

// function decrCount(e) {
//      // зменшуємо значення стану
//     counter--;
//     // виводимо змінений стан на сторінку
//     counterEl.textContent = counter;

// }
// // навішуємо обробник на кнопку -
// decrBtn.addEventListener('click', decrCount);

// function incrCount(e) {
//     // збільшуємо значення стану
//     counter++;
//     // виводимо змінений стан на сторінку
//     counterEl.textContent = counter;
// }
// // навішуємо обробник на кнопку +
// incrBtn.addEventListener('click', incrCount);


// наш лічильник готовий, він гарно працює, але його можна порефакторити, оскільки він вийшов трохи як "спагетті код"
// У нас операція виведення поточного стану counterEl.textContent = counter; дублюється тричі
// крім того функціонал для зміни стану counter перемішаний з функціоналом виведення на сторінку
// тобто логіка і view зашиті в одному обробнику - це погана практика

// рефакторинг - це зміни коду без зміни функціоналу (покращення читабельності коду, більш сучасні прийоми тощо)
// реінжиніринг - це зміни функціоналу та зміни коду (функціональні обновки)
// view - це саме сторінка яка відображає елементи, тобто те що ми бачимо на моніторі
// model(моделька) - це всі дані застосунку (наприклад змінна counter)
// Спагеті-код — це заплутаний, погано структурований вихідний код, у якому логіка програми настільки переплетена, 
//      що внесення навіть маленької зміни в одному місці призводить до непередбачуваних помилок у зовсім іншому
// MVVM (Model - View - ViewModel) - це архітектурний підхід, який розділяє інтерфейс (View) та дані (Model) за 
//      допомогою спеціального посередника (ViewModel), що автоматично синхронізує стан програми з тим, 
//      що користувач бачить на екрані
// Клас - дає змогу зберігати дані і методи для роботи з ними


// Та сама задача з Counter тільки з рефакторингом
// Винесем змінну counter та методи його збільшення/зменшення в оремий клас (інкапсулюємо)

// // Model
// class Counter {
//     constructor(counter) {
//         this.counter = counter;
//     }
//     incrCounter() {
//         this.counter++;
//     }
//     decrCounter() {
//         this.counter--;
//     }
// }

// // ViewModel
// // за допомогою дестурктуризації колекції зберігаємо отримані кнопки у особистіі змінні
// const [decrBtn, incrBtn] = document.querySelectorAll('.counterBtn');
// // отримуємо доступ до елементу лічильника 
// const counterEl = document.querySelector('#counter');

// const count = new Counter(0);

// updateView();

// function decrCounter(e) {
//     count.decrCounter();
//     updateView();
// }
// decrBtn.addEventListener('click', decrCounter);

// function incrCounter(e) {
//     count.incrCounter();
//     updateView();
// }
// incrBtn.addEventListener('click', incrCounter);

// function updateView() {
//     counterEl.textContent = count.counter;
// }



// --------------------------------------------------------------------------------------------------------------------------

                                    // DOM Перемикач теми (Theme toggler)

// Ми напишемо "Перемикач теми (Theme Toggler)". 
// У нас буде кнопка, яка перемикає режим: Light (Світла) або Dark (Темна).
// 📋 Умова задачі:
// View: Кнопка на сторінці.
// Model: Зберігає поточну тему (рядок "light" або "dark").
// ViewModel: Коли ми клікаємо на кнопку, модель змінює тему, а інтерфейс реагує: 
// змінюється колір фону сторінки та текст на самій кнопці.
// 🏗️ Кроки до реалізації (твій план дій):
// Крок 1: Model (Клас)
// Створи клас ThemeModel.
// У конструкторі ініціалізуй властивість _theme (наприклад, початкове значення "light").
// Додай getter theme, щоб отримувати поточне значення.
// Додай метод toggleTheme(). Логіка проста: якщо було "light" — став "dark", і навпаки.
// Крок 2: View (DOM)
// Знайди у своєму HTML кнопку (можеш просто створити її через document.querySelector).
// Крок 3: ViewModel (Зв'язка)
// Створи екземпляр класу: const themeManager = new ThemeModel().
// Напиши функцію render(). Вона має:
// Подивитися в модель: яка зараз тема?
// Якщо "dark" — додати до document.body клас або просто змінити style.backgroundColor на чорний.
// Якщо "light" — змінити фон на білий.
// Оновити текст на кнопці (наприклад, "Switch to Dark", якщо зараз світло).
// Напиши обробник кліку на кнопку: він має викликати themeManager.toggleTheme(), а потім 
// обов'язково викликати render().
// 💡 Підказка:
// Згадай про нашу розмову: у методі toggleTheme ми просто міняємо рядок у пам'яті. 
// А всю "брудну роботу" з фарбування сторінки робимо лише в одному місці — 
// у функції render (це і є наш updateView).


// class ThemeModel {
//     constructor() {
//         this._theme = 'light';
//     }

//     get theme() {
//         return this._theme;
//     }

//     toggleTheme() {
//         // Використовуємо else, щоб спрацювало щось ОДНЕ
//         // if (this._theme === 'light') {
//         //     this._theme = 'dark';
//         // } else {
//         //     this._theme = 'light';
//         // }

//         // або виккористовуємо тернарний оператор
//         this._theme = this._theme === 'light' ? 'dark' : 'light';
//         // де this._theme = - це одразу зберегти результат в змінну _theme результат умови
//         //  this._theme === 'light' - це умова, якщо light true то збережи у змінну dark, якщо light false то збережи у змінну light
        

//     }
// }

// const themeBtn = document.querySelector('.themeBtn');

// const themeManager = new ThemeModel();

// function themeBtnHandler() {
//     console.log(themeManager.theme);
//     // Модель, зміни тему. Рендер, малюй!
//     themeManager.toggleTheme();
//     render();
// }

// themeBtn.addEventListener('click', themeBtnHandler);

// function render() {
//     const currTheme = themeManager.theme;

//     if (currTheme === 'dark') {
//         document.body.classList.add('darkTheme');
//         document.body.classList.remove('lightTheme');
//         themeBtn.textContent = 'Switch to Light';
//     } else {
//         document.body.classList.add('lightTheme');
//         document.body.classList.remove('darkTheme');
//         themeBtn.textContent = 'Switch to Dark';
//     } 

//     // // або ще простіший варіант функції render()
//     // // Просто видаляємо всі класи тем і додаємо той, що зараз у моделі
//     // document.body.classList.remove('lightTheme', 'darkTheme');
//     // document.body.classList.add(`${themeManager.theme}Theme`);
    
//     // // Оновлюємо текст кнопки залежно від того, що буде НАСТУПНИМ
//     // themeBtn.textContent = themeManager.theme === 'light' ? 'Switch to Dark' : 'Switch to Light';

// }




// --------------------------------------------------------------------------------------------------------------------------

                                    // DOM Картка товару: Обране (Favourite toggle)

// Умова задачі:
// Уяви картку товару. На ній є кнопка-сердечко.
// View: Кнопка з текстом (або іконкою).
// Model: Зберігає стан: товар у списку обраного чи ні (логічне значення true або false).
// ViewModel: При кліку на кнопку ми змінюємо стан у моделі, а інтерфейс реагує: 
// кнопка змінює колір (наприклад, стає червоною) і змінюється текст ("Додати в обране" 
// -> "Видалити з обраного").
// 🏗️ Твій план дій:
// Крок 1: Model (Клас)Створи клас ProductModel.
// У конструкторі ініціалізуй властивість _isFavorite (початкове значення false).
// Додай getter isFavorite.
// Додай метод toggleFavorite().
// Завдання із зірочкою: Спробуй використати тернарний оператор або оператор "НЕ" (!), 
// щоб змінити true на false і навпаки в один рядок.
// Крок 2: View (DOM)Знайди кнопку на сторінці (наприклад, .fav-btn).
// Крок 3: ViewModel (Зв'язка)Створи екземпляр класу.Напиши функцію render(). 
// Вона має:Якщо isFavorite — додати кнопці клас active (уяви, що в CSS він робить її червоною).
// Якщо false — прибрати клас active.Оновити текст кнопки.Напиши обробник кліку, який смикає 
// модель і викликає render.
// 💡 Маленька підказка щодо логіки: Для перемикання true/false найпростіше використовувати оператор 
// заперечення:this._isFavorite = !this._isFavorite;
// (це буквально означає: "зроби значенням те, чим воно зараз НЕ є").


// class ProductModel {
//     constructor() {
//         this._isFavorite = false;
//     }
//     get isFavorite() {
//         return this._isFavorite;
//     }
//     toggleFavorite(){
//         //це буквально означає: "зроби значенням те, чим воно зараз НЕ є"
//         this._isFavorite = !this._isFavorite;
//     }
// }

// const favBtn = document.querySelector('.fav-btn');
// const favProduct = new ProductModel();

// function favBtnHandler(e) {
//     favProduct.toggleFavorite();
//     render();
// }

// favBtn.addEventListener('click', favBtnHandler);

// function render() {
//     const currIsFav = favProduct.isFavorite;
//     // тут додаємо другий аргумент, який щоразу перевірятиме поточний станt his._isFavorite = false чи true в обєкті-екземплярі
//     // це дозволить синхронізувати перемикач з моделлю а не інтерфейсом, що гарантує безперебійну роботу
//     // це заміняє запис if .. else: if currIsFav = true то favBtn.classList.remove('active') і навпаки
//     favBtn.classList.toggle('active', currIsFav);
//     favBtn.textContent = currIsFav ? 'Remove from favorite' : 'Add to favorite';
// }



// ----------------------------------------------------------------------------------------------------------------------------------------------

                                // DOM Сливання та занурення подій (Bubling and Capturing)
                                // Керування розповсюдженням подій

// const body = document.body;
// const section = document.querySelector('section');
// const button = document.querySelector('button');

// function btnClickHandler(e) {
//     console.log('e :>> ', e);
//     console.log('e.target :>> ', e.target);  // ціль події (там де відбувся клік), найбільш занурений елемент
//     console.log('this :>> ', this);  // e.currentTarget = this
//     console.log('e.currentTarget :>> ', e.currentTarget);  // e.currentTarget = this

//     this.style.backgroundColor = 'yellow'
// } 

// button.addEventListener('click', btnClickHandler);

// function clickHandler(e) {
//     console.log('e :>> ', e);
//     console.log('e.target :>> ', e.target);  // ціль події (там де відбувся клік), найбільш занурений елемент
//     console.log('this :>> ', this);  // e.currentTarget = this
//     console.log('e.currentTarget :>> ', e.currentTarget);  // e.currentTarget = this
//     console.log('---------------------------------------------');

// } 

// //Capturing - порядок виклику обробників від кореневого до найбільш заглибленого елемента
// body.addEventListener('click', clickHandler, {capture: true});
// section.addEventListener('click', clickHandler, {capture: true});
// button.addEventListener('click', clickHandler, {capture: true});

// //Bubbling - порядок виклику обробників від найбільш заглибленого елемента до кореневого
// button.addEventListener('click', clickHandler);
// section.addEventListener('click', clickHandler);
// body.addEventListener('click', clickHandler);


// Припинення розповсюдження події
// let clickCounter = 0;

// body.addEventListener('click', () => {
//     clickCounter++;
//     console.log('clickCounter :>> ', clickCounter);
// })

// button.addEventListener('click', e => {
//     e.stopPropagation();  // припинення розповсюдження події на button(на section та body воно вже не розповсюджується)
// })


// Зробимо наочний приклад. Уяви "матрьошку": великий DIV (батько), а всередині нього BUTTON (дитина).
// Ми повісимо обробники на обох, але для DIV ми зробимо два слухача: один на занурення, інший на спливання.

// знаходимо елементи
// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');

// // 1 Слухач/Обробник на div (Занурення - Capture: true);
// parent.addEventListener('click', () => {
//     console.log('1 div: Фаза занурення (Capture)');
// }, {capture: true});

// // 2 Слухач/Обробник на btn (Ціль - вона в самому центрі)
// child.addEventListener('click', () => {
//     console.log('2 btn: Фаза цілі (Target)');
// })

// // 3 Слухач/Обробник на div (Спливання - Capture: false за замовчуванням)
// parent.addEventListener('click', () => {
//     console.log('3 div: Фаза спливання (Bubbling)');
// })

// Що ти побачиш у консолі, якщо натиснеш на КНОПКУ:
// 1. DIV: Фаза занурення (Capture) (Подія тільки-но почала свій шлях зверху вниз. 
//     Вона ще не дійшла до кнопки, але DIV її вже "перехопив", бо ми вказали capture: true).
// 2. BUTTON: Фаза цілі (Target) (Подія досягла самого центру — кнопки).
// 3. DIV: Фаза спливання (Bubbling) (Подія розвернулася і полетіла назад вгору. 
//     Тепер спрацював другий обробник на DIV, який працює за замовчуванням).

// Занурення (capture: true) використовують рідко, але воно корисне, 
// якщо ти хочеш заблокувати подію до того, як вона дійде до елемента.
// Наприклад: ти хочеш заборонити кліки по всіх кнопках у певному блоці. 
// Ти вішаєш на батьківський контейнер обробник із capture: true і в ньому 
// пишеш event.stopPropagation(). Подія "помре", ще не встигнувши долетіти вниз до самих кнопок.
// Тепер, дивлячись на цей "маршрут" події, стало зрозуміліше, що capture — 
// це просто вибір фази для зупинки "попутки", а не зміна самої дороги? 😉

// Маршрут незмінний: Подія завжди йде за маршрутом: Window → ... → Target → ... → Window.
//  Це як поїзд, який завжди їде від початкової станції до кінцевої і назад.
// capture: true: Це твоя можливість зайти в поїзд ще на шляху ДО кінцевої зупинки (Target).
// capture: false (або нічого): Це можливість сісти в поїзд на зворотному шляху, 
// коли він уже ПОВЕРТАЄТЬСЯ з кінцевої зупинки.



// Приклад з використанням stopPropagation()
// Умова задачі: "Скляний купол"
// У нас є контейнер (div), і ми хочемо, щоб при кліку на нього в консоль виводилося: "Контейнер відчув клік!". 
// Але всередині цього контейнера є маленька кнопка. Ми хочемо, щоб при кліку на неї:
// Виводилося: "Кнопка натиснута!".
// АЛЕ контейнер про це не дізнався (тобто повідомлення про контейнер не повинно з'явитися).
// 🏗️ Твій план дій:
// Крок 1: HTML Створи div з id container і всередині нього button з id btn.
// Крок 2: JS (Без зупинки)
// Повійшав обробник на container, який робить console.log('Контейнер відчув клік!').
// Повійшав обробник на btn, який робить console.log('Кнопка натиснута!').
// Перевір у консолі: при кліку на кнопку мають вискочити обидва написи.
// Крок 3: JS (Із зупинкою)
// Додай у функцію обробника кнопки один рядок з event.stopPropagation().
// Спробуй клікнути знову.
// 💡 Питання для самоперевірки:
// Що станеться, якщо ти натиснеш на порожнє місце в container (не на кнопку)? Чи спрацює обробник кнопки?
// Що саме "зупинив" stopPropagation: фазу занурення чи фазу спливання в даному випадку?


// const container = document.querySelector('#container');
// const btn = container.querySelector('#btn');

// function containerClickHandler() {
//     console.log('Контейнер відчув клік!');
// }

// function btnClickHandler(e) {
//     e.stopPropagation();
//     console.log('Кнопка натиснута!');

// }

// container.addEventListener('click', containerClickHandler);
// btn.addEventListener('click', btnClickHandler);

// Результат на сплиття:
// Якщо не прописати в btnClickHandler e.stopPropagation(); то при кліку на кнопку спрацьовують 
// обидва обробника і той що на кнопці і той що на контейнері, 
// а при кліку на контейнер спрацьовує лише обробник контейнера
// Якщо прописати в btnClickHandler e.stopPropagation(); то при кліку на кнопку спрацьовує 
// лише обробник на кноці, а той що на контейнері не працює. А при кліку на контейнер спрацьовує лише 
// обробник що висить на контейнері.
// В даному випадку e.stopPropagation(); в btnClickHandler зупинив фазу спливання від цілі target 
// до рутового елемента currentTarget


// Приклад попередньої задачі, але покладу e.stopPropagation(); на занурення а не на спливання

// const container = document.querySelector('#container');
// const btn = container.querySelector('#btn');

// function containerClickHandler(e) {
//     e.stopPropagation();
//     console.log('Контейнер відчув клік!');
//     console.log(e.target);
//     console.log(e.currentTarget);
// }

// function btnClickHandler() {
//     console.log('Кнопка натиснута!');

// }

// container.addEventListener('click', containerClickHandler, {capture: true});
// btn.addEventListener('click', btnClickHandler);

// Результат на занурення :
// Якщо не прописати в containerClickHandler{capture: true} e.stopPropagation(); то при кліку на 
// кнопку спрацьовують обидва обробника і той що на кнопці і той що на контейнері, 
// а при кліку на контейнер спрацьовує лише обробник контейнера
// Якщо прописати в containerClickHandler{capture: true} e.stopPropagation(); то при кліку на 
// кнопку спрацьовує лише той обробник що на контейнері, той що на кнопці не спрацьовує
// А при кліку на контейнер спрацьовує лише обробник що висить на контейнері.
// В даному випадку e.stopPropagation(); в containerClickHandler{capture: true} зупинив фазу занурення  
// від рутового елемента currentTarget до цілі target при цьому він всерівно знає що клік відбувся на кнопку



// 🛠 Завдання: "Розумне дерево коментарів"
// Уяви, що ти розробляєш систему коментарів. У кожного коментаря є кнопка 
// "Подобається" (Like) та кнопка "Видалити".
// Що тобі потрібно зробити (JS):
// Делегування: Повійшай лише один обробник подій на батьківський елемент #comments-container.
// Логіка кнопок: * Якщо натиснуто на кнопку з класом .like-btn — виведи в консоль: "Дякуємо за лайк!".
// Якщо натиснуто на кнопку з класом .delete-btn — виведи в консоль: "Коментар видалено!".
// Використання target: Визнач, на яку саме кнопку натиснули, використовуючи e.target та
//  метод .classList.contains().
// Спецефект (currentTarget): При натисканні на будь-що всередині контейнера
//  (кнопку, текст або сам коментар), змінюй колір фону всього контейнера (#comments-container) 
//  на випадковий світлий колір.
// Stop Propagation (Бонус): Зроби так, щоб при кліку на кнопку Delete, спрацьовував тільки 
// напис про видалення, але фон контейнера НЕ змінювався. (Тут тобі доведеться подумати, 
//     де саме поставити обробник і як зупинити подію).
// Твій алгоритм:
// Отримати посилання на #comments-container.
// Написати функцію-обробник.
// Використати e.target для ідентифікації кнопок.
// Використати e.currentTarget (або this), щоб змінити колір фону.

// const commentsContainer = document.querySelector('#comments-container');

// function commentsHandler(e) {
//     if (e.target.classList.contains('like-btn')) {
//         console.log('Дякуємо за лайк!');
//     }
//     if (e.target.classList.contains('delete-btn')) {
//         // тут e.stopPropagation(); стріляє в повітря, він зупиняє рух події яка вже фактично закінчила свій шлях
//         // e.stopPropagation();    // і з цим рядком і без нього код працює однаково (так як вимагало завдання)
//         console.log('Коментар видалено!');
//     } else {
//         e.currentTarget.style.backgroundColor = 'lightblue'
//     }
// }

// commentsContainer.addEventListener('click', commentsHandler);

// більш чистий професійний код обробника commentsHandler:
// function commentsHandler(e) {
//     const target = e.target;
//     if (target.classList.contains('like-btn')) {
//         console.log('Дякуємо за лайк!');
//     } else if (target.classList.contains('delete-btn')) {
//         console.log('Коментар видалено!');
//         return;  // просто вийдемо з функції(перервемо її), щоб код нижче (з фоном) не зпрацював
//     }
//     // спрацює для всього крім видалення 
//     e.currentTarget.style.backgroundColor = 'lightblue'
    
// }

// піднімаємо планку, більш продуманий чистий професійний код обробника commentsHandler
// змінимо html додамо в button ще span <button class="delete-btn"><span class="icon">🗑</span> Delete</button>
// тепер бачимо, що наша кнопка Delete містить в собі іконку span із кошиком. (іконка кошика загорнута в span)
// тепер якщо користувач натисне точно на іконку кошика то e.target буде span а не btn з класом delete-btn
// відповідно  умова target.classList.contains('delete-btn') поверне 
// false, логіка зламається - коментар не видалиться, а фон контейнера змінить колір

// function commentsHandler(e) {
//     const target = e.target;
//     if (target.classList.contains('like-btn')) {
//         console.log('Дякуємо за лайк!');
//     } else if (target.closest('.delete-btn')) {
//         console.log('Коментар видалено!');
//         return;  // просто вийдемо з функції(перервемо її), щоб код нижче (з фоном) не зпрацював
//     }
//     // спрацює для всього крім видалення 
//     e.currentTarget.style.backgroundColor = 'lightblue'
    
// }

// closest() рятує в даному випадку ситуацію, тому що замінює купу if-else які були б необхідні для 
// того щоб кнопка виконала те що ми вд неї очікували. При натисканні на span метод closest() 
// перевіряє вказаний в ньому клас починаючи з самого елемента і вверх по ієрархії структури доки 
// не знайде відповіний клас. якщо знайде то поверне перший знайдений елемент, тоді підтвердиться 
// наша умова - стане трушна, і код в середині умови виконається. Якощ не знайде відповідний 
// селектор то поверне null, фолсі значення і код в середині умови проігнорується.






// Завдання: "Галерея з фільтром та модалкою"
// У тебе є список карток. У кожній картці є кнопка "У вибране" (зірочка). 
// Також, при кліку на саму картку, має відкриватися "модальне вікно" 
// (умовно — просто вивід повідомлення).
// Твоє завдання (JS):
// Делегування: Повійшай один обробник на #gallery.
// Дія кнопки: Якщо клікнули на кнопку .star-btn (або на зірочку всередині неї — 
//     використай .closest()), виведи в консоль: "Фото [ID] додано у вибране".
// Підказка: ID можна взяти через target.closest('.photo-card').dataset.id.
// Дія картки: Якщо клікнули на будь-яке місце картки .photo-card, але НЕ на кнопку зірочки,
//  виведи в консоль: "Відкриваємо перегляд фото [ID]".
// Зміна кольору: При кліку на будь-яку картку, вона має підсвітитися (наприклад, жовта рамка),
//  але тільки одна картка за раз.
// Головна фішка (stopPropagation):
// Додай на саме window обробник кліку, який виводить: "Клік по всьому екрану".
// Зроби так, щоб при кліку всередині галереї (#gallery), подія не спливала до window 
// (щоб ми не бачили повідомлення "Клік по всьому екрану", коли працюємо з фото).
// 💡 Що це перевірить:
// target + closest: як ти дістаєш дані з батьківського елемента через дитину.
// Логіка виключення: як зробити так, щоб клік по кнопці не вважався кліком по картці 
// (використовуючи return або else if).
// stopPropagation: як "ізолювати" цілу секцію сайту від глобальних обробників на window.

// const gallery = document.querySelector('#gallery');

// function galleryClickHandler(e) {
    
//     // при кліку на галерею зупиняємо спливання події до window, так window не дізнається про цей клік
//     e.stopPropagation();
    
//     const target = e.target;
//     const photoCard = target.closest('.photo-card');

//     // Використовуй return на самому початку функції (early return), щоб відсікти непотрібні 
//     // випадки. Це робить код значно чистішим і легшим для читання, бо тобі не 
//     // потрібно тримати в голові купу вкладених if/else
//     if (!photoCard) return;

//     const photoCardId = photoCard.dataset.id;

//     if (target.closest('.star-btn')) {
//         console.log(`Фото ${photoCardId} додано у вибране`);
//     } else {
//         console.log(`Відкриваємо перегляд фото ${photoCardId}`);
        
//         // додати жовту рамку на target і зняти з усіх інших елементів
//         const photoCards = gallery.querySelectorAll('.photo-card');
//         photoCards.forEach(card => {
//             if (card !== photoCard) {
//                 card.style.borderColor = 'blue';
//             } else {
//                 card.style.borderColor = 'yellow';
//             }

//             // або тернарний оператор замість if else
//             // gallery.querySelectorAll('.photo-card').forEach(card => {
//             //     card.style.borderColor = (card === photoCard) ? 'yellow' : 'blue';
//             // });
//         }) 
//     }
    
// }

// function windowClickHandler(e) {
//     // window бачитиме події які до нього долетіли, але клік на галерею ми обмежили
//     // в обробнику для галереї, і заблокували на сплиття, тому він не доходить до window
//     // а клік на все крім галереї доходить до window
//     console.log('Клік по всьому екрану');

// }

// gallery.addEventListener('click', galleryClickHandler);
// window.addEventListener('click', windowClickHandler);





// Завдання : Менеджер завдань з пріоритетами
// У тебе є список завдань. При кліку на саме завдання воно має "виконуватися" 
// (змінювати колір тексту). Але всередині є кнопка для зміни пріоритету (зірочка) 
// та кнопка видалення.
// Що треба зробити в JS:
// Делегування: Повійшай обробник кліку на головний контейнер #todo-app.
// Ізоляція: Зроби так, щоб будь-який клік всередині #todo-app не спливав 
// до window (пам'ятаєш про "печеру"?).
// Логіка кнопок (використовуй early return):
// Якщо клікнули на .delete-btn — виведи: "Видаляємо завдання № [ID]". 
// Обов'язково перерви функцію, щоб код нижче не спрацював.
// Якщо клікнули на .priority-btn — зміни колір фону саме цієї картки (.task-item) 
// на світло-червоний (#ffe6e6) та виведи: "Пріоритет змінено". Теж перерви функцію.
// Логіка картки:
// Якщо клікнули просто на текст завдання або на будь-яке місце в межах .task-item 
// (але не на кнопки!) — переключи колір тексту цього завдання на сірий та додай 
// закреслення (стиль text-decoration: line-through).
// Глобальний клік:
// Додай на window обробник, який каже: "Клік поза застосунком". Він не має спрацьовувати, 
// коли ми працюємо з тасками.
// 🔥 Підказка по структурі функції:
// Спробуй таку послідовність (як ми обговорювали):
// e.stopPropagation().
// Знайти taskItem через closest.
// Якщо !taskItem — return.
// Перевірка на кнопку видалення -> return.
// Перевірка на кнопку пріоритету -> return.
// Весь інший код (для виконання завдання).

// const todoApp = document.querySelector('#todo-app');

// function todoAppClickHandler(e) {
//     // спершу зупинимо спливання до window події на клік в межах todo-App
//     e.stopPropagation();

//     const target = e.target;
//     const taskItem = target.closest('.task-item')
    
//     // якщо клік не на елементі списку то нічого не робим (виходим з обробника)
//     if (!taskItem) return;

//     const taskItemId = taskItem.dataset.id;

//     if (target.closest('.delete-btn')) {
//         console.log(`Видаляємо завдання № ${taskItemId}`);
//         return;
//     }

//     if (target.closest('.priority-btn')) {
//         if (taskItem.style.borderColor === '#ffe6e6' || taskItem.style.borderColor === 'rgb(255, 230, 230)') {
//             taskItem.style.borderColor = '#ccc'; 
//         } else {
//             taskItem.style.borderColor = '#ffe6e6';
//         }

//         console.log('Пріоритет змінено');
//         return;
//     }

//     // якщо всі попередні if умови не підійшли то вважаємо що клік відбувся в межах картки але не на кнопках
//     // також додамо повернення до стану по замовчуванню при повторному кліку на картку

//         // перевіряємо чи присутнє в момент закреслення на картці
//         const isDone = taskItem.style.textDecoration === 'line-through';
//         // перемикаємось в залежності від поточного стану isDone
//         taskItem.style.textDecoration = isDone ? 'none' : 'line-through';
//         taskItem.style.color = isDone ? '' : 'grey';


// }


// todoApp.addEventListener('click', todoAppClickHandler);

// window.addEventListener('click', () => {
//     console.log('Клік поза застосунком');
// })



// -----------------------------------------------------------------------------------------------------------------------

                            // ClassList

// ClassList - це властивість елемента DOM, який містить в собі об'єкт DOMTokenList
//  (жива колекція класів - тобто все що містить атрибут class елементу HTML).
//Тобто це колекція всіх класів які навішані на конкретний HTML документ.
// DOMTokenList містить лише унікальні класи, вони не повторюються
// В програмуванні токен — це неподільна одиниця тексту. Коли браузер бачить рядок
//  class="btn primary active", він розбиває його по пробілах. Кожне слово — це 
// окремий «токен». DOMTokenList — це розумний менеджер цих слів, який стежить, 
// щоб вони не дублювалися і щоб між ними завжди були правильні пробіли.
// DOMTokenList - це псевдомасив, який має властивість length (кількість класів що в ньому містяться)
// має ідекси, кожен клас під конкретним індексом, а також має SymbolIterator що дає змогу перебирати
// його за допомогою методу forEach(), циклів for чи for..of, while, do...while

// Методи властивості ClassList :

// e.classList.add('class1', 'class2', 'class3')
// add - додає клас для елемента. Можна додавати один або декілька класів (в лапках, через кому)

// e.classList.remove('class1', 'class2', 'class3')
// remove - видаляє клас для елемента. Можна видалити один або декілька класів (в лапках, через кому)

// e.classList.contains('class1')
// contains - перевіряє чи є вказаний клас серед всіх класів елемента. Повертає true або false 

// e.classList.toggle('class1', true/false)
// toggle - пеемикач. Якщо класу немає - Додасть. Якщо Клас є - Видалить.
// Має два аргументи, перший це сам клас, другий умова.
// 1)	Можна другим аргументом передати  true, клас буде тільки додаватися, 
// якщо false — тільки видалятися
// 2)	Можна другим аргументом передати змінну, яка перевіряє якусь умову 
// і зберігає результат цієї перевірки (true/false), тоді toggle залежатиме від цієї умови

// e.classList.replace('oldClass', 'newClass')
// replace - замінює один клас (1 арг) на інший (2 арг)
// Якщо oldClass не знайдено серед класів то не відбувається нічого, і метод повертає false
// Якщо oldClass знайдено він видаляється і  на його місце вставляється newClass і повертається true

// Окрім основних, у classList є ще парочка «екзотичних» методів:
// el.classList.item(index): 
// Робить те саме, що й el.classList[index]. Повертає назву класу за номером.

// el.classList.entries(), .keys(), .values(): 
// Дозволяють працювати з переліком класів як з повноцінним списком (масивоподібним об'єктом).



// Задача: "Картки товарів з вибором"
// Уяви, що в тебе є список карток товарів. Користувач може клікати на картку,
//  щоб її "вибрати" (виділити рамкою).
// Умови:
// Коли користувач клікає на картку — їй додається клас .is-selected.
// Якщо клікнути на вже вибрану картку — виділення знімається.
// Але! Якщо на картці є клас .out-of-stock (товару немає в наявності), 
// клік по ній не повинен нічого робити (вона не може бути вибрана).
// Твоє завдання (напиши JS код):
// Повійшай один обробник подій на батьківський елемент .product-list.
// Використай Early Return, щоб перевірити, чи клік відбувся саме по картці (клас .product-card).
// Використай ще один Early Return, щоб нічого не робити, якщо у картки є клас .out-of-stock.
// Якщо все "ок", одним рядком перемикай клас .is-selected на цій картці.

// const productList = document.querySelector('.product-list');

// function productListClickHandler(e) {

//     if (!e.target.classList.contains('product-card')) {
//         return;
//     }
//     if (e.target.classList.contains('out-of-stock')) {
//         return;
//     }

//     e.target.classList.toggle('is-selected');
// }


// productList.addEventListener('click', productListClickHandler);



// А тепер невеличкий "левел-ап" (Level Up) 🚀
// Уяви ситуацію: всередині картки з'явився ще якийсь текст у тезі <span> або картинка.
// <li class="product-card">
//   <span>Назва товару</span>
// </li>
// Якщо користувач клікне прямо на текст <span>, твій e.target буде саме цим спаном. 
// І перша перевірка !e.target.classList.contains('product-card') спрацює...
//  і функція зробить return, хоча клікнули по картці!
// Завдання на "зірочку": Як нам змінити визначення цільового елемента, 
// щоб клік по будь-якому нутрощах картки все одно знаходив саму картку?
// Підказка: Ми це вже проходили, метод називається .closest().
// Спробуй переписати початок функції так, щоб ми спочатку знаходили саму 
// картку через closest, а потім вже робили по ній перевірки.

// const productList = document.querySelector('.product-list');

// function productListClickHandler(e) {

//     const targetCard = e.target.closest('.product-card');

//     if (!targetCard) {
//         return;
//     }
//     if (targetCard.classList.contains('out-of-stock')) {
//         console.log('out of stock');
//         return;
//     }

//     targetCard.classList.toggle('is-selected');
// }

// productList.addEventListener('click', productListClickHandler);

// Ще один "левел-ап" (Level Up) Фінальний бос цієї теми 🐉
// Давай ускладнимо логіку. Бізнес-задача змінилася: Тепер ми хочемо, 
// щоб у списку тільки одна картка могла бути вибраною одночасно.
// Твоє завдання: Модифікуй свою функцію так, щоб:
// Якщо ми клікаємо на картку, яка вже вибрана — вона втрачає клас
//  .is-selected (це ти вже вмієш через toggle).
// Якщо ми клікаємо на нову картку — ми спочатку знімаємо клас .is-selected 
// з тієї картки, де він був раніше (якщо така є), і тільки потім додаємо його новій картці.
// Про out-of-stock та closest не забуваємо — вони мають працювати як і раніше.
// Підказка: Щоб знайти "попередню" вибрану картку, ти можеш використати 
// document.querySelector('.is-selected').


// const productList = document.querySelector('.product-list');

// function productListClickHandler(e) {

//     const targetCard = e.target.closest('.product-card');

//     if (!targetCard) {
//         return;
//     }
//     if (targetCard.classList.contains('out-of-stock')) {
//         console.log('out of stock');
//         return;
//     }

//     const selected = document.querySelector('.is-selected');

//     // Очищуємо попередню ТІЛЬКИ якщо вона не є поточною
//     if (selected && selected !== targetCard) {
//         selected.classList.remove('is-selected');
//     } 

//     targetCard.classList.toggle('is-selected');

// }

// productList.addEventListener('click', productListClickHandler);




// Задвання: Розумний FAQ - Accordion
// У нас є список питань. При кліку на питання має відкриватися блок з відповіддю.
// Одночасно може бути відкрита лише одна відповідь.
// Твоє завдання:
// Напиши один обробник кліку на .faq-container.
// Визнач через closest, на який .faq-item клікнули.
// Якщо клік був поза елементом .faq-item, виходь через Early Return.
// Знайди елемент, який вже має клас .is-open.
// Якщо такий є І це не той самий елемент, на який клікнули — видали
//  у нього клас .is-open.
// Перемкни (toggle) клас .is-open на поточному елементі.

// const faqContainer = document.querySelector('.faq-container');

// function faqContainerClickHandler(e) {

//     const currfaqItem = e.target.closest('.faq-item');

//     if (!currfaqItem) {
//         console.log('oops');  // чому це не виводиться якщо клікати за межі faq-container?
//         return;

//     }

//     const openFaqItem = document.querySelector('.is-open');
    
//     if (openFaqItem && openFaqItem !== currfaqItem) {
//         openFaqItem.classList.remove('is-open');
//     }

//     // Можна використати Optional Chaining (знак питання), якщо ти впевнена,
//     //  що логіка з !== тобі не заважає (або якщо ти просто закриваєш усе старе): 
//     // openFaqItem?.classList.remove('is-open');

//     // Але твій варіант із перевіркою !== — кращий, бо він не робить 
//     // зайвої роботи (не видаляє клас, щоб через мілісекунду його знову 
//     // додати через toggle).

//     currfaqItem.classList.toggle('is-open');

// }

// faqContainer.addEventListener('click', faqContainerClickHandler);




// Задвання: BurgerMenu - Kwiga 044
// маємо кнопку яка відкриває бургер меню при кліку, закриває меню при кліку на кнопку чи в будь яку іншу частину сторінки
// burgerMenuContainerHide після кліку видаляється на цей елемент додається клас burgerMenuContainerActive

// const burgerBtn = document.querySelector('.burgerMenuBtn');
// const burgerContainer = document.querySelector('.burgerMenuContainer');

// function burgerBtnClickHandler(e) {
//     // використаєм toggle() = Якщо перший вимкнений — увімкни, якщо другий увімкнений — вимкни"
//     // replace() без if-else тут не спрацює тому що replace — це для заміни одного на інше назавжди або по ланцюжку, 
//     // а toggle — для нескінченного "туди-сюди". 😊

//     // якщо при кліку на кнопку контейнер має клас Hide то він видалиться а Active додасться
//     burgerContainer.classList.toggle('burgerMenuContainerHide');
//     // якщо при кліку на кнопку контейнер має клас Active то він видалиться а Hide додасться
//     burgerContainer.classList.toggle('burgerMenuContainerActive');
//     e.stopPropagation();  // якщо клікнули на кнопку бургер меню то подія не спливе (і при закритті меню не спрацює обробник на body)

    
// }

// burgerBtn.addEventListener('click', burgerBtnClickHandler);

// // обробник на body для того щоб можна було закрити бургер меню при натисканні на будь яку частину сторінки а не лише на кнопку
// // він запускається навіть коли бургер меню приховане, заходить в add і бачить що клас висить, додавати його  нетреба, іде
// // в remove дивиться класу burgerMenuContainerActive немає, значить і видаляти його нетреба, і виходить з обробника
// function bodyClickHandler() {
//     burgerContainer.classList.add('burgerMenuContainerHide')
//     burgerContainer.classList.remove('burgerMenuContainerActive')
// }
// document.body.addEventListener('click', bodyClickHandler);


// 2 варіант рішення з одним обробником

// Навішавши два обробника, ми зробили можливим закриття бургер меню на кнопку і в будь яку частину боді якщо бургер меню активне)
// Але цю ж задачу можна вирішити за допомогою одного обробника повішаного на body або document через делегування

// document.addEventListener('click', (e) => {
//     const isClickOnBtn = e.target.closest('.burgerMenuBtn');
//     const isClickInsideMenu = e.target.closest('.burgerMenuContainer');

//     // 1. Якщо клікнули на кнопку — перемикаємо меню (туди-сюди)
//     if (isClickOnBtn) {
//         burgerContainer.classList.toggle('burgerMenuContainerHide');
//         burgerContainer.classList.toggle('burgerMenuContainerActive');
//         return; // Виходимо, щоб не спрацювала логіка закриття нижче
//     }

//     // 2. Якщо клікнули НЕ по кнопці І НЕ всередині меню — закриваємо меню
//     if (!isClickInsideMenu) {
//         burgerContainer.classList.add('burgerMenuContainerHide');
//         burgerContainer.classList.remove('burgerMenuContainerActive');
//     }
// });

// Чому цей підхід (один обробник) такий крутий?
// 1. Не потрібен stopPropagation(): Нам більше не треба "ламати" стандартну поведінку браузера. 
// Подія спокійно спливає, а ми просто фільтруємо її за допомогою closest.

// 2. Менше коду: Ми не створюємо дві різні функції, вся логіка бургера лежить в одному місці.

// 3. Автоматичне вирішення багів: Оскільки ми додали перевірку !isClickInsideMenu, меню 
// тепер не буде закриватися при кліку всередині нього (на пункти списку), бо ми явно 
// сказали: "якщо клік всередині меню — нічого не роби".





// Задвання: Контекстне вікно (Pop-up) з підказкою
// Уяви, що в тебе є кнопка "Допомога" (.help-btn). При кліку на неї з’являється 
// віконце з текстом (.tooltip).
// Умови:
// Коли клікаємо на кнопку — віконце перемикається (відкрити/закрити).
// Коли клікаємо всередині самого віконця (наприклад, виділяємо там текст) — 
// воно не повинно закриватися.
// Коли клікаємо в будь-якому іншому місці сторінки — віконце має закритися.
// Твоє завдання (напиши JS код):
// Напиши один єдиний обробник подій на document, який за допомогою e.target.closest()
//  та одного if/else if (або двох if) реалізує всю логіку:
// Перевірка 1: Чи клікнули по кнопці .help-btn? (Якщо так — toggle класу is-hidden).
// Перевірка 2: Чи клікнули НЕ по кнопці І НЕ по самому віконцю .tooltip? 
// (Якщо так — add класу is-hidden).


// document.addEventListener('click', (e) => {
    
//     const tooltip = document.querySelector('.tooltip') 
//     const helpBtn = e.target.closest('.help-btn');
//     const isTooltip = e.target.closest('.tooltip');
//     const closeInnerBtn = e.target.closest('.close-inner-btn');

//     // якщо клік на helpBtn перемикайся (додай клас якщо нема, видали якщ є)
//     if (helpBtn) {
//         tooltip.classList.toggle('is-hidden');
//         return;  // вийди з обробника (ігноруй те що нижче)
//     }
//     // якщо клік на closeInnerBtn значить tooltip не прихований (бо інакше closeInnerBtn не видно - display none)
//     // а якщо на closeInnerBtn відбувася клік значить tooltip немає класу is-hidden - треба його додати щоб заховати tooltip 
//     if (closeInnerBtn) {
//         tooltip.classList.add('is-hidden');
//         return;  // вийди з обробника (ігноруй те що нижче)
//     }

//     // якщо клік відбувся НЕ на helpBtn, НЕ на closeInnerBtn і не на самому контейнері tooltip (тобто будь де в document чи body крім цих трьох)
//     // тоді заховай контейнер tooltip - додай йомуклас is-hidden
//     // якщо ми клікаєм на document чи body коли tooltip має клас is-hidden, то обробник запускається
//     // перевіряє що клас вже є і не додавє його ще раз, тобто нічого не відбувається на екрані
//     if (!isTooltip) {
//         tooltip.classList.add('is-hidden');
//     }
    

// })





// -----------------------------------------------------------------------------------------------------------------------------------------

                                // Створення, додавання елементів в розмітку, видалення елементів з розмітки.

// Ієрархія класів елементів
// Доступ до сусідніх/батьківських/дочірніх елементів
// Створення елементів createElement
// Додавання елементів в розмітку
// - як дочірній елемент prepend/append
// - як сіблінги елемента before/after
// Видалення елемента з розмітки remove

// звідки в елемента є ті властивості які ми звикли бачити?
// якщо у node є властивості, то елемент унаслідує ці ж властивості + матиме свої додатково

// навігація по вузлах ?? (parent, previousSibling, nextSibling, firstChild, etc.)
// навігація по елементах ?? (parentElement, previousElelmentSibling, nextElementSibling, children, firstElementChild, etc.)

// До цього ми користувались тільки готовою розміткою, але насправді є розмітка яку недоцільно прописувати одразу, 
// краще її згенерувати коли вона потрібна (на льоту).

// Створення елементу (без додавання в розмітку) : document.createElement('elementType') 
// Додавання дочірнього:
// -element.append(newEl) – після останнього дочірнього
// -element.prepend(newEl) – перед першим дочірнім
//  Додавання сусіда:
// -element.before(newEl) – перед елементом
// -element.after(newEl) – посля елементу

//  element.remove() – видалення себе (не розумію, це видалення до створення елементу чи до додавання в розмітку?)

// Приклад:
// const section = document.createElement('section'); //  створимо елемент
// const divRoot = document.querySelector('#root');  // отримаєм елемент до якого будем додавати section

// // додавання дочірніх
// divRoot.append(section);  // додаємо в div останній дочірній елемент section
// section.textContent = 'Lorem ipsum dolor sit.'; // додаємо контент до новоствореного елемента
// section.style.backgroundColor = 'grey'; // додаємо інлайн стилі до новоствореного елемента

// const article = document.createElement('article'); // створимо елемент
// divRoot.prepend(article);  // додаємо в div перший дочірній елемент atricle
// article.textContent = 'some text'; // додаємо контент до новоствореного елемента
// article.style.backgroundColor = 'darkgreen'; // додаємо інлайн стилі до новоствореного елемента


// // додавання сіблінгів

// const btn = document.createElement('button');
// section.after(btn);  // додаємо після section наступний сусідній елемент btn (після себе)
// btn.textContent = 'Click me!'; // // додаємо контент до новоствореного елемента

// // видалення елемента
// // при наведенні миші на нього ми будемо його видаляти
// const dirForRemove = document.querySelector('.removable');  // отримуєм елемент який треба видалити

// dirForRemove.addEventListener('mouseenter', function (e) {
//     this.remove();  // this = currentTarget - той елемент на якому висить(зпрацьовує) обробник
// })




// Завдання: "Генератор картки товару"
// Твоя мета:
// Створити елемент div (це буде картка).
// Додати йому клас product-card.
// Всередині картки створити заголовок h2 з назвою товару (наприклад, "Apple iPhone 15").
// Створити кнопку "Видалити", при кліку на яку ця конкретна картка зникне зі сторінки.
// Твій план дій (спробуй написати код сама):
// Отримай посилання на #container.
// Створи card через createElement.
// Створи title через createElement і задай йому текст.
// Створи deleteBtn через createElement і задай їй текст.
// Додавання: Використай append, щоб зібрати все докупи 
// (title і btn — всередину card, а card — всередину container).
// Видалення: Повісь слухач подій на deleteBtn, який викликає метод remove() для card.

// const container = document.querySelector('#container');
// const card = document.createElement('div');
// const title = document.createElement('h2');
// const removeBtn = document.createElement('button');

// title.textContent = 'Apple iPhone 15';
// removeBtn.textContent = 'Видалити';

// card.append(title);
// title.after(removeBtn);
// card.classList.add('product-card');  // спершу декоруємо елемент
// container.append(card);  // потім додаємо в DOM, бо при кожній зміні елементу DOM сторінка перемальовується

// removeBtn.addEventListener('click', () => {
//     card.remove();
// })


// 2 Рішення завдання (Round 2) за допомогю insertAdjacentHTML:
// Спробуй реалізувати ту саму картку, але тепер створи її структуру одним рядком.
// Твій план:
// Отримай контейнер.
// Створи рядок (використовуй бек-тіки ` `, щоб зручно писати HTML на кілька рядків).
// Встав цей рядок у контейнер через insertAdjacentHTML.
// Важливий нюанс: Оскільки ми вставляємо рядок, у нас немає змінної card чи removeBtn. 
// Щоб видалити картку, тобі доведеться спочатку знайти кнопку в DOM після вставки.
// Підказка для видалення:
// Після вставки рядка:
// const btn = document.querySelector('.delete-btn'); // припустимо, ти дала такий клас у рядку
// const card = document.querySelector('.product-card');

// btn.addEventListener('click', () => {
//     card.remove();
// });

// const container = document.querySelector('#container');

// const content = `<div class="product-card">
//                     <h2>Apple iPhone 15</h2>
//                     <button class="remove-btn">Remove card</button>
//                 </div>`;


// container.insertAdjacentHTML('beforeend', content);  // додаємо контент як останній дочірній елемент в container

// // після того як додали, отримуємо кнопку і картку, якщо будем шукати перед 
// // тим як додати то отримааємо null, бо їх ще не існує
// const removeBtn = document.querySelector('.remove-btn');
// const card = document.querySelector('.product-card');

// // навішуємо обробник на кнопку щоб при кліку видалити всю картку товару
// removeBtn.addEventListener('click', () => {
//     card.remove();
// });



// 3 Рішення завдання: Фінальний проєкт: "Динамічна вітрина"
// Уяви, що дані приходять до тебе у вигляді масиву об'єктів (саме так це працює 
// в реальних проєктах).
// Твій план дій:
// Масив даних: Створи масив products, де кожен елемент — це об'єкт з 
// властивостями id та name.
// Генерація розмітки: Використай map або forEach, щоб перетворити масив 
// об'єктів на один великий рядок HTML.
// Рендеринг: Встав цей рядок у container за один раз через insertAdjacentHTML.
// Делегування: Повісь один слухач подій на container, який через event.target 
// та closest буде видаляти ту картку, на якій натиснули кнопку.
// Твій стартовий код:
// const products = [
//     { id: 1, name: 'Apple iPhone 15' },
//     { id: 2, name: 'Samsung Galaxy S24' },
//     { id: 3, name: 'Google Pixel 8' }
// ];

// const container = document.querySelector('#container');
// // 1. Створи рядок розмітки на основі масиву products
// // Підказка: використай map та join('')
// // 2. Встав розмітку в container
// // 3. Додай делегування подій на container для видалення картки


// const products = [
//     { id: 1, name: 'Apple iPhone 15' },
//     { id: 2, name: 'Samsung Galaxy S24' },
//     { id: 3, name: 'Google Pixel 8' }
// ];

// const container = document.querySelector('#container');
// // 1. Створи рядок розмітки на основі масиву products
// // Підказка: використай map та join('')
// const productsContent = products.map(product => `<div class="product-card">
//                                                     <h2>${product.name}</h2>
//                                                     <button class="remove-btn">Remove card</button>
//                                                 </div>`
// ).join('');

// // 2. Встав розмітку в container
// container.insertAdjacentHTML('beforeend', productsContent);
// // 3. Додай делегування подій на container для видалення картки

// container.addEventListener('click', function (e) {
//     // Шукаємо кнопку, по якій клікнули (або в межах якої клікнули)
//     const removeBtn = e.target.closest('.remove-btn');

//     //Якщо клікнули не по кнопці — виходимо з функці
//     if (!deleteBtn) return;

//     // Від кнопки піднімаємося вгору до найближчого батька з класом .product-card
//     const card = removeBtn.closest('.product-card');

//     // Видаляємо саме цю конкретну картку
//     if (card) {
//         card.remove();
//     }
// })




// Завдання: "Динамічний список завдань (To-Do List)"

// Рівень 1: Створення через форму (Base)
// Замість того, щоб мати готовий масив, давай дозволимо користувачеві 
// самому додавати елементи.
// Твоє завдання:
// У тебе є <input type="text"> та <button id="add-btn">Додати</button>.
// Коли користувач натискає на кнопку, потрібно:
// Взяти текст із інпуту (властивість .value).
// Якщо інпут не порожній, створити новий елемент <li>.
// Додати цей <li> до списку <ul>.
// Очистити інпут після додавання.
// Твій план дій:
// Знайди інпут, кнопку та список у DOM.
// Повій слухач click на кнопку додавання.
// Всередині обробника:
// Створи li за допомогою document.createElement.
// Присвой тексту з інпуту значення textContent для li.
// Використай append, щоб додати li в ul.
// Очисти інпут: input.value = ''.

// const input = document.querySelector('#task-input');
// const addBtn = document.querySelector('#add-btn');
// const taskList = document.querySelector('#task-list');

// addBtn.addEventListener('click', function(e) {
//     if (input.value === '') return;

//     const taskItem = document.createElement('li');

//     taskItem.textContent = input.value;
//     taskList.append(taskItem);
//     input.value = '';

// })



// Рівень 2: Додаємо кнопку видалення та "Стан"
// Зараз ми додаємо просто текст. Але справжньому списку справ потрібна кнопка 
// видалення поруч із кожним завданням.
// Твоє завдання:
// Модифікуй код створення li. Тепер всередині кожного li має бути:
// Текст завдання.
// Кнопка з текстом "Видалити" (клас delete-btn).
// Оскільки кнопок буде багато, використай делегування подій на рівні taskList (ul), 
// щоб видаляти завдання.
// Підказка щодо структури: Тепер зручніше буде створювати li через innerHTML, щоб 
// не плодити купу createElement.
// // Наприклад:
// taskItem.innerHTML = `
//     <span>${input.value}</span>
//     <button class="delete-btn">Видалити</button>
// `;
// Твій план дій:
// Онови обробник кліку на addBtn, щоб він створював li з кнопкою всередині.
// Додай другий обробник подій для taskList (делегування).
// У цьому обробнику перевіряй через event.target.closest('.delete-btn') і видаляй 
// відповідний li.
// Бонусне завдання: Спробуй зробити так, щоб після кліку на кнопку "Додати" фокус
//  автоматично повертався в інпут (метод input.focus()), щоб можна було друкувати
//   наступне завдання без зайвого кліку мишкою.

// const input = document.querySelector('#task-input');
// const addBtn = document.querySelector('#add-btn');
// const taskList = document.querySelector('#task-list');

// addBtn.addEventListener('click', function() {
//     if (input.value === '') return;

//     const content = `<li>${input.value}<button class="delete-btn">Delete</button></li>`;

//     taskList.insertAdjacentHTML('afterbegin', content);

//     input.focus();
//     input.value = '';


// })

// taskList.addEventListener('click', function(e) {
//     const deleteBtn = e.target.closest('.delete-btn');

//     if(!deleteBtn) return;

//     const taskItem = deleteBtn.closest('li');

//     if (taskItem) {
//         taskItem.remove();
//     }
// })


// Рівень 3: "Завдання виконано" (Стилізація та Стан)
// Давай додамо останній штрих до функціонала: можливість позначати завдання як виконане.
// Твоє завдання:
// Зроби так, щоб при кліку на текст завдання (а не на кнопку видалення), цьому елементу
//  li додавався або забирався клас .completed.
// У CSS (уяви, що він є) цей клас робить текст закресленим: text-decoration: line-through;
//  color: gray;.
// Як це реалізувати:
// Тобі не потрібно додавати новий обробник подій! Використай той самий 
// taskList.addEventListener, що вже є.
// Всередині перевір:
// Якщо клікнули по кнопці видалення — видаляй (це вже є).
// Якщо клікнули по самому li (або тексту всередині) — перемикай клас за допомогою 
// classList.toggle('completed').
// Маленька підказка: Щоб ці дві дії не заважали одна одній, використовуй else if 
// або просто переконайся, що клік по кнопці видалення не викликає перемикання класу
//  (для цього після видалення можна написати return).


// const input = document.querySelector('#task-input');
// const addBtn = document.querySelector('#add-btn');
// const taskList = document.querySelector('#task-list');

// addBtn.addEventListener('click', function() {
//     if (input.value === '') return;

//     const content = `<li class="task-item">${input.value}<button class="delete-btn">Delete</button></li>`;

//     taskList.insertAdjacentHTML('afterbegin', content);

//     input.focus();
//     input.value = '';


// })

// taskList.addEventListener('click', function(e) {
//     const deleteBtn = e.target.closest('.delete-btn');
//     const taskItem = e.target.closest('.task-item');
    
//     // якщо клік не в межах li то виходим з обробника
//     if (!taskItem) return;  

//     // якщо клік на кнопку видалення - видаляєм li
//     if (deleteBtn) {
//         taskItem.remove();
//         input.focus();
//         return;
//     }

//     // якщо ми дійшли сюди, значить клікнули по картці але не по кнопці видалення
//     taskItem.classList.toggle('completed');

// })

// // // ще один варіант обробника з перевіркою через "ціль"
// // taskList.addEventListener('click', function(e) {
// //     const taskItem = e.target.closest('.task-item');
    
// //     // якщо клік не в межах li то виходим з обробника
// //     if (!taskItem) return;  

// //     // якщо клік на кнопку видалення - видаляєм li
// //     if (e.target.closest('.delete-btn')) {
// //         taskItem.remove();
// //         input.focus();
// //     } else {
// //         // якщо клік нен на кнопку - значить це решта li
// //         taskItem.classList.toggle('completed');
// //     }
// // })


// Завдання: "Калькулятор кошика покупок"
// Твій план дій:
// Додавання товару:
// При кліку на "Додати", створюй <li>, у якому буде:
// Назва товару (з першого інпуту).
// Кількість (з другого інпуту).
// Дві кнопки: "+" (клас plus-btn) та "-" (клас minus-btn).
// Кнопка "Видалити" (клас delete-btn).
// Делегування подій на списку (ul):
// Якщо натиснули на "Видалити" — видаляй весь рядок li.
// Якщо натиснули на "+" — знайди число у цьому рядку і збільш його на 1.
// Якщо натиснули на "-" — зменш число на 1 (але не дозволяй ставати менше за 1).
// Чому це корисне завдання:
// Ти навчишся не просто видаляти елементи, а шукати та змінювати дані всередині них.
// Ти закріпиш роботу з closest() та пошуком елементів всередині конкретного li 
// (наприклад, через item.querySelector('.amount-value')).
// Ти знову попрацюєш із "чистим кодом" та логікою if / else if всередині одного
//  обробника.
// Порада: При створенні li через insertAdjacentHTML, обгорни число у окремий тег,
//  наприклад <span class="amount">1</span>, щоб його було легко знайти і змінити
//   за допомогою .textContent.

// const inputName = document.querySelector('#item-name');
// const inputAmount = document.querySelector('#item-amount');
// const addBtn = document.querySelector('#add-btn');
// const shoppingList = document.querySelector('#shopping-list');

// addBtn.addEventListener('click', function () {

//     const itemContent = `<li class="shopping-list-item">
//                         <span class="shopping-list-item-name">${inputName.value}</span>
//                         <span class="shopping-list-item-amount">${inputAmount.value}</span>
//                         <button class="shopping-list-item-incr-btn">+</button>
//                         <button class="shopping-list-item-decr-btn">-</button>
//                         <button class="shopping-list-item-delete-btn">Delete</button>
//                     </li>`;

//     shoppingList.insertAdjacentHTML('beforeend', itemContent);
//     inputName.focus();
//     inputName.value = '';
//     inputAmount.value = 1;
// });

// shoppingList.addEventListener('click', function (e) {
//     const listItem = e.target.closest('.shopping-list-item');
//     const incrBtn = e.target.closest('.shopping-list-item-incr-btn');
//     const decrBtn = e.target.closest('.shopping-list-item-decr-btn');
//     const deleteBtn = e.target.closest('.shopping-list-item-delete-btn');


//     // якщо клікнули не по item то виходим з обробника
//     if (!listItem) return;

//     // в поточному listItem(де клікнули) шукаєм дочірній amount
//     const itemAmount = listItem.querySelector('.shopping-list-item-amount');
//     let count = +itemAmount.textContent;

//     // якщо клік на + додаємо 1
//     if (incrBtn) {
//         itemAmount.textContent = ++count;
//         return;
//     }

//     // якщо клік на - віднімаємо 1 (якщо кількість більше ніж 1)
//     if (decrBtn) {
//         if(count > 1) itemAmount.textContent = --count;
//         return
//     }

//     // видаляємо весь item при кліку на дочірній Delete
//     if (deleteBtn) {
//         listItem.remove();
//        return;
//     }
// })



// Завдання: Картки відгуків (Review Cards)
// Уяви, що ти робиш блок відгуків для сайту. Користувач може написати відгук,
//  а інші можуть "лайкати" його або редагувати текст.
//  Твій план дій:
// При кліку на "Опублікувати":
// Створюй картку відгуку всередині reviews-container.
// У картці має бути:
// Заголовок з ім'ям.
// Параграф з текстом відгуку (клас review-body).
// Кнопка "Like" (клас like-btn) з лічильником: Like (<span>0</span>).
// Кнопка "Edit" (клас edit-btn).
// Кнопка "Delete".
// Делегування (на reviews-container):
// Видалення: як і раніше (просто видаляй картку).
// Лайк: знайди span всередині цієї картки і збільш число в ньому. 
// (Це те, що ти вже робила в кошику).
// Редагування (Ось тут цікаво!):
// При кліку на "Edit" виклич prompt() (це таке віконце в браузері, яке питає текст).
// const newText = prompt('Введіть новий текст відгуку');
// Якщо користувач ввів текст (не натиснув скасувати), знайди параграф .review-body
//  у цій самій картці і заміни його текст на newText.
// Чому це завдання корисне саме зараз:
// Редагування вмісту: Ти навчишся не просто змінювати цифри, а змінювати довгий 
// текст у параграфах.
// Комбінація методів: Ти знову відпрацюєш схему closest ➔ querySelector.
// Робота з різними типами полів: У тебе тепер є і input, і textarea.
// Порада: Для лічильника лайків обов'язково обгорни цифру в <span>, щоб при 
// натисканні на кнопку "Like (0)" ти могла змінити лише цифру, не зачіпаючи 
// слово "Like".

// const userName = document.querySelector('#user-name');
// const reviewText = document.querySelector('#review-text');
// const submitReviewBtn = document.querySelector('#submit-review');
// const reviewsContainer = document.querySelector('#reviews-container');


// submitReviewBtn.addEventListener('click', function () {

//     const reviewCardContent = `<div class="review-card">
//                                     <h2 class="review-owner-name">${userName.value}</h2>
//                                     <p class="review-body">${reviewText.value}</p>
//                                     <button class="like-btn">Like<span class="like-amount">0</span></button>
//                                     <button class="edit-btn">Edit</button>
//                                     <button class="delete-btn">Delete</button>
//                                 </div>`;

//     reviewsContainer.insertAdjacentHTML('afterbegin', reviewCardContent);
//     userName.focus();
//     userName.value = '';
//     reviewText.value = '';
// })

// reviewsContainer.addEventListener('click', function (e) {
//     const reviewCard = e.target.closest('.review-card');

//     if(!reviewCard) return;

//     if (e.target.closest('.delete-btn')) {
//         reviewCard.remove();
//         return;
//     }

//     if (e.target.closest('.like-btn')) {
//         const likeAmount = reviewCard.querySelector('.like-amount');

//         likeAmount.textContent = +likeAmount.textContent + 1 ;
//         return;
//     }

//     if (e.target.closest('.edit-btn')) {
//         const reviewText = reviewCard.querySelector('.review-body');
//         const updReviewText = prompt('Please edit your review:', `${reviewText.textContent}`);

//         // Перевіряємо: чи не натиснули Cancel (null) 
//         // ТА чи не залишився рядок порожнім після видалення пробілів
//         if (updReviewText !== null && updReviewText.trim() !== "") {
//             reviewBody.textContent = updReviewText;
//         } else if (updReviewText !== null) {
//             alert("Відгук не може бути порожнім!");
//         }

//         return;  // ЗАВЖДИ ставимо, щоб "застовпити" кінець логічного блоку
//     }
// })


// Завдання: "Конструктор профілю"
// Давай створимо міні-застосунок, де ми будемо змінювати властивості картки користувача.
// Твій план дій - перемикач (toggle) - два сценарія для одної кнопки:
// Оновлення даних (Кнопка "Оновити профіль"):
// При кліку зчитуй значення з input та select.
// Зміни текст у h2 на ім'я з інпуту.
// Зміни атрибут src у картинки img на той value, який обрано в select.
// Додатково: Якщо інпут порожній, не давай оновити ім'я (використовуй свій улюблений return).
// Маніпуляція станом (Кнопка "Заблокувати профіль"):
// При кліку на цю кнопку:
// Кнопка-перемикач (block-btn): Тепер при кліку на неї код має перевіряти: 
// "А в якому стані зараз кнопка 'Оновити профіль'?".
// Сценарій А (Якщо профіль зараз активний):
// Зміни текст статусу на "Заблокований".
// Додай атрибут disabled кнопці "Оновити профіль" (updateBtn.disabled = true), щоб 
// користувач більше не міг нічого змінювати.
// Зміни колір тексту статусу на червоний (через .style.color).
// Вимикаємо інпут імені та селект аватарки.
// Змінюємо текст самої кнопки блокування на "Розблокувати профіль".
// Сценарій Б (Якщо профіль вже заблокований — клікаємо вдруге):
// Змінюємо статус назад на "Активний".
// Фарбуємо статус у зелений (або чорний).
// Вмикаємо кнопку "Оновити профіль" (updBtn.disabled = false).
// Вмикаємо інпут та селект.
// Змінюємо текст кнопки назад на "Заблокувати профіль".
// Чим це відрізняється від попереднього разу:
// Раніше твій код просто "вбивав" можливість редагування назавжди. Тепер ти маєш дати 
// користувачеві можливість "передумати".

// Маленька підказка по коду: В обробнику blockBtn використовуй if (updBtn.disabled === false) 
//     для Сценарію А, а в else пропиши Сценарій Б.

// На чому ми тут фокусуємось:
// Робота з src: як змінювати зображення динамічно.
// Робота з disabled: як робити інтерфейс "розумним" (блокувати дії).
// Робота з select: як отримувати дані з випадного списку (це так само як в 
//     інпуті — через .value).
// Спробуй написати цей код. Тут не потрібно делегування, бо кнопок мало, але зверни увагу 
// на чіткість: знайди всі елементи на початку і опиши два окремі обробники подій.


// const nameInput = document.querySelector('#name-input');
// const avatarSelect = document.querySelector('#avatar-select');
// const updBtn = document.querySelector('#update-btn');
// const blockBtn = document.querySelector('#block-btn');

// const profileName = document.querySelector('#profile-name');
// const profileImg = document.querySelector('#profile-img');
// const profileStatus = document.querySelector('#profile-status');

// updBtn.addEventListener('click', function() {
//     const name = nameInput.value.trim()
//     if (!name) return;   // Красивий guard clause (архітектурна назва early return)


//     // тут не додаю if бо ми вже виключили пустий рядок і пробіли в коді вище
//     profileName.textContent = name;
//     profileImg.src = avatarSelect.value;

//     nameInput.value = '';

// })

// blockBtn.addEventListener('click', function () {

//     if (updBtn.disabled === false) {
//         profileStatus.textContent = 'Заблокований';
//         profileStatus.style.color = 'red';
    
//         // блокую кнопку оновлення, інпут та selectAvatar
//         updBtn.disabled = true;
//         nameInput.disabled = true;
//         avatarSelect.disabled = true;
    
//         // Змінюю текст кнопки Розблокувати / заблокувати профіль
//         this.textContent = 'Розблокувати профіль';
//     } else {
//         profileStatus.textContent = 'Активний';
//         profileStatus.style.color = '';   // порожній рядок видаляє інлайновий стиль і повертає колір, який прописаний у CSS (дефолтний)
    
//         // блокую кнопку оновлення, інпут та selectAvatar
//         updBtn.disabled = false;
//         nameInput.disabled = false;
//         avatarSelect.disabled = false;

//         // Змінюю текст кнопки Розблокувати / заблокувати профіль
//         this.textContent = 'Заблокувати профіль';
//     }
// })


// Професійний стислий варіант рішення написання обробника для blockBtn з перемикання станів:

// blockBtn.addEventListener('click', function () {
//     // Створюємо змінну-перемикач (інверсію поточного стану - тобто навпаки, щоб вибудувати логіку)
//     const shouldBlock = !updBtn.disabled; 

//     // Застосовуємо це значення до всіх полів одним махом
//     updBtn.disabled = shouldBlock;
//     nameInput.disabled = shouldBlock;
//     avatarSelect.disabled = shouldBlock;

//     // А для тексту та кольору все одно доведеться використати if,
//     // бо там значення кардинально різні (текст "Блок" vs "Розблок")
//     this.textContent = shouldBlock ? 'Розблокувати профіль' : 'Заблокувати профіль';
//     profileStatus.textContent = shouldBlock ? 'Заблокований' : 'Активний';
//     profileStatus.style.color = shouldBlock ? 'red' : '';
// });




// ---------------------------------------------------------------------------------------------------------------------------------------------

// Приклад-практика 046 Kwiga Список користувачів

// Генерація однієї картки


// Формат даних що приходять з сервера про користувача
// для цієї інфи потрібно згенерувати структуру HTML (image, fullName, age, deleteBtn)
// легше намітити структуру спершу в HTML а потім перенести в JS
// потім додамо стилі в CSS
// const user = {
//     firstName: 'Test1',
//     lastName: 'Testovich1',
//     age: 28,
//     photoSrc: 'https://as2.ftcdn.net/v2/jpg/02/04/97/67/1000_F_204976796_9AZRezm11tizYxsloAvXa6zz7uiNMydM.jpg',
// };

// для зображеня-заглушки краще брати прямокутне або квадратне фото - так я не забуду підлаштувати його коректне відображення на сторінці і перевірити баги
// а якщо взяти кругле, то воно наімовірніше за все впишеться одразу ідеально і можна забути провести йому краш тест

// для викорситання іконок (font awesome) треба знайти іконку, скопіювати її тег i і вставити в HTML-Body
// потім треба знайти source для іконок https://cdnjs.com/libraries/font-awesome  тут, скопіювати link і вставити в HTML-head перед своїми лінками зі стилями
// перевірити чи все працює

// що нам потрібно для створення кожного такого елемента
// створити елемент
// задати значення атрибута
// додати клас там де це необхідно
// додати контент
// навісити обробник на кнопку видалення (іконка)
// вбудувати на потрібне місце

// const userCardEl = document.createElement('article');
// userCardEl.classList.add('user-card');
// document.body.append(userCardEl);

// const userImgEl = document.createElement('img');
// userImgEl.src = user.photoSrc;
// userImgEl.alt = `${user.firstName} ${user.lastName} portrait`;
// userImgEl.classList.add('user-img');
// userCardEl.append(userImgEl);

// const userInfoEl = document.createElement('div');
// userInfoEl.classList.add('user-info');
// userCardEl.append(userInfoEl);

// const userNameEl = document.createElement('p');
// userNameEl.classList.add('user-name');
// userNameEl.textContent = `${user.firstName} ${user.lastName}`;
// userInfoEl.append(userNameEl);

// const userAgeEl = document.createElement('span');
// userAgeEl.classList.add('user-age');
// userAgeEl.textContent = user.age;
// userInfoEl.append(userAgeEl);

// const trashIconEl = document.createElement('i');
// trashIconEl.classList.add('fa-solid', 'fa-bucket', 'trash-icon');
// // trashIconEl.classList.add('fa-solid');
// // trashIconEl.classList.add('fa-bucket');
// // trashIconEl.classList.add('trash-icon');
// userCardEl.append(trashIconEl);


// // навішуємо обробник на клік на іконку видалення
// // по правильному тег іконки має бути загорнутий в тег button в розмітці
// // тут ми не загортали щоб не морочитись

// function deleteUserClickHandler(e) {
//     // або через метод closest() - найкраще!
//     e.target.closest('.user-card').remove();

//     // або через властивість(property) parentElement - але він прибере лише першого батька а конкретна глибина це не добра практика
//     // щоб дістатись до другого батьківського елемента в ієрархії можа використовувати e.target.parentElement.parentElement

//     // e.target.parentElement.remove();

// }

// trashIconEl.onclick = deleteUserClickHandler;


// Рефакторинг попереднього коду з дотриманням гарних практик

// Гарні практики та Корисні принципи в розробці:
// SOLID OOP
// DRY - Don't repeat yourself principle - використовувати єдине джерело істини
// YAGNI - You Ain't Gonna Need It - не пиши те чого не будеш зараз використовувати
// KISS - Keep it simple, Stupid - не пиши складно те що можна написати просто
// поняття Зв'язність модулів :
//        1. Cohesion (Внутрішня зв'язність) — "Один за всіх"
//              Cohesion показує, наскільки добре елементи всередині одного модуля або функції пасують один одному.
//              Висока зв'язність (High Cohesion) — це ДОБРЕ. Це означає, що функція або модуль робить тільки одну чітку задачу.
//              Низька зв'язність (Low Cohesion) — це ПОГАНО. Це коли функція перетворюється на "швейцарський ніж": вона і рахує ціну, і міняє колір кнопки, і відправляє лист бабусі.
//        2. Coupling (Зачеплення або Зовнішня зв'язність) — "Залежність"
//              Coupling показує, наскільки сильно твій модуль "приклеєний" до інших частин програми.
//              Слабке зачеплення (Loose Coupling) — це ДОБРЕ. Це коли ти можеш змінити код в одному місці, і нічого не зламається в іншому. Модулі спілкуються через "мінімально необхідні порти".
//              Сильне зачеплення (Tight Coupling) — це ПОГАНО. Це коли все залежить від усього. Змінила назву id у кнопці — і в тебе "полетіло" 10 функцій у різних файлах.



// Рефакторим код вище 
// наприклад винесем у функції код що часто повторюється

// const user = {
//     firstName: 'Test1',
//     lastName: 'Testovich1',
//     age: 28,
//     photoSrc: 'https://as2.ftcdn.net/v2/jpg/02/04/97/67/1000_F_204976796_9AZRezm11tizYxsloAvXa6zz7uiNMydM.jpg',
// };

// const userCardEl = document.createElement('article');
// userCardEl.classList.add('user-card');
// document.body.append(userCardEl);

// const userImgEl = createImg(user);
// const userInfoEl = createUserInfo(user);
// const trashIconEl = createTrashIcon();

// userCardEl.append(userImgEl, userInfoEl, trashIconEl);

// // можна не створювати проміжні змінні а одразу функції прописати послідовно в append
// // userCardEl.append(createImg(user), createUserInfo(user), createTrashIcon());

// // створення img - передаємо у функцію деструктуровані дані з обєкта user
// function createImg({photoSrc, firstName, lastName}) {
//     const userImgEl = document.createElement('img');
//     userImgEl.src = photoSrc;
//     userImgEl.alt = `${firstName} ${lastName} portrait`;
//     userImgEl.classList.add('user-img');
//     return userImgEl;
// }

// // створення userInfo - передаємо у функцію деструктуровані дані з обєкта user
// // userInfo це div в середині якого ще є p та span, ми вкладені елементи
// // створимо в середині функції, і return userInfoEl буде повертати готовий 
// // div разом із вкладеннями, тобто на момент append(userInfoEl) він додаватиметься 
// // разом із p та span

// function createUserInfo ({firstName, lastName, age}) {
//     const userInfoEl = document.createElement('div');
//     userInfoEl.classList.add('user-info');

//     const userNameEl = document.createElement('p');
//     userNameEl.classList.add('user-name');
//     userNameEl.textContent = `${firstName} ${lastName}`;
//     userInfoEl.append(userNameEl);

//     const userAgeEl = document.createElement('span');
//     userAgeEl.classList.add('user-age');
//     userAgeEl.textContent = age;
//     userInfoEl.append(userAgeEl);

//     return userInfoEl;
// }

// function createTrashIcon() {
//     const trashIconEl = document.createElement('i');
//     trashIconEl.classList.add('fa-solid', 'fa-bucket', 'trash-icon');
//     return trashIconEl

// }

// // навішуємо обробник на клік на іконку видалення
// // по правильному тег іконки має бути загорнутий в тег button в розмітці
// // тут ми не загортали щоб не морочитись

// function deleteUserClickHandler(e) {
//     e.target.closest('.user-card').remove();
// }

// trashIconEl.onclick = deleteUserClickHandler;


// Рефакторим код вище ще раз + генеруємо масив карток а не одну картку
// із масива обєктів даних юзерів
// ціль отримати багато карток

// const users = [{
//     firstName: 'Test1',
//     lastName: 'Testovich1',
//     age: 28,
//     photoSrc: 'https://as2.ftcdn.net/v2/jpg/02/04/97/67/1000_F_204976796_9AZRezm11tizYxsloAvXa6zz7uiNMydM.jpg',
//   },
//   {
//     firstName: 'Test2',
//     lastName: 'Testovich2',
//     age: 31,
//     photoSrc:
//       'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
//   {
//     firstName: 'Test3',
//     lastName: 'Testovich3',
//     age: 70,
//     photoSrc:
//       'https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
//   {
//     firstName: 'Test4',
//     lastName: 'Testovich4',
//     age: 20,
//     photoSrc:
//       'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
//   {
//     firstName: 'Test5',
//     lastName: 'Testovich5',
//     age: 28,
//     photoSrc:
//       'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
// ];
// // пізніще щоб не писати самим такі масиви обєктівданих, ми будемо використовувати тренувальні сервери
// // з якими можна буде гратись майже по справжньому зі створення динамічних структур

// // проходимось методом map по кожному обєкту масиву users, і викликаємо для кожного обєкта 
// // функцію створити картку і зберігаємо це в масив userCards. кожен елемент масиву userCards це однда картка
// // користувача (розмітка з усіма вкладеннями та прописаними даними юзера)
// const userCards = users.map(u => createUserCard(u));
// // далі через append додаємо кожну картку з масиву userCards в розмітку (розпаковуємо масив і по одному додаємо кожен елемент)
// document.body.append(...userCards);

// // створимо функцію для створення userCard яка створюватиме всі внутрішні елементи і повертати готову картку
// function createUserCard(user) {
//     const userCardEl = document.createElement('article');
//     userCardEl.classList.add('user-card');


//     const userImgEl = createImg(user);
//     const userInfoEl = createUserInfo(user);
//     const trashIconEl = createTrashIcon();

//     userCardEl.append(userImgEl, userInfoEl, trashIconEl);
//     return userCardEl;
// }

// // створення img - передаємо у функцію деструктуровані дані з обєкта user
// function createImg({photoSrc, firstName, lastName}) {
//     const userImgEl = document.createElement('img');
//     userImgEl.src = photoSrc;
//     userImgEl.alt = `${firstName} ${lastName} portrait`;
//     userImgEl.classList.add('user-img');
//     return userImgEl;
// }

// // створення userInfo - передаємо у функцію деструктуровані дані з обєкта user
// // userInfo це div в середині якого ще є p та span, ми вкладені елементи
// // створимо в середині функції, і return userInfoEl буде повертати готовий 
// // div разом із вкладеннями, тобто на момент append(userInfoEl) він додаватиметься 
// // разом із p та span

// function createUserInfo ({firstName, lastName, age}) {
//     const userInfoEl = document.createElement('div');
//     userInfoEl.classList.add('user-info');

//     const userNameEl = document.createElement('p');
//     userNameEl.classList.add('user-name');
//     userNameEl.textContent = `${firstName} ${lastName}`;
//     userInfoEl.append(userNameEl);

//     const userAgeEl = document.createElement('span');
//     userAgeEl.classList.add('user-age');
//     userAgeEl.textContent = age;
//     userInfoEl.append(userAgeEl);

//     return userInfoEl;
// }


// function createTrashIcon() {
//     const trashIconEl = document.createElement('i');
//     trashIconEl.classList.add('fa-solid', 'fa-bucket', 'trash-icon');

//     // навішуємо обробник на клік на іконку видалення всередині функції створення
//     // при створенні ми одразу навішуємо обробник і все разом повертаємо з функції

//     function deleteUserClickHandler(e) {
//         e.target.closest('.user-card').remove();
//     }

//     trashIconEl.onclick = deleteUserClickHandler;

//     return trashIconEl;

// }


