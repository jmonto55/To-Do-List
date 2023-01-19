const toggleFinishedTask = (e) => {
  e.nextElementSibling.classList.toggle('line_through');
  e.nextElementSibling.classList.toggle('change_color');
  const taskList = JSON.parse(localStorage.getItem('toDoList'));
  taskList[e.parentElement.id].completed = !taskList[e.parentElement.id].completed;
  localStorage.setItem('toDoList', JSON.stringify(taskList));
};

const clearSelectedTasks = () => {
  let taskList = JSON.parse(localStorage.getItem('toDoList'));
  taskList = taskList.filter((completed) => completed.completed !== true);
  let i = 0;
  taskList.forEach((task) => {
    task.index = i;
    i += 1;
  });
  localStorage.setItem('toDoList', JSON.stringify(taskList));
  window.location.reload();
};

export { toggleFinishedTask, clearSelectedTasks };
