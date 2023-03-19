import { array } from './index';

export default function navSort() {
  const select = () => {
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
      });
    });
    return 'test';
  };
  select();

  const getHomeNumber = () => array.length;
  const getTodayNumber = () => '';
  const getWeekNumber = () => '';
}
