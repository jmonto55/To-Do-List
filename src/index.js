/* eslint-disable linebreak-style */

// import _ from 'lodash';
import './style.css';

const taskList = [
  {
    description: 'Wake up',
    completed: true,
    index: 0,
  },
  {
    description: 'Have breakfast',
    completed: true,
    index: 1,
  },
  {
    description: 'Get ready',
    completed: true,
    index: 2,
  },
  {
    description: 'Start working',
    completed: true,
    index: 3,
  },
];

const displayTasks = () => {
  const listSection = document.querySelector('.tasks_list');
  taskList.forEach((e) => {
    if (e.index === 0) {
      listSection.innerHTML += `
    <li class="add_task">
      <p>Add to your list...</p>
      <span class="material-symbols-outlined">subdirectory_arrow_left</span>
    </li>`;
    }
    listSection.innerHTML += `
    <li class="task">
      <div class="task_container">
        <input id="${e.index}" class="to_do_input" type="checkbox">
        <p>${e.description}</p>
      </div>
      <span class="material-symbols-outlined">delete_forever</span>
    </li>`;
  });
  listSection.innerHTML += `
    <li class="clear_tasks">
      <p>Clear all completed</p>
    </li>`;
};

window.onload = () => {
  displayTasks();
};
