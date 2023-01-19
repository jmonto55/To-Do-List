const toggleFinishedTask = (e) => {
  e.nextElementSibling.classList.toggle('line_through');
  e.nextElementSibling.classList.toggle('change_color');
  const taskList = JSON.parse(localStorage.getItem('toDoList'));
  taskList[e.parentElement.id].completed = !taskList[e.parentElement.id].completed;
  localStorage.setItem('toDoList', JSON.stringify(taskList));
};

const clearSelectedTasks = () => {
  console.log('is working');
};

export { toggleFinishedTask, clearSelectedTasks };