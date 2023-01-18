import displayTasks from './displayTasks.js';

let taskList = JSON.parse(localStorage.getItem('toDoList'));

const removeTaskFromList = (id) => {
  taskList = taskList.filter((tasks) => tasks.index !== parseInt(id, 10));
  localStorage.setItem('toDoList', JSON.stringify(taskList));
  displayTasks();
  window.location.reload();
};

export default removeTaskFromList;