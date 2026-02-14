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




