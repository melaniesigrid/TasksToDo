/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-cycle
import { generateList, saveDataLocally } from './index.js';

export let tasks = [];

export const add = () => {
  const textInputValue = document.querySelector('#add-input').value;
  const TaskItem = {
    description: textInputValue,
    completed: false,
    index: tasks.length + 1,
  };

  const addedItem = TaskItem;
  tasks.push(addedItem);
  saveDataLocally(tasks);
};

export const clearDiv = (div) => {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
};

export const removeItemAt = (index) => {
  tasks.splice(index - 1, 1);
  generateList(tasks);
  saveDataLocally(tasks);
};

export const changeInput = (element) => {
  const newDescription = element.value;
  const elementIndex = element.getAttribute('index');
  tasks[elementIndex - 1].description = newDescription;
  saveDataLocally(tasks);
};