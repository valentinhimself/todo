export function manipulateCounters(dateValue) {

const homeCounter = document.querySelector('.home__number');
const todayCounter = document.querySelector('.today__number');
const weekCounter = document.querySelector('.week__number');

  const increaseHomeCounter = () => {
    homeCounter.textContent = parseInt(homeCounter.textContent) + 1;
    homeCounter.classList.remove('hide');
  };
  const isToday = () => {
    const today = `0${new Date().toLocaleDateString().replace(/\//g, '-')}`;
    const parts = today.split('-');
    return `${parts[2]}-${parts[0]}-${parts[1]}` === dateValue;
  };

  const isDateThisWeek = (date) => {
    const todayObj = new Date();
    const todayDate = todayObj.getDate();
    const todayDay = todayObj.getDay();

    // get first date of week
    const firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay));
    firstDayOfWeek.setHours(0, 0, 0, 0);

    // get last date of week
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);
    lastDayOfWeek.setHours(23, 59, 59, 0);

    // if date is equal or within the first and last dates of the week
    return date >= firstDayOfWeek && date <= lastDayOfWeek;
  };

  const increaseCounters = () => {
    increaseHomeCounter();

    if (isToday()) {
      todayCounter.textContent = parseInt(todayCounter.textContent) + 1;
      todayCounter.classList.remove('hide');
    }

    if (isDateThisWeek(new Date(`${dateValue}T00:00:00`))) {
      weekCounter.textContent = parseInt(weekCounter.textContent) + 1;
      weekCounter.classList.remove('hide');
    }
  };

  const decreaseCounters = () => {

    const hide = (counterName) => {
        counterName.classList.add('hide');
    }

    const isCounterZero = (counterName) => {
        return counterName.textContent === '0';
    }

    const decreaseHomeCounter = () => {
        if (!isCounterZero(homeCounter)) {
          homeCounter.textContent = parseInt(homeCounter.textContent) - 1;
          if (isCounterZero(homeCounter)) hide(homeCounter);
        }
    };
    decreaseHomeCounter();


    if (!isCounterZero(todayCounter) && isToday()) {
      todayCounter.textContent = parseInt(todayCounter.textContent) - 1;
      if (isCounterZero(todayCounter)) hide(todayCounter);
    }

    if (
      !isCounterZero(weekCounter) &&
      isDateThisWeek(new Date(`${dateValue}T00:00:00`))
    ) {
      weekCounter.textContent = parseInt(weekCounter.textContent) - 1;
      if (isCounterZero(weekCounter)) hide(weekCounter);
    }
  };

  return { decreaseCounters, increaseCounters };
}

export function checkboxCounter(dateValue) {
  const box = document.querySelectorAll('.check-box');
  console.log(box);
  box[box.length - 1].addEventListener('click', changeCounters)
  
  function changeCounters(){
      if (box[box.length - 1].classList.contains('checked')) {
        manipulateCounters(dateValue).decreaseCounters();
      } else {
        manipulateCounters(dateValue).increaseCounters();
      }
    };
}