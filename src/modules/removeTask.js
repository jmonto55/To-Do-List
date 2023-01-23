import displayTasks from './displayTasks.js';
import updateIndex from '../index.js';

let taskList = JSON.parse(localStorage.getItem('toDoList'));

const removeTaskFromList = (id) => {
  taskList = taskList.filter((tasks) => tasks.index !== parseInt(id, 10));
  updateIndex(taskList);
  localStorage.setItem('toDoList', JSON.stringify(taskList));
  displayTasks();
  window.location.reload();
};

export default removeTaskFromList;
