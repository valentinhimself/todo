import { array } from './index';

export default function getDetails() {
  const detailsList = document.querySelectorAll('.details__btn');
  let detailsParentDiv;

  const getIndex = (element) => {
    const main = document.querySelector('main');
    return Array.from(main.childNodes).indexOf(element);
  };

  const setDetails = () => {
    document.querySelector('.details-title').textContent =
      array[getIndex(detailsParentDiv)].title;
    document.querySelector('.details-priority__span').textContent =
      array[getIndex(detailsParentDiv)].priority;
    document.querySelector('.details-duedate__span').textContent =
      array[getIndex(detailsParentDiv)].dueDate;
    document.querySelector('.details-details__span').textContent =
      array[getIndex(detailsParentDiv)].details;
  };

  detailsList.forEach((element) => {
    element.addEventListener('click', () => {
      detailsParentDiv = element.parentElement.parentElement;
      setDetails();
    });
  });
}
