let taskList = JSON.parse(localStorage.getItem('toDoList')) || [];

const displayTasks = () => {
  const listSection = document.querySelector('.tasks_list');
  listSection.innerHTML = '';
  taskList.forEach((e) => {
    let completedCheck = '';
    let styleCheck = '';
    if (e.completed) {
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
};

export default displayTasks;