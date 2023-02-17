import './styles/styles.css';
import './assets/logo.png';
import DomController from './domController';
import ToDo from './todoItems';

const array = [];
DomController.submitBtn.addEventListener('click', () => {
  if (DomController.isFilledOut()) {
    array.push(
      new ToDo(
        DomController.getFormTitle().value,
        DomController.getFormDetails().value,
        DomController.getFormDueDate().value,
        DomController.getFormPriority().id
      )
    );
  }

  console.log(array);
  // then populate a list of ToDos in the body based on the array
});
