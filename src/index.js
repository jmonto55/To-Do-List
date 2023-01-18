/* eslint-disable linebreak-style */

// import _ from 'lodash';
import './style.css';
import addTaskToList from './modules/addTask.js';
import displayTasks from './modules/displayTasks.js';

const taskList = JSON.parse(localStorage.getItem('toDoList'));

displayTasks();

localStorage.setItem('toDoList', JSON.stringify(taskList));

const addTaskText = document.querySelector('.add_to_list');

addTaskText.addEventListener('change', addTaskToList);
