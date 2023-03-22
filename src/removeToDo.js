import { array } from './index';
import { manipulateCounters } from './counterManipulator';

export default function deleteIcons() {
  const deleteIconsArray = document.querySelectorAll('.delete-icon svg');
  console.log(deleteIconsArray);

  deleteIconsArray.forEach((icon) => {
    icon.addEventListener('click', () => {
      icon.parentElement.parentElement.parentElement.classList.add(
        'isBeingDeleted'
      );
      const deletedToDo = document.querySelector('.isBeingDeleted');
      if (deletedToDo) {
        getIndex(deletedToDo);

        manipulateCounters(
          array[getIndex(deletedToDo)].dueDate
        ).decreaseCounters().decreaseAllCounters();
        removeToDo(deletedToDo);
        array.pop(getIndex());
      }
    });
  });

  function removeToDo(deletedToDo) {
    deletedToDo.remove();
  }

  const getIndex = (deletedToDo) => {
    const main = document.querySelector('main');
    return Array.from(main.childNodes).indexOf(deletedToDo);
  };
}
