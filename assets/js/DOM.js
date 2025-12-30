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





