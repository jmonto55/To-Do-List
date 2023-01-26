/**
 * @jest-environment jsdom
 */

import addTaskToList from './addTask.js';
import removeTaskFromList from './removeTask.js';
import editSelectedTask from './editTask.js';
import { clearSelectedTasks, toggleFinishedTask } from './clarAllTasks.js';

describe('Functionalities Tests', () => {
  document.body.innerHTML = `
    <div>
      <input value="Going for a walk" class="add_to_list" type="text" placeholder="Add to your list..." />'
      <ul id="list" class="tasks_list"></ul>'
    </div>`;

  //  Add Task Test
  it('should test if addTask is adding the correct task in Local storage and DOM', () => {
    addTaskToList();
    addTaskToList();
    addTaskToList();
    addTaskToList();
    const localData = JSON.parse(window.localStorage.getItem('toDoList'));
    expect(localData).toHaveLength(4);
    expect(localData[0].description).toBe('Going for a walk');
  });

  //  Remove Task Test
  it('should test if removeTask is removing correct task from Local storage and DOM', () => {
    removeTaskFromList(0);
    const localData = JSON.parse(window.localStorage.getItem('toDoList'));
    expect(localData).toHaveLength(3);
  });

  //  Edit Task Test
  it('should test if editTask is changing the correct task value from Local storage and DOM', () => {
    editSelectedTask(0, 'Returning from a run');
    const localData = JSON.parse(window.localStorage.getItem('toDoList'));
    expect(localData[0].description).toBe('Returning from a run');
  });

  // Toogling to completed task with id = 2
  it('should test if toggleFinishedTask is toggling the completed attribute between true and false', () => {
    document.body.innerHTML = `
      <li class="task" id="2">
        <div class="task_container">
          <input class="to_do_input" type="checkbox">
          <input class="task_textarea " type="text">
        </div>
        <span class="material-symbols-outlined remove_button">delete</span>
      </li>`;
    const checkBox = document.querySelector('.to_do_input');
    toggleFinishedTask(checkBox);
    const localData = JSON.parse(window.localStorage.getItem('toDoList'));
    expect(localData[2].completed).toBe(true);
  });

  // Toogling to completed task with id = 0
  it('should test if toggleFinishedTask is toggling the completed attribute between true and false', () => {
    document.body.innerHTML = `
      <li class="task" id="0">
        <div class="task_container">
          <input class="to_do_input" type="checkbox">
          <input class="task_textarea " type="text">
        </div>
        <span class="material-symbols-outlined remove_button">delete</span>
      </li>`;
    const checkBox = document.querySelector('.to_do_input');
    toggleFinishedTask(checkBox);
    const localData = JSON.parse(window.localStorage.getItem('toDoList'));
    expect(localData[0].completed).toBe(true);
  });

  // Toogling to completed task with id = 1
  it('should test if toggleFinishedTask is toggling the completed attribute between true and false', () => {
    document.body.innerHTML = `
    <ul class="tasks_list">
    <li class="task" id="1">
      <div class="task_container">
        <input class="to_do_input" type="checkbox">
        <input class="task_textarea " type="text">
      </div>
      <span class="material-symbols-outlined remove_button">delete</span>
    </li></ul>`;
    const checkBox = document.querySelector('.to_do_input');
    toggleFinishedTask(checkBox);
    const localData = JSON.parse(window.localStorage.getItem('toDoList'));
    expect(localData[1].completed).toBe(true);
  });

  it('should test if clear completed task function works', () => {
    clearSelectedTasks();
    const localData = JSON.parse(window.localStorage.getItem('toDoList'));
    expect(localData).toHaveLength(0);
  });
});
