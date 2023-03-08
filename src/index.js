import './styles/styles.css';
import './assets/logo.png';
import './assets/check.png';
import DomController from './domController';
import ToDoItem from './todoItems';

// function ToDo() {
const array = [];
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
  pushToDoToArray();

  function addToDoToDOM() {
    ToDoItem.createToDoItem(
      array[array.length - 1].title,
      array[array.length - 1].priority,
      array[array.length - 1].dueDate
    );
    DomController.resetInputs();
  }
  addToDoToDOM();
  EditPrompts();
  console.log(array);
});

function EditPrompts() {
  console.log('called Edit Prompts');
  const editPrompt = document.querySelector('.edit-prompt__div ');
  const editIcons = document.querySelectorAll('.edit-icon');
  const titleEdit = document.querySelector('#title-edit');
  const detailsEdit = document.querySelector('#details-edit');
  const dateEdit = document.querySelector('#date-edit');
  const priorityEditArr = document.querySelector('.edit-priority-btns label');
  const exit = document.querySelector('.exit-edit');
  const editSubmitBtn = document.querySelector('#edit__btn');
  let currentNode;
  let currentToDoTitle;
  let arrayIndex;

  exit.addEventListener('click', closeEditPrompt);

  editIcons.forEach((icon) =>
    icon.addEventListener('click', () => {
      // getCurrentNodeToDoTitle(icon);
      // getCurrentNodeIndex(array, currentToDoTitle);
      // setEditValues(currentToDoTitle);
      assignClassCurrentNode(icon);
      populateEditFields();
      openEditPrompt();
    })
  );

  editSubmitBtn.addEventListener('click', callOnSubmit);

  function callOnSubmit() {
    console.log(currentNode);
    updateToDoDOM();
    closeEditPrompt();
    resetEdit();
  }

  function assignClassCurrentNode(icon) {
    icon.parentElement.parentElement.classList.add('isBeingEdited');
    currentNode = document.querySelector('.isBeingEdited');
  }

  function populateEditFields() {
    titleEdit.value = currentNode.querySelector('.item-text-title').textContent;
    selectEditPriorityButton().click();
  }

  function selectEditPriorityButton() {
    return document.querySelector(
      `#${document.querySelector('.isBeingEdited').classList[1]}_lbl-edit`
    );
  }

  function openEditPrompt() {
    editPrompt.classList.remove('collapse');
    DomController.bodyContainer.classList.add('blur');
  }

  function updateToDoDOM() {
    if (currentNode) {
      currentNode.querySelector('.item-text-title').textContent =
        titleEdit.value;
      changeItemPriority();
    }
  }

  function changeItemPriority() {
    currentNode.classList.remove(currentNode.classList[1]);
    currentNode.classList.add(
      document
        .querySelector('.edit-priority-btns .priority-active')
        .id.split('_')[0]
    );
  }

  function closeEditPrompt() {
    editPrompt.classList.add('collapse');
    DomController.bodyContainer.classList.remove('blur');
  }

  function resetEdit() {
    if (currentNode) {
      currentNode.classList.remove('isBeingEdited');
      currentNode = undefined;
    }
  }

  //   function getCurrentNodeToDoTitle(icon) {
  //     currentToDoTitle =
  //       icon.parentElement.parentElement.parentElement.querySelector(
  //         '.item-text-title'
  //       ).textContent;
  //     return currentToDoTitle;
  //   }

  //   function getCurrentNodeIndex(arr, title) {
  //     arrayIndex = arr.findIndex((object) => object.title === title);
  //   }

  //   function setEditValues(title) {
  //     titleEdit.textContent = title;
  //     detailsEdit.textContent = array[arrayIndex].details;
  //     dateEdit.value = array[arrayIndex].dueDate;
  //   }

  //   function updateToDoArray() {
  //     // arrayIndex = arr.findIndex((object) => object.title === title);

  //     array[arrayIndex].title = titleEdit.value;
  //     array[arrayIndex].details = detailsEdit.value;
  //     array[arrayIndex].dueDate = dateEdit.value;
  //     array[arrayIndex].priority = (() => {
  //       const checkedValue = document
  //         .querySelector('.edit-prompt__div .priority-btns input:checked')
  //         .id.slice(0, 3);
  //       if (checkedValue === 'low' || checkedValue === 'med') return checkedValue;
  //       return 'high';
  //     })();
  //   }

  //   function updateToDoDOM() {
  //     console.log(arrayIndex);
  //     console.log(array[arrayIndex]);
  //     currentNode.querySelector('.item-text-title').textContent =
  //       array[arrayIndex].title;
  //     // ).textContent = titleEdit.value;
  //   }
}
