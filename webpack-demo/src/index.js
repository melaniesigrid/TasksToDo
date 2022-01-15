/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';

// eslint-disable-next-line import/no-cycle
import {
  add,
  clearDiv,
  changeInput,
  removeItemAt,
} from './addRemove.js';

let tasks = [];
export function myTasks() {
  return tasks;
}

const myList = document.querySelector('.task-lists');

export const generateList = (array) => {
  array = array.sort((a, b) => a.index - b.index);

  clearDiv(myList);

  for (let i = 0; i < array.length; i += 1) {
    const item = array[i];
    item.index = i + 1;
    const listItem = document.createElement('li');
    listItem.classList.add('item');

    const itemCheckbox = document.createElement('input');
    itemCheckbox.type = 'checkbox';
    itemCheckbox.setAttribute('index', `${item.index}`);
    listItem.appendChild(itemCheckbox);

    const taskInput = document.createElement('input');
    taskInput.setAttribute('type', 'text');
    taskInput.setAttribute('index', `${item.index}`);
    taskInput.setAttribute('value', `${item.description}`);
    taskInput.classList.add('description-text');
    listItem.appendChild(taskInput);

    const garbage = document.createElement('i');
    garbage.classList.add('fas', 'fa-trash-alt', 'icon', 'trash');
    garbage.setAttribute('index', `${item.index}`);
    garbage.setAttribute('job', 'delete');
    listItem.appendChild(garbage);

    myList.appendChild(listItem);
  }
};

document.querySelector('#add-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    add();
    const retrievedList = JSON.parse(localStorage.getItem('list'));
    generateList(retrievedList);
  }
});

myList.addEventListener('click', (event) => {
  const elementClicked = event.target;
  const job = elementClicked.getAttribute('job');
  const clickedIndex = elementClicked.getAttribute('index');
  if (job === 'delete') {
    removeItemAt(clickedIndex);
  }
});

myList.addEventListener('change', (e) => {
  let changedElement = e.target;
  changeInput(changedElement);
});

export const saveDataLocally = (toSave) => {
  const stringifiedList = JSON.stringify(toSave);
  localStorage.setItem('list', stringifiedList);
};

window.onload = () => {
  if (localStorage.getItem('list') !== null) {
    const retrievedList = JSON.parse(localStorage.getItem('list'));
    tasks = retrievedList;
    generateList(tasks);
  }
};