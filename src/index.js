import './styles/styles.css';
import './assets/logo.png';
import './assets/check.png';

import deleteIcons from './removeToDo';
import DomController from './domController';
import ToDoItem from './todoItems';
import EditPrompts from './editPrompts';
import getDetails from './details.js';
import navSort from './navSort';
import { manipulateCounters, checkboxCounter } from './counterManipulator';

// function ToDo() {
export const array = [];
window.array = array;
DomController.submitBtn.addEventListener('click', () => {
  function pushToDoToArray() {
    if (DomController.isFilledOut()) {
      array.push(
        new ToDoItem(
          DomController.getFormTitle().value,
          DomController.getFormDetails().value,
          DomController.getFormDueDate().value,
          DomController.getFormPriority().id
        )
      );
    }
  }

  function addToDoToDOM() {
    ToDoItem.createToDoItem(
      array[array.length - 1].title,
      array[array.length - 1].priority,
      array[array.length - 1].dueDate
    );
    manipulateCounters(array[array.length - 1].dueDate).increaseCounters();
    checkboxCounter(array[array.length - 1].dueDate);
    DomController.resetInputs();
  }
  pushToDoToArray();
  addToDoToDOM();
  EditPrompts();
  deleteIcons();
  getDetails();

  console.log(array);
});

navSort();
