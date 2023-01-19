const taskList = JSON.parse(localStorage.getItem('toDoList'));

const displayTasks = () => {
  const listSection = document.querySelector('.tasks_list');
  listSection.innerHTML = '';
  if (!taskList) {
    listSection.innerHTML += `
    <li class="add_task">
      <input class="add_to_list" type="text" placeholder="Add to your list..." />
      <span id="submit_icon" class="material-symbols-outlined">subdirectory_arrow_left</span>
    </li>`;
    listSection.innerHTML += `
      <li class="clear_tasks">
        <button class="clear_all" type="submit">Clear all completed</button>
      </li>`;
  } else {
    listSection.innerHTML += `
    <li class="add_task">
      <input class="add_to_list" type="text" placeholder="Add to your list..." />
      <span id="submit_icon" class="material-symbols-outlined">subdirectory_arrow_left</span>
    </li>`;
    taskList.forEach((e) => {
      if (e.completed === false) {
        listSection.innerHTML += `
          <li class="task">
            <div id="${e.index}" class="task_container">
              <input class="to_do_input" type="checkbox">
              <input id="${Math.random()}" class="task_textarea" type="text" placeholder="${e.description}"></input>
            </div>
            <span id="${e.index}" class="material-symbols-outlined remove_button">delete</span>
          </li>`;
      } else {
        listSection.innerHTML += `
          <li class="task">
            <div id="${e.index}" class="task_container">
              <input class="to_do_input" type="checkbox" checked>
              <input id="${Math.random()}" class="task_textarea change_color line_through" type="text" placeholder="${e.description}"></input>
            </div>
            <span id="${e.index}" class="material-symbols-outlined remove_button">delete</span>
          </li>`;
      }
    });
    listSection.innerHTML += `
      <li class="clear_tasks">
        <button class="clear_all" type="submit">Clear all completed</button>
      </li>`;
  }
};

export default displayTasks;