/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';

let tasks = [
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
  {
    description: 'Task 6',
    completed: false,
    index: 6,
  },
];

const myList = document.querySelector('.task-lists');
const generateList = () => {
  tasks = tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((item) => {
    const listItem = document.createElement('div');
    listItem.classList.add('item');

    const itemCheckbox = document.createElement('input');
    itemCheckbox.type = 'checkbox';
    itemCheckbox.id = `task-number-${item.index}`;
    listItem.appendChild(itemCheckbox);

    const taskLabel = document.createElement('label');
    taskLabel.htmlFor = `task-number-${item.index}`;
    taskLabel.appendChild(document.createTextNode(`${item.description}`));
    listItem.appendChild(taskLabel);

    const kebab = document.createElement('i');
    kebab.classList.add('fas');
    kebab.classList.add('fa-ellipsis-v');
    kebab.classList.add('icon');
    kebab.classList.add('three-dots');
    listItem.appendChild(kebab);

    myList.appendChild(listItem);
  });
};

document.addEventListener('DOMContentLoaded', generateList());