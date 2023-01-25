/**
 * @jest-environment jsdom
 */

import addTaskToList from './addTask.js';

jest.mock('./storage.js');

test('addTask function test', () => {
  document.body.innerHTML =
    '<div>' +
    '  <input value="Going for a walk" class="add_to_list" type="text" placeholder="Add to your list..." />' +
    '<ul id="list" class="tasks_list"></ul>'
    '</div>';
  addTaskToList();
  const localData = document.querySelectorAll('#list li');
  expect(localData).toHaveLength(1);
});