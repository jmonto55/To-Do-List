import displayTasks from './displayTasks.js';
import updateIndex from '../index.js';

const toggleFinishedTask = (e) => {
  e.nextElementSibling.classList.toggle('line_through');
  e.nextElementSibling.classList.toggle('change_color');
  const taskList = JSON.parse(localStorage.getItem('toDoList'));
  taskList[e.parentElement.id].completed = !taskList[e.parentElement.id].completed;
  localStorage.setItem('toDoList', JSON.stringify(taskList));
};

const clearSelectedTasks = () => {
  let taskList = JSON.parse(localStorage.getItem('toDoList'));
  taskList = taskList.filter((completed) => !completed.completed);
  updateIndex(taskList);
  localStorage.setItem('toDoList', JSON.stringify(taskList));
  displayTasks();
  window.location.reload();
};

export { toggleFinishedTask, clearSelectedTasks };
