export class Task {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
}
const addTaskToList = () => {
  const addTask = document.querySelector('.add_to_list');
  const taskList = JSON.parse(localStorage.getItem('toDoList'));
  const newTask = new Task(addTask.value, taskList.length);

  taskList.push(newTask);
  localStorage.setItem('toDoList', JSON.stringify(taskList));
};

export default addTaskToList;