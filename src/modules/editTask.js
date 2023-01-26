import displayTasks from './displayTasks.js';
import { getLocalData, setLocalData } from './storage.js';

const editSelectedTask = (id, val) => {
  const taskList = getLocalData();
  taskList[id].description = val;
  setLocalData(taskList);
  displayTasks();
};

export default editSelectedTask;
