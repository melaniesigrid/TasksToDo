/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';

const tasks = [
  {
    description: 'Task 1',
    completed: false,
    index: 1,
  },
  {
    description: 'Task 2',
    completed: false,
    index: 2,
  },
  {
    description: 'Task 3',
    completed: false,
    index: 3,
  },
  {
    description: 'Task 4',
    completed: false,
    index: 4,
  },
  {
    description: 'Task 5',
    completed: false,
    index: 5,
  },
];

const myList = document.querySelector('.task-lists');
const itemIterate = (myList) => {
  tasks.forEach((item) => {
    const listItem = document.createElement('div');
    listItem.classList.add('item');
    listItem.innerHTML = `
      <input type="checkbox" id="task-number-${item.index}"/>
      <label for="task-number-${item.index}">
        ${item.description}
      </label>
      <i class="fas fa-ellipsis-v icon three-dots"></i>
    `;
    myList.appendChild(listItem);
  });
};

document.addEventListener('DOMContentLoaded', itemIterate(myList));