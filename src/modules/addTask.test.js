/**
 * @jest-environment jsdom
 */

import addTaskToList from './addTask.js';
import removeTaskFromList from './removeTask.js';

jest.mock('./storage.js');

describe('Functionalities Tests', () => {
  // document.body.innerHTML = '<div>'
  //     + '  <input value="Going for a walk" class="add_to_list" type="text" placeholder="Add to your list..." />'
  //     + '<ul id="list" class="tasks_list"><li class="task" id="0"></li></ul>'
  //     + '</div>';
  test('addTask function test', () => {
    addTaskToList();
    addTaskToList();
    const localData = getLocalData();
    expect(localData).toHaveLength(2);
  });

  test('removeTask function test', () => {
    removeTaskFromList(0);
    const localData = document.querySelectorAll('#list li');
    expect(localData).toHaveLength(1);
  });
});
