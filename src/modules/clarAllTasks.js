import displayTasks from './displayTasks.js';
import updateIndex from '../index.js';
import { getLocalData, setLocalData } from './storage.js';

const toggleFinishedTask = (e) => {
  e.nextElementSibling.classList.toggle('line_through');
  const taskList = getLocalData();
  taskList[e.parentElement.parentElement.id].completed = !taskList[e.parentElement.parentElement.id].completed;
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
