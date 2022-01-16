// eslint-disable-next-line import/no-cycle
import {
  myTasks,
  saveDataLocally,
} from './index.js';
// eslint-disable-next-line import/no-cycle
import { removeItemAt } from './addRemove.js';

export const completeThis = (element) => {
  const nextInput = element.nextSibling;
  const elementIndex = element.getAttribute('index');
  const isComplete = myTasks()[elementIndex - 1].completed;
  nextInput.classList.toggle('complete');
  if (isComplete === true) {
    myTasks()[elementIndex - 1].completed = false;
  } else {
    myTasks()[elementIndex - 1].completed = true;
  }
  saveDataLocally(myTasks());
};

export const clearComplete = () => {
  const filteredTasks = myTasks().filter((item) => item.completed);
  filteredTasks.forEach((task) => {
    removeItemAt(task.index);
  });
};