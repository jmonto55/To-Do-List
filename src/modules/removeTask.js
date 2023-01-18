/* eslint-disable no-plusplus */
import displayTasks from './displayTasks.js';

let taskList = JSON.parse(localStorage.getItem('toDoList'));

const removeTaskFromList = (id) => {
  taskList = taskList.filter((tasks) => tasks.index !== parseInt(id, 10));
  let i = 0;
  taskList.forEach((task) => {
    task.index = i;
    i++;
  });
  localStorage.setItem('toDoList', JSON.stringify(taskList));
  displayTasks();
  window.location.reload();
};

export default removeTaskFromList;
