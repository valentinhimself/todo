import { array } from './index';
import { manipulateCounters } from './counterManipulator';

export default function navSort() {
  const selectNavItem = () => {
    const navNodes = document.querySelectorAll('nav > ul > li');
    navNodes.forEach((node) => {
      node.addEventListener('click', (e) => {
        for (let i = 0; i < navNodes.length; i++) {
          if (
            e.target === navNodes[i] ||
            e.target.parentElement === navNodes[i]
          )
            navNodes[i].classList.add('active');
          else navNodes[i].classList.remove('active');
        }
        filterToDos(document.querySelector('li.active span').textContent);
      });
    });
    function filterToDos(active) {
      const main = document.querySelector('main');
      for (let i = 0; i < main.children.length; i++) {
        if (active === 'Home') {
          main.children[i].classList.remove('hide');
        }
        else {
          if (getIndices(active)[i] === i) {
            main.children[i].classList.remove('hide');
          } else {
            main.children[i].classList.add('hide');
          }
        }
      }
    }

    function getIndices(active) {
      let indexArray = [];
      if (active === 'Today') {
        for (let i = 0; i < array.length; i++) {
          if (manipulateCounters(array[i].dueDate).isToday()) {
            indexArray.push(i);
          }
        }
      }
      else if (active === 'Week') {
        for (let i = 0; i < array.length; i++) {
          if (
            manipulateCounters(array[i].dueDate).isDateThisWeek(
              array[i].dueDate
            )
          ) {
            indexArray.push(i);
          }
        }
      }
      return indexArray;
    }

  };
    selectNavItem();
}
