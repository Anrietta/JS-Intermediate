                // Принципи ООП (OOP principles)

                // https://uk.javascript.info/private-protected-properties-methods

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


        class User {
            constructor (name, surname, age, isMale, email) {
                    this._firstName = name;
                    this._lastName = surname;
                    this._age = age;
                    this._isMale = isMale;
                    this._email = email;
                    this._isBanned = false;
            }
            getFullName () {
                return `${this._firstName} ${this._lastName}`;
            }

        } 

        const user = new User('Test', 'Testovych', 23, true, 'test@mail.com' )

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
        class Moderator extends User {
            constructor (name, surname, age, isMale, email, permissions) {
                    // виклик конструктора батьківського класу (User) за кодовим словом super();
                    super(name, surname, age, isMale, email); // це те саме що ми написали new User() і передали всі ті властивості User які нам потрібні в класі Moderator
                    this._permissions = permissions;
            }
            //метод getFullName ми видалили щоб не повторюватись, бо він спадкується з User (в прототипах можна перевірити)
            // а якщо ми хочемо щоб в модератора не було функції getFullName то можемо її перевизначити : getFullName() {}; - просто вписуєм пустим ніби в нього немає своєї реалізації
            // getFullName() {};  // в такому разі при виклику ми просто отримаємо undefined

            // функція, щоб наш модератор міг надсилати повідомлення-попередження користувачу
            sendMessage(user, message) {
                // модератор "ім'я" відправив повідомлення "ми його отримуємо як параметр" користувачу "імя користувача обєкта який ми отримали як параметр"
                console.log(`Moderator ${this._firstName} send message "${message}" to user ${user._firstName}`);
            }

        } 

        const moderator = new Moderator('Mod', 'Modovych', 28, false, 'mod@mail.com', {
            bann: false,
            readPrivate: false,
            sendMessage: true
        });

        console.log(moderator.getFullName());  // Mod Modovych
        moderator.sendMessage(user, 'You have a warning'); // Moderator Mod send message "You have a warning" to user Test


        // Не забуваємо що спакування ззовні - це є під капотом прототипи (в JS класи спадкування і наслідування реалізовано через прототипи)


        // Завдання на основі попередніх класів User та Moderator:
        // Реалізувати клас Admin, який є модератором, і на додачу має:
        // властивість category (1, 2),
        // реалізує логіку (забанити або зняти бан з конкретного користувача)
        //  - bann (user) => втсановити для нього бан тру
        //  - unbann (user) => втсановити для нього бан фолс

        // Створити об'єкт класу Admin, протестувати роботу методів bann, unbann 

        class Admin extends Moderator {
            constructor (name, surname, age, isMale, email, permissions, category) {
                super(name, surname, age, isMale, email, permissions);
                this._category = 'middle';
            }
            getBanned(user) {
                user._isBanned = true;
                console.log(`Admin ${this._firstName} banned user ${user._firstName}!`);

            }
            getUnbanned(user) {
                user._isBanned = false;
                console.log(`Admin ${this._firstName} unbanned user ${user._firstName}!`);
            }
        }

        const admin = new Admin('Admin', 'Adminovych', 32, false, 'admin@mail.com', {
            bann: true,
            readPrivate: false,
            sendMessage: true
        })

        console.log(admin.getFullName());  // Admin Adminovych
        admin.getBanned(user);
        console.log(user._isBanned);  // true  // Admin Admin banned user Test!
        admin.getUnbanned(user);
        console.log(user._isBanned);  // true  // Admin Admin unbanned user Test!
        admin.sendMessage(user, 'Don"t do that'); // Moderator Admin send message "Don"t do that" to user Test








// 3. Поліморфізм - можливість через однаковий інтерфейс