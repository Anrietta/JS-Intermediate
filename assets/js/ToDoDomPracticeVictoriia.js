'use strict';

const form = document.querySelector('.todoContainer>form');
const input = form.querySelector('input');
const todoList = document.querySelector('.toDoList');

const TODO_REG_EXP = /^\s*$/;

input.oninput = ({target}) => {
    if (!TODO_REG_EXP.test(target.value)) {
        target.classList.add('valid');
        target.classList.remove('invalid');
    } else {
        target.classList.add('invalid');
        target.classList.remove('valid');
    }
}

form.onsubmit = (e) => {
    e.preventDefault();
    const todoItem = e.target.elements['todoItem'];

    if (!TODO_REG_EXP.test(todoItem.value)) {
        const todoListItems = createToDoItem(todoItem.value);
        todoList.append(todoListItems);
        todoItem.value = '';
        todoItem.classList.remove('valid');
        
    } else {
        todoItem.classList.add('invalid');
    }
    todoItem.focus();
}

function createToDoItem(value) {
    const todoListItem = document.createElement('li');
    const deleteItemBtn = document.createElement('button');
    deleteItemBtn.textContent = 'X';

    deleteItemBtn.onclick = (e) => {
        e.target.parentElement.remove();
    };

    const isDoneEl = document.createElement('input');
    isDoneEl.type = 'checkbox';
    isDoneEl.onchange = ({target}) => {
        target.nextSibling.classList.toggle('doneTask');
    }

    const todoValue = document.createElement('span');
    todoValue.textContent = value;

    todoListItem.append(isDoneEl, todoValue, deleteItemBtn);

    return todoListItem;
}