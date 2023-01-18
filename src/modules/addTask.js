import displayTasks from './displayTasks.js';

export class Task {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
}

const addTaskToList = () => {
  if (!JSON.parse(localStorage.getItem('toDoList'))) {
    localStorage.setItem('toDoList', JSON.stringify([]));
  }
  const addTask = document.querySelector('.add_to_list');
  const taskList = JSON.parse(localStorage.getItem('toDoList'));
  let index = 0;
  if (taskList) {
    index = taskList.length;
  }
  const newTask = new Task(addTask.value, index);

  taskList.push(newTask);
  localStorage.setItem('toDoList', JSON.stringify(taskList));
  displayTasks();
  window.location.reload();
};

export default addTaskToList;