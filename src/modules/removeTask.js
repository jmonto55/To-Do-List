import displayTasks from './displayTasks.js';
import updateIndex from '../index.js';
import { getLocalData, setLocalData } from './storage.js';

let taskList = getLocalData();

const removeTaskFromList = (id) => {
  taskList = taskList.filter((tasks) => tasks.index !== Number(id));
  updateIndex(taskList);
  setLocalData(taskList);
  displayTasks();
  window.location.reload();
};

export default removeTaskFromList;
