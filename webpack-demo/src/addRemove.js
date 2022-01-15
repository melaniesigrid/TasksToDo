/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-cycle
import { generateList, saveDataLocally } from './index.js';

export const add = () => {
  const textInputValue = document.querySelector('#add-input').value;
  let retrievedList = JSON.parse(localStorage.getItem('list'));
  const TaskItem = {
    description: textInputValue,
    completed: false,
    index: retrievedList.length + 1,
  };

  const addedItem = TaskItem;
  retrievedList.push(addedItem);
  saveDataLocally(retrievedList);
};

export const clearDiv = (div) => {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
};

export const removeItemAt = (index) => {
  tasks.splice(index - 1, 1);
  generateList(retrievedList);
  saveDataLocally(retrievedList);
};

export const changeInput = (element) => {
  let retrievedList = JSON.parse(localStorage.getItem('list'));
  const newDescription = element.value;
  const elementIndex = element.getAttribute('index');
  retrievedList[elementIndex - 1].description = newDescription;
  saveDataLocally(retrievedList);
};