/* eslint-disable linebreak-style */
import './style.css';
import addTaskToList from './modules/addTask.js';
import displayTasks from './modules/displayTasks.js';
import removeTaskFromList from './modules/removeTask.js';
import editSelectedTask from './modules/editTask.js';

const taskList = JSON.parse(localStorage.getItem('toDoList'));

if (!taskList) {
  localStorage.setItem('toDoList', JSON.stringify([]));
}

displayTasks();

localStorage.setItem('toDoList', JSON.stringify(taskList));

const addTaskText = document.querySelector('.add_to_list');
const addTaskIcon = document.querySelector('#submit_icon');
const refreshIcon = document.querySelector('#refresh_icon');

addTaskText.onchange = () => { addTaskToList(); };
addTaskIcon.onclick = () => { addTaskToList(); };
refreshIcon.onclick = () => { window.location.reload(); };

const removeButtons = document.querySelectorAll('.remove_button');

removeButtons.forEach((e) => {
  e.onclick = () => { removeTaskFromList(e.id); };
});

const taskTextareaArr = document.querySelectorAll('.task_textarea');
taskTextareaArr.forEach((e) => {
  e.onchange = () => { editSelectedTask(e.id, e.value); };
});

taskTextareaArr.forEach((e) => {
  e.onfocus = () => {
    e.style.background = '#1D3237';
    e.parentElement.parentElement.style.background = '#1D3237';
  };
});

taskTextareaArr.forEach((e) => {
  e.onblur = () => {
    e.style.background = '#101010';
    e.parentElement.parentElement.style.background = '#101010';
  };
});
