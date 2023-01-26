/**
 * @jest-environment jsdom
 */

import addTaskToList from './addTask.js';
import removeTaskFromList from './removeTask.js';

describe('Functionalities Tests', () => {
  document.body.innerHTML = '<div>'
      + '  <input value="Going for a walk" class="add_to_list" type="text" placeholder="Add to your list..." />'
      + '<ul id="list" class="tasks_list"><li class="task" id="0"></li></ul>'
      + '</div>';
  test('should test if addTask is adding the correct task in Local storage and DOM', () => {
    addTaskToList();
    addTaskToList();
    addTaskToList();
    const localData = JSON.parse(window.localStorage.getItem('toDoList'));
    expect(localData).toHaveLength(3);
    expect(localData[0].description).toBe('Going for a walk');
  });

  test('should test if removeTask is removing correct task from Local storage and DOM', () => {
    removeTaskFromList(0);
    const localData = JSON.parse(window.localStorage.getItem('toDoList'));
    expect(localData).toHaveLength(2);
  });
});
