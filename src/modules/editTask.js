import displayTasks from './displayTasks.js';

const taskList = JSON.parse(localStorage.getItem('toDoList'));

const editSelectedTask = (id, val) => {
  const label = document.getElementById(id);
  const fatherId = label.parentNode.id;
  taskList[fatherId].description = val;
  localStorage.setItem('toDoList', JSON.stringify(taskList));
  displayTasks();
  window.location.reload();
};

export default editSelectedTask;
