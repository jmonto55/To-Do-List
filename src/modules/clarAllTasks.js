import displayTasks from './displayTasks.js';
import updateIndex from '../index.js';
import { getLocalData, setLocalData } from './storage.js';

const toggleFinishedTask = (e) => {
  e.nextElementSibling.classList.toggle('line_through');
  e.nextElementSibling.classList.toggle('change_color');
  const taskList = getLocalData();
  taskList[e.parentElement.id].completed = !taskList[e.parentElement.id].completed;
  setLocalData(taskList);
};

const clearSelectedTasks = () => {
  let taskList = getLocalData();
  taskList = taskList.filter((completed) => !completed.completed);
  updateIndex(taskList);
  setLocalData(taskList);
  displayTasks();
  window.location.reload();
};

export { toggleFinishedTask, clearSelectedTasks };
