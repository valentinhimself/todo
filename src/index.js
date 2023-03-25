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
export const array = JSON.parse(localStorage.getItem('myArray')) || [];
export const counterArr = JSON.parse(localStorage.getItem('counters')) || [];

window.counterArr = counterArr;
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
      localStorage.setItem('myArray', JSON.stringify(array));
    }
  }

  function addToDoToDOM() {
    ToDoItem.createToDoItem(
      array[array.length - 1].title,
      array[array.length - 1].priority,
      array[array.length - 1].dueDate
    );
    manipulateCounters(array[array.length - 1].dueDate)
      .increaseCounters()
      .increaseAllCounters();
    checkboxCounter(array[array.length - 1].dueDate);
    DomController.resetInputs();
  }
  pushToDoToArray();
  addToDoToDOM();
  EditPrompts();
  deleteIcons();
  getDetails();
  putCountersIntoStorage();
  localStorage.setItem('counters', JSON.stringify(counterArr));
  console.log(array);
});

navSort();

function showValues(arr) {
  arr.forEach((item) => {
    ToDoItem.createToDoItem(item.title, item.priority, item.dueDate);
    EditPrompts();
    deleteIcons();
    getDetails();
  });
  putCountersIntoStorage();
}

function putCountersIntoStorage() {
  counterArr[0] = document.querySelector('.home__number').textContent;
  counterArr[1] = document.querySelector('.today__number').textContent;
  counterArr[2] = document.querySelector('.week__number').textContent;
}

// function setCounters(arr) {
//   document.querySelector('.home__number').textContent = counterArr[0];
//   document.querySelector('.today__number').textContent = counterArr[1];
//   document.querySelector('.week__number').textContent = counterArr[2];
// }
showValues(array);
