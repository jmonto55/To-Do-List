import { Task, addTaskToList } from '../src/modules/addTask';

test('addTask function test', () => {
  document.body.innerHTML =
    '<div>' +
    '  <input id="list"><li>Task #1</li></input>' +
    '</div>';
    addTaskToList();
    const localData = document.querySelectorAll('#list li');

});