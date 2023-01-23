import { getLocalData } from './storage.js';

let taskList = getLocalData();

const displayTasks = () => {
  const listSection = document.querySelector('.tasks_list');
  listSection.innerHTML = '';
  taskList.forEach((e) => {
    let completedCheck = e.completed ? 'checked' : '';
    let styleCheck = e.completed ? 'line_through' : '';
    listSection.innerHTML += `
      <li class="task" id="${e.index}">
        <div class="task_container">
          <input class="to_do_input" type="checkbox" ${completedCheck}>
          <input class="task_textarea ${styleCheck}" type="text" placeholder="${e.description}"></input>
        </div>
        <span class="material-symbols-outlined remove_button">delete</span>
      </li>`;
  });
};

export default displayTasks;