const toggleFinishedTask = (e) => {
  e.nextElementSibling.classList.toggle('line_through');
  e.nextElementSibling.classList.toggle('change_color');
};

const clearSelectedTasks = () => {
  console.log('is working');
};

export default toggleFinishedTask;