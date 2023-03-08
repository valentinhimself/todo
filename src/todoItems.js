import { format } from 'date-fns';

export default class ToDoItem {
  constructor(title, details, dueDate, priority) {
    this.title = title;
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  static createToDoItem(title, priority, dateValue) {
    this.title = title;
    this.priority = priority;

    const main = document.querySelector('main');
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.classList.add(`${this.priority}`);

    const left = document.createElement('div');
    left.classList.add('left');

    const checkBox = document.createElement('span');
    checkBox.classList.add('check-box');
    left.appendChild(checkBox);

    const itemTitle = document.createElement('span');
    itemTitle.textContent = `${this.title}`;
    itemTitle.classList.add('item-text-title');
    left.appendChild(itemTitle);

    const right = document.createElement('div');
    right.classList.add('right');

    const detailsButton = document.createElement('button');
    detailsButton.classList.add('details__btn');
    detailsButton.setAttribute('type', 'button');
    detailsButton.textContent = 'Details';
    right.appendChild(detailsButton);

    const dueDate = document.createElement('span');
    const dateObject = new Date(dateValue);
    const dateMonth = format(dateObject, 'MMM');
    const dateDay = format(dateObject, 'do');
    const dateFormated = `${dateMonth} ${dateDay}`;
    dueDate.classList.add('item-due-date');
    dueDate.textContent = dateFormated;
    right.appendChild(dueDate);

    const editIcon = document.createElement('span');
    editIcon.classList.add('edit-icon');
    const svgEdit = `
  <svg fill="#000000" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.548,3.452a1.542,1.542,0,0,1,0,2.182L12.912,13.27,9.639,14.361l1.091-3.273,7.636-7.636A1.542,1.542,0,0,1,20.548,3.452ZM4,21H19a1,1,0,0,0,1-1V12a1,1,0,0,0-2,0v7H5V6h7a1,1,0,0,0,0-2H4A1,1,0,0,0,3,5V20A1,1,0,0,0,4,21Z" />
  </svg>
`;
    editIcon.innerHTML = svgEdit;
    right.appendChild(editIcon);

    const deleteIcon = document.createElement('span');
    deleteIcon.classList.add('delete-icon');
    const svgDelete = `
  <svg fill="#000000" width="50px" height="50px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>trashcan</title>
    <path d="M8 26c0 1.656 1.343 3 3 3h10c1.656 0 3-1.344 3-3l2-16h-20l2 16zM19 13h2v13h-2v-13zM15 13h2v13h-2v-13zM11 13h2v13h-2v-13zM25.5 6h-6.5c0 0-0.448-2-1-2h-4c-0.553 0-1 2-1 2h-6.5c-0.829 0-1.5 0.671-1.5 1.5s0 1.5 0 1.5h22c0 0 0-0.671 0-1.5s-0.672-1.5-1.5-1.5z"></path>
  </svg>
`;
    deleteIcon.innerHTML = svgDelete;
    right.appendChild(deleteIcon);

    todoItem.appendChild(left);
    todoItem.appendChild(right);

    main.appendChild(todoItem);

    checkBox.addEventListener('click', () => {
      checkBox.classList.toggle('checked');
      itemTitle.classList.toggle('checked');
      dueDate.classList.toggle('checked');
      editIcon.classList.toggle('checked');
      deleteIcon.classList.toggle('checked');
    });
  }
}
