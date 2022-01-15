// eslint-disable-next-line import/no-cycle
import { myTasks, generateList, saveDataLocally } from './index.js';

export const add = () => {
  const textInputValue = document.querySelector('#add-input').value;
  const TaskItem = {
    description: textInputValue,
    completed: false,
    index: myTasks().length + 1,
  };

  const addedItem = TaskItem;
  myTasks().push(addedItem);
  saveDataLocally(myTasks());
};

export const clearDiv = (div) => {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
};

export const removeItemAt = (index) => {
  myTasks().splice(index - 1, 1);
  generateList(myTasks());
  saveDataLocally(myTasks());
};

export const changeInput = (element) => {
  const newDescription = element.value;
  const elementIndex = element.getAttribute('index');
  myTasks()[elementIndex - 1].description = newDescription;
  saveDataLocally(myTasks());
};