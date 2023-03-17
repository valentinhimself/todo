import { array } from './index';

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
