import './styles/styles.css';
import './assets/logo.png';
import DomController from './domController';
import ToDo from './todoItems';

const array = [];
DomController.submitBtn.addEventListener('click', () => {
  const formTitle = document.querySelector('#title').value;
  const formDetails = document.querySelector('#details').value;
  const priority = document.querySelector('.priority-btns input:checked').id;
  const dueDate = document.querySelector('#date').value;
  console.log({ formTitle, formDetails, dueDate, priority });
  array.push(new ToDo(formTitle, formDetails, priority, dueDate));
  console.log(array);
  // then populate a list of ToDos in the body based on the array
});
