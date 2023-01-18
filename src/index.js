/* eslint-disable linebreak-style */
import './style.css';
import addTaskToList from './modules/addTask.js';
import displayTasks from './modules/displayTasks.js';
import removeTaskFromList from './modules/removeTask.js';

const taskList = JSON.parse(localStorage.getItem('toDoList'));

if (!taskList) {
  localStorage.setItem('toDoList', JSON.stringify([]));
}

displayTasks();

localStorage.setItem('toDoList', JSON.stringify(taskList));

const addTaskText = document.querySelector('.add_to_list');
const addTaskIcon = document.querySelector('#submit_icon');
const refreshIcon = document.querySelector('#refresh_icon');

addTaskText.addEventListener('change', addTaskToList);
addTaskIcon.addEventListener('click', addTaskToList);
refreshIcon.onclick = () => { window.location.reload(); };

const removeButtons = document.querySelectorAll('.remove_button');

removeButtons.forEach((e) => {
  e.onclick = () => { removeTaskFromList(e.id); };
});
