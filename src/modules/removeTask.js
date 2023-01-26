import displayTasks from './displayTasks.js';
import { updateIndex } from './clarAllTasks.js';
import { getLocalData, setLocalData } from './storage.js';

const removeTaskFromList = (id) => {
  let taskList = getLocalData();
  taskList = taskList.filter((tasks) => tasks.index !== Number(id));
  updateIndex(taskList);
  setLocalData(taskList);
  displayTasks();
  // console.log(taskList);
  // window.location.reload();
};

export default removeTaskFromList;
