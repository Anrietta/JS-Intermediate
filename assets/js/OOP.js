                // Принципи ООП (OOP principles)

                // https://uk.javascript.info/private-protected-properties-methods
                // https://it-blog.in.ua/osnovni-pryntsypy-oop-z-prykladamy-na-javascript/

// Повернись до класів JS - ці дві теми прямо повязані!

// Обєктно-орієнтоване програмування - одна з парадигм прогамування, яка розглядає програму як множину обєктів, що взаємодіють між собою
// Коли ми говоримо про ООП то в першу чергу згадуємо роботу з класами та Сеттери з Геттерами, але насправді там ще є нюанси
// Основу ООП склаадють чотири основні концепції (принципи): інкапсуляція, поліморфізм, успадкування та абстракція
// Інколи можна зустріти лище три концепції без абстракції - тому що абстракція сама по собі є в принципах, тому що коли ми говоримо про ООП це оззначає що в нас не просто присутні примітиви (10, 5 чи рядок з іменем) а в нас є цілий тип даних в якому ми зібрали ці примітиви, тобто ми від самого простого ідемо до якогось складного обєкту де купа різної інформації про нього зберігається, оце по суті і є абстракція, підвищується рівень абстракції


// Розглянемо три основні принципи ООП (три кити ООП), що воно таке і що воно означає:

// 1. Інкапсуляція - приховування логіки (особливостей реалізації) за якимсь інтерфейсом

            // приклад інкапсуляції

            // class User {
            //     constructor (fullName) {
            //         [this._firstName, this._lastName] = fullName.split(' '); // за допомогою деструктуризації розділяємо вхідний стрінг на масив з імені та прізвища
            //         // this._firstName - "_" в назві властивості означає, що дана властивість є "захищеною" (protected) або "приватною" (private), тобто вона призначена для внутрішнього використання всередині класу (якимись внутрішніми методами що прописані в класі) і не повинна бути доступна або змінюватися напряму ззовні об'єкта (тобто через якісь інші функції чи методи в глобальній області видимості).
            //         //Це допомагає дотримуватися принципу інкапсуляції, приховуючи внутрішні деталі реалізації класу. Замість прямого доступу до _firstName, розробник мав би використовувати геттери (getFirstName()) або сеттери (setFirstName(name)), які дозволяють класу контролювати, як ця інформація читається або змінюється (наприклад, додавати валідацію).
            //     }
            //     set fullName(v) {
            //         [this._firstName, this._lastName] = v.split(' ');
            //     }
            //     get fullName() {
            //         return this._firstName + ' ' + this._lastName;
            //     }
            // }

            // const user = new User('Test Testovych');
            // console.log(user);
            //         // User {firstname: 'Test', lastName: 'Testovych'}
            //         // firstname: "Test"
            //         // lastName: "Testovych"

            // user.fullName = 'Ivo Bobul';  // через set ми можемо задати інше значення по тому ж принципу, прийняти рядок, розділити і зберігати два окремі значення
            // console.log(user);
            // console.log(user.fullName);  // через get ми звертаємось до класу щоб отримати fullName і ми його отримуємо знову зконкатинованим в один рядочок

            // Суть в тому, що ззовні виглядає так, наче я працюю з рядком, а зсередини в мене все в класі зберігється поокремо, тобто працює не так як виглядає
            // тобто не важливо що і як я роблю з даними в середині в реальності, важливо який я даю інтерфейс, через які властивості чи методи я можу працювати з класом. 
            // тобто приховування деталей реалізації під певним інтерфейсом - від способів користування цим класом
            // Головне що я значю що я маю прийняти стрінг і повернути стрінг (тобто важливий інтерфейс класу)
            // Інтерфейс класу -  це набір властивостей та методів які ми можемо використовувати

            // Ще цікавий момент інкапсуляції, що навіть якщо ми зараз змінимо щось в класі(конструкторі) то це не  повпливає на зовнішній інтерфейс, тобто ми всерівно все налаштуємо так щоб отримати і повернути стрінг



// 2. Спадкування/Розширення/Наслідування - перевикористання структури та логіки

                // https://uk.javascript.info/class-inheritance
                // https://uk.wikipedia.org/wiki/Unified_Modeling_Language
                // https://medium.com/@smagid_allThings/uml-class-diagrams-tutorial-step-by-step-520fd83b300b


        // class User {
        //     constructor (name, surname, age, isMale, email) {
        //             this._firstName = name;
        //             this._lastName = surname;
        //             this._age = age;
        //             this._isMale = isMale;
        //             this._email = email;
        //             this._isBanned = false;
        //     }
        //     getFullName () {
        //         return `${this._firstName} ${this._lastName}`;
        //     }

        // } 

        // const user = new User('Test', 'Testovych', 23, true, 'test@mail.com' )

        // уявімо, що в нас є клас користувачів в якомусь чаті
        // і крім корситувачів в нас є модераторо чату, який має ті ж параметри що й юзер + трохи більше  прав
        // permissions = {bann: true, readPrivate: false} - цей модератор має право банити юзерів але немає прав читати приватні повідомлення

        // class Moderator {
        //     constructor (name, surname, age, isMale, email, permissions) {
        //             this._firstName = name;
        //             this._lastName = surname;
        //             this._age = age;
        //             this._isMale = isMale;
        //             this._email = email;
        //             this._isBanned = false;
        //             this.permissions = this.permissions;
        //     }
        //     getFullName () {
        //         return `${this._firstName} ${this._lastName}`;
        //     }
        //     // функція, щоб наш модератор мгі надсилати повідомлення-попередження користувачу
        //     sendMessage(user, message) {
        //         // модератор "ім'я" відправив повідомлення "ми його отримуємо як параметр" користувачу "імя користувача обєкта який ми отримали як параметр"
        //         console.log(`Moderator ${this._firstName} send message "${message}" to user ${user._firstName}`);
        //     }

        // } 

        // створюємо модератора, який має всті ті ж властивості що й user + який не має права банити, не має права читати приватні повідомлення юзерів і має право надсилати повідомлення
        // const moderator = new Moderator('Mod', 'Modovych', 28, false, 'mod@mail.com', {
        //     bann: false,
        //     readPrivate: false,
        //     sendMessage: true
        // });

        // console.log(moderator.getFullName());  // Mod Modovych
        // moderator.sendMessage(user, 'You have a warning');  // Moderator Mod send message "You have a warning" to user Test

        // Все працює, але!
        // як бачимо Модератор та Юзер мають багато спільних властивостей, які повторюються в обох класах, а це фу фу фу
        // Для того об не було таких повторень і потрібно використувати наслідування!!!
        // В класах для того щоб уникнути повторення можна прямо вказати успадкування за допомогою кодового слова "extends" і вказати назву класу який наслідуємо
        // Це допоможе класу Б успадкувати властивості класу А і дозволяє класу Б мати якісь свої особисті властивості яких немає в класу А  
        // В нашому випадку клас Moderator - дочірній клас, а клас User - батьківський або базовий клас

        // Щоб вказати що один клас успадковує/розширює інший треба написати extends "Назва батьківського класу"
        // class Moderator extends User {
        //     constructor (name, surname, age, isMale, email, permissions) {
        //             // виклик конструктора батьківського класу (User) за кодовим словом super();
        //             super(name, surname, age, isMale, email); // це те саме що ми написали new User() і передали всі ті властивості User які нам потрібні в класі Moderator
        //             this._permissions = permissions;
        //     }
        //     //метод getFullName ми видалили щоб не повторюватись, бо він спадкується з User (в прототипах можна перевірити)
        //     // а якщо ми хочемо щоб в модератора не було функції getFullName то можемо її перевизначити : getFullName() {}; - просто вписуєм пустим ніби в нього немає своєї реалізації
        //     // getFullName() {};  // в такому разі при виклику ми просто отримаємо undefined

        //     // функція, щоб наш модератор міг надсилати повідомлення-попередження користувачу
        //     sendMessage(user, message) {
        //         // модератор "ім'я" відправив повідомлення "ми його отримуємо як параметр" користувачу "імя користувача обєкта який ми отримали як параметр"
        //         console.log(`Moderator ${this._firstName} send message "${message}" to user ${user._firstName}`);
        //     }

        // } 

        // const moderator = new Moderator('Mod', 'Modovych', 28, false, 'mod@mail.com', {
        //     bann: false,
        //     readPrivate: false,
        //     sendMessage: true
        // });

        // console.log(moderator.getFullName());  // Mod Modovych
        // moderator.sendMessage(user, 'You have a warning'); // Moderator Mod send message "You have a warning" to user Test


        // Не забуваємо що спакування ззовні - це є під капотом прототипи (в JS класи спадкування і наслідування реалізовано через прототипи)


        // Завдання на основі попередніх класів User та Moderator:
        // Реалізувати клас Admin, який є модератором, і на додачу має:
        // властивість category (1, 2),
        // реалізує логіку (забанити або зняти бан з конкретного користувача)
        //  - bann (user) => втсановити для нього бан тру
        //  - unbann (user) => втсановити для нього бан фолс

        // Створити об'єкт класу Admin, протестувати роботу методів bann, unbann 

        // class Admin extends Moderator {
        //     constructor (name, surname, age, isMale, email, permissions, category) {
        //         super(name, surname, age, isMale, email, permissions);
        //         this._category = 'middle';
        //     }
        //     getBanned(user) {
        //         user._isBanned = true;
        //         console.log(`Admin ${this._firstName} banned user ${user._firstName}!`);

        //     }
        //     getUnbanned(user) {
        //         user._isBanned = false;
        //         console.log(`Admin ${this._firstName} unbanned user ${user._firstName}!`);
        //     }
        // }

        // const admin = new Admin('Admin', 'Adminovych', 32, false, 'admin@mail.com', {
        //     bann: true,
        //     readPrivate: false,
        //     sendMessage: true
        // })

        // console.log(admin.getFullName());  // Admin Adminovych
        // admin.getBanned(user);
        // console.log(user._isBanned);  // true  // Admin Admin banned user Test!
        // admin.getUnbanned(user);
        // console.log(user._isBanned);  // true  // Admin Admin unbanned user Test!
        // admin.sendMessage(user, 'Don"t do that'); // Moderator Admin send message "Don"t do that" to user Test


// ---------------------------------------------------------------------------------------------------------------------------------------------------------


            // Перевизначення методів (Overriding methods)

            // https://uk.javascript.info/class-inheritance#pereviznachennya-metodu

// Перевизначення методв -  це коли ми в дочірньому класі змінюємо параметри(перевизначаємо) успадкованого методу від батьківського класу

//Наприклад коли клас має певні методи, і класи які його наслідують мають ті ж самі методи
// Але в тих класах що наслідують батьківські класи нам ннепотрібно взагалі деякі методи, а деякі потрібні але змінені 
// Напр: є клас людина, і є класи чоловік та жінка що наслідують клас людина. То ми матимемо метод Привітання в класі людина, в класі Чоловік будем вітатись містер, а в класі жінка будем вітатись місіс


// Для прикладу візьмемо задачу з юзерами і модератором і метод користувача getFullName

        // class User {
        //     constructor (name, surname, age, isMale, email) {
        //             this._firstName = name;
        //             this._lastName = surname;
        //             this._age = age;
        //             this._isMale = isMale;
        //             this._email = email;
        //             this._isBanned = false;
        //     }
        //     getFullName () {
        //         return `${this._firstName} ${this._lastName}`;
        //     }

        // } 

        // const user = new User('Test', 'Testovych', 23, true, 'test@mail.com' );


        // class Moderator extends User {
        //     constructor (name, surname, age, isMale, email, permissions) {
        //             // виклик конструктора батьківського класу (User) за кодовим словом super();
        //             super(name, surname, age, isMale, email); // це те саме що ми написали new User() і передали всі ті властивості User які нам потрібні в класі Moderator
        //             this._permissions = permissions;
        //     }
        //     getFullName() {
        //         // перевизначии метод для Модеатора, - дописали Містер
        //         return `Mr.${this._firstName} ${this._lastName}`
        //     }
        //     sendMessage(user, message) {
        //         console.log(`Moderator ${this._firstName} send message "${message}" to user ${user._firstName}`);
        //     }
        // } 

        // const moderator = new Moderator('Mod', 'Modovych', 28, false, 'mod@mail.com', {
        //     bann: false,
        //     readPrivate: false,
        //     sendMessage: true
        // });


        // class Admin extends Moderator {
        //     constructor (name, surname, age, isMale, email, permissions, category) {
        //         super(name, surname, age, isMale, email, permissions);
        //         this._category = 'middle';
        //     }
        //     getBanned(user) {
        //         user._isBanned = true;
        //         console.log(`Admin ${this._firstName} banned user ${user._firstName}!`);

        //     }
        //     getUnbanned(user) {
        //         user._isBanned = false;
        //         console.log(`Admin ${this._firstName} unbanned user ${user._firstName}!`);
        //     }
        // }

        // const admin = new Admin('Admin', 'Adminovych', 32, false, 'admin@mail.com', {
        //     bann: true,
        //     readPrivate: false,
        //     sendMessage: true
        // })

        
        // console.log(moderator.getFullName());  // Mr.Mod Modovych
        // console.log(user.getFullName());  // Test Testovych
        // console.log(admin.getFullName());  // Mr.Admin Adminovych


        // тепер ось що виходить. в класі User (батьківський клас) є метод getFullName, який повертає ім'я та прізвище користувача
        // в класі Moderator (дочірній від User) ми перевизначили метод getFullName, і він повертає Mr. ім'я та прізвище
        // в класі Admin (дочірній від Moderator) наслідується перевизначений метод getFullName в Moderator і теж поверта Mr. ім'я та прізвище
        // тобто якщо у нас є ланцюжок класів то всі наступні класи після того який ми перевизначили теж наслідуватимуть перевизачений метод

        // Якщо ми хочемо щоб у Admin метод getFullName був іденитичний як у User а не як у Moderator, тобто без Mr. то в Admin нам просто треба знову перевизначити цей метод без Mr.




        // Задачка
        // squirrel -їсть що дадуть, вміє бігати, ім'я
        // flyingSquirrel - ість тільки горіхи, вміє бігати, вміє літати, ім'я, довжина стрибка



    // class Squirrel {
    //     constructor(name) {
    //         this._name = name;
    //     }
    //     eat(food) {
    //         console.log(`Squirrel ${this._name} is eating ${food}!`);
    //     }
    //     run() {
    //         console.log(`Squirrel ${this._name} is running!`);
    //     }
    // }

    // class FlyingSquirrel extends Squirrel {
    //     constructor(name, jumpLength) {
    //         super(name);
    //         this._jumpLength = jumpLength;
    //     }
    //     eat() {
    //         console.log(`Flying Squirrel ${this._name} is eating nuts.`);
    //     }
    //     jump() {
    //         console.log(`Flying Squirrel ${this._name} is jumping ${this._jumpLength} meters.`);
    //     }
    // }

    // const sq = new Squirrel('Natasha');
    // sq.eat('potatoes');
    // sq.run();

    // const flSq = new FlyingSquirrel('Nastya', 3);
    // console.log(flSq);
    // flSq.eat();
    // flSq.jump();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 3. Поліморфізм - можливість через однаковий інтерфейс

    // https://developer.mozilla.org/ru/docs/Glossary/Polymorphism

    // Поліморфізм - це концепція  в програмуванні, в оснві якої лежить використання єдиного інтерфейсу для маніпуляції над різними типами даних (в SJ поліморфізм підтипів)
    // Тобто поліморфізм дозволяє працювати з різними типами даних з однаковим ітерфейсом
    // на практиці це типу назва метода в класі називається однаково для двох класів, але кожен метод в класі рацює по різному
    // ми маємо клас Admin і клас Moderator, обидва мають метод sendMessage()б але в кожного з класів метод відрізняється (тіло методу). 
    // Тож ми викликаємо admin.sendMessage() або Moderator.sendMessage() , викликається однаково але виконується воно по різному
    // Отже маємо однаковий інтерфейс але різні типи даних - це і є поліморфізм


    // Наприклад. У нас є різні фігури : трикутник, квадрат, прямокутник
    // У них у всіх є спільні риси: вони мають назву, вони мають площу яку можна обчислити (по різному обчислити, але факт що в них є площа)
    // отже реалізуємо батьківський клас, щоб їх поєднати, а далі кожного окремо як дочірній

    // class Figure {   // абстракний клас, без реалізації, він потрібен щоб задати поведінку кожній фігурі
    //     constructor (name) {
    //         this.name = name;
    //     }
    //     getArea() {
    //         return null;
    //     }
    // }

    // class Square extends Figure {
    //     constructor(sideLength) {
    //         super('square');
    //         this.a = sideLength;
    //     }
    //     getArea() {
    //         return this.a * this.a;
    //     }
    // }

    // const square = new Square(6);
    // console.log(square.getArea());  // 36
    // console.log(square);  // Square {name: 'square', a: 6}

    // class Rectangle extends Figure {
    //     constructor (sideLengtha, sideWidthb) {
    //         super('rectangle');
    //         this.a = sideLengtha;
    //         this.b = sideWidthb;
    //     }
    //     getArea() {
    //         return this.a * this.b;
    //     }
    // }

    // const rectangle = new Rectangle(4, 5);
    // console.log(rectangle.getArea());  // 20
    // console.log(rectangle);  // Rectangle {name: 'rectangle', a: 4, b: 5}

    // //кожен створений нами обєкт через конструктор (клас) є екземпляром цього класу(консруктора)
    // console.log(rectangle instanceof Rectangle);  // true
    // console.log(rectangle instanceof Figure);  // true
    // console.log(rectangle instanceof Object);  // true
    // console.log(rectangle instanceof Square);  // false - бо клас Square не приймав участі в створенні об'єкта rectangle


    // // щоб перевірити чи фігура є дочірнім класом перевіряємо за допомогою instanceof належність а далі виконуємо вказаний метод в кожній фігурі
    // function calcArea (fig) {
    //     if (fig instanceof Figure) {
    //         return fig.getArea();
    //     }
    //     console.log('fig is not a Figure');
    // }




    // в середині класу А може бути інсанс якогось іншого класу (композиція)

    // https://abitap.com/1-2-zvyazok-mizh-klasamy-ta-obyektamy/#:~:text=%D0%9C%D0%B8%20%D0%BC%D0%BE%D0%B6%D0%B5%D0%BC%D0%BE%20%D0%B2%D0%B8%D0%B4%D1%96%D0%BB%D0%B8%D1%82%D0%B8%20%D0%BA%D1%96%D0%BB%D1%8C%D0%BA%D0%B0%20%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B8%D1%85%20%D0%B2%D1%96%D0%B4%D0%BD%D0%BE%D1%81%D0%B8%D0%BD:%20%D1%83%D1%81%D0%BF%D0%B0%D0%B4%D0%BA%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F%2C,User.%20%D0%9D%D0%B5%D1%80%D1%96%D0%B4%D0%BA%D0%BE%20%D1%89%D0%BE%D0%B4%D0%BE%20%D0%B0%D1%81%D0%BE%D1%86%D1%96%D0%B0%D1%86%D1%96%D1%97%20%D0%B2%D0%BA%D0%B0%D0%B7%D1%83%D1%94%D1%82%D1%8C%D1%81%D1%8F%20%D0%BA%D1%80%D0%B0%D1%82%D0%BD%D1%96%D1%81%D1%82%D1%8C%20%D0%B7%D0%B2'%D1%8F%D0%B7%D0%BA%D1%96%D0%B2.

    // Наприклад візьмем наш клас Rectangle
    // якщо б нам треба було зберегти в ньому координати вершин (якщо наприклад це обємне тіло) то ми б створили клас Coordinates
    // а вже всередині класу Rectangle ми б створювали і зберігали екземпляри зовнішнього класу Coordinates
    // це і є композиція

    // class Coordinates{}

    // class Rectangle extends Figure {
    //     constructor (sideLengtha, sideWidthb) {
    //         this.pointA = new Coordinates();
    //         this.pointB = new Coordinates();
    //         this.pointC = new Coordinates();
    //         this.pointD = new Coordinates();
    //         super('rectangle');
    //         this.a = sideLengtha;
    //         this.b = sideWidthb;
    //     }
    //     getArea() {
    //         return this.a * this.b;
    //     }
    // }