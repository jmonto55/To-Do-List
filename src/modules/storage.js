const getLocalData = () => JSON.parse(localStorage.getItem('toDoList')) || [];

const setLocalData = (arr) => {
  localStorage.setItem('toDoList', JSON.stringify(arr));
};

export { getLocalData, setLocalData };