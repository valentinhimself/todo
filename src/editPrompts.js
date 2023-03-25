import { format } from 'date-fns';
import { array } from './index';
import { adjustCounters } from './counterManipulator';

export default function EditPrompts() {
  const editPrompt = document.querySelector('.edit-prompt__div ');
  const editIcons = document.querySelectorAll('.edit-icon');
  const titleEdit = document.querySelector('#title-edit');
  const detailsEdit = document.querySelector('#details-edit');
  const dateEdit = document.querySelector('#date-edit');
  const exit = document.querySelector('.exit-edit');
  const editSubmitBtn = document.querySelector('#edit__btn');
  let currentNode;
  let oldDate;
  let newDate;

  exit.addEventListener('click', closeEditPrompt);

  editIcons.forEach((icon) =>
    icon.addEventListener('click', () => {
      assignClassCurrentNode(icon);
      populateEditFields();
      openEditPrompt();
    })
  );

  editSubmitBtn.addEventListener('click', callOnSubmit);

  function callOnSubmit() {
    console.log(currentNode);
    updateToDoDOM();
    updateToDoArray();
    adjustCounters(oldDate, newDate);
    closeEditPrompt();
  }

  function assignClassCurrentNode(icon) {
    icon.parentElement.parentElement.classList.add('isBeingEdited');
    currentNode = document.querySelector('.isBeingEdited');
  }

  function populateEditFields() {
    titleEdit.value = currentNode.querySelector('.item-text-title').textContent;
    detailsEdit.value = getArrayItem().details;
    dateEdit.value = getArrayItem().dueDate;
    oldDate = dateEdit.value;
    selectEditPriorityButton().click();
  }

  function selectEditPriorityButton() {
    return document.querySelector(
      `#${document.querySelector('.isBeingEdited').classList[1]}_lbl-edit`
    );
  }

  function openEditPrompt() {
    editPrompt.classList.remove('collapse');
    document.querySelector('.body-container').classList.add('blur');
  }

  function updateToDoDOM() {
    if (currentNode) {
      currentNode.querySelector('.item-text-title').textContent =
        titleEdit.value;
      changeDate();
      changeItemPriority();
    }
  }

  function changeDate() {
    const dateObject = new Date(`${dateEdit.value}T00:00:00`);
    const dateMonth = format(dateObject, 'MMM');
    const dateDay = format(dateObject, 'do');
    const dateFormated = `${dateMonth} ${dateDay}`;
    currentNode.querySelector('.item-due-date').textContent = dateFormated;
    newDate = dateEdit.value;
  }

  function changeItemPriority() {
    currentNode.classList.remove(currentNode.classList[1]);
    currentNode.classList.add(getPriorityID());
  }

  function getPriorityID() {
    return document
      .querySelector('.edit-priority-btns .priority-active')
      .id.split('_')[0];
  }

  function getEditedItemIndex() {
    for (let i = 0; i < document.querySelector('main').children.length; i++) {
      if (
        document
          .querySelector('main')
          .children[i].classList.contains('isBeingEdited')
      ) {
        return i;
      }
    }
  }

  function getArrayItem() {
    if (currentNode) return array[getEditedItemIndex()];
  }

  function updateToDoArray() {
    if (currentNode) {
      getArrayItem().title = titleEdit.value;
      getArrayItem().details = detailsEdit.value;
      getArrayItem().dueDate = dateEdit.value;
      getArrayItem().priority = getPriorityID();
    }
    localStorage.setItem('myArray', JSON.stringify(array));
  }

  function closeEditPrompt() {
    editPrompt.classList.add('collapse');
    document.querySelector('.body-container').classList.remove('blur');
    resetEdit();
  }

  function resetEdit() {
    if (currentNode) {
      currentNode.classList.remove('isBeingEdited');
      currentNode = undefined;
    }
  }
}
