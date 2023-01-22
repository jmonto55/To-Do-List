let taskList = JSON.parse(localStorage.getItem('toDoList'));
if (!taskList) { taskList = []; }

const displayTasks = () => {
  const listSection = document.querySelector('.tasks_list');
  listSection.innerHTML = '';
  listSection.innerHTML += `
    <li class="add_task">
      <input class="add_to_list" type="text" placeholder="Add to your list..." />
      <span id="submit_icon" class="material-symbols-outlined">subdirectory_arrow_left</span>
    </li>`;
  taskList.forEach((e) => {
    let completedCheck = '';
    let styleCheck = '';
    if (e.completed === true) {
      completedCheck = 'checked';
      styleCheck = 'line_through change_color';
    }
    listSection.innerHTML += `
      <li class="task" id="${e.index}">
        <div id="${e.index}" class="task_container">
          <input class="to_do_input" type="checkbox" ${completedCheck}>
          <input id="${Math.random()}" class="task_textarea ${styleCheck}" type="text" placeholder="${e.description}"></input>
        </div>
        <span class="material-symbols-outlined remove_button">delete</span>
      </li>`;
  });
  listSection.innerHTML += `
    <li class="clear_tasks">
      <button class="clear_all" type="submit">Clear all completed</button>
    </li>`;
};

export default displayTasks;