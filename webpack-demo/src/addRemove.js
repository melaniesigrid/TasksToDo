// eslint-disable-next-line import/no-cycle

import { tasks, generateList, saveDataLocally } from './index.js';

export const add = () => {
  const textInputValue = document.querySelector('#add-input').value;
  const TaskItem = {
    description: textInputValue,
    completed: false,
    index: tasks.length + 1,
  }

  let addedItem = TaskItem;
  tasks.push(addedItem);
  saveDataLocally(tasks);
};

export const clearDiv = (div) => {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

export const removeItemAt = (index) => {
  tasks.splice(index - 1, 1);
  generateList(tasks);
  saveDataLocally(tasks);
}

export const changeInput = (element) => {
  let newDescription = element.value;
  let elementIndex = element.getAttribute('index');
  console.log(newDescription);
  console.log(elementIndex);
  tasks[elementIndex - 1].description = newDescription;
  saveDataLocally(tasks);
}