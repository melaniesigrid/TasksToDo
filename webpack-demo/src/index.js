/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';

import {
  add,
  clearDiv,
  removeItemAt,
  updateStorageValue
} from './addRemove.js';

export var tasks = [];
// export let count = 0;

const myList = document.querySelector('.task-lists');

export const generateList = (array) => {

  array = array.sort((a, b) => a.index - b.index);

  clearDiv(myList);

  for (let i = 0; i < array.length; i += 1) {
    let item = array[i];
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

document.querySelector('#add-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    add();
    const retrievedList = JSON.parse(localStorage.getItem('list'));
    generateList(retrievedList);
  }
});

myList.addEventListener('click', (event) => {
  let elementClicked = event.target;
  let job = elementClicked.getAttribute('job');
  let clickedIndex = elementClicked.getAttribute('index');
  if (job == 'delete') {
    removeItemAt(clickedIndex);
  }
});

myList.addEventListener('change', (e) => {
  let changedElement = e.target;
  console.log(changedElement);
});


export const saveDataLocally = (toSave) => {
  const stringifiedList = JSON.stringify(toSave);
  localStorage.setItem('list', stringifiedList);
}

window.onload = () => {
  if (localStorage.getItem('list') !== null) {
    const retrievedList = JSON.parse(localStorage.getItem('list'));
    tasks = retrievedList;
    generateList(tasks);
  }
};