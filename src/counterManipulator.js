export function manipulateCounters(dateValue) {

const homeCounter = document.querySelector('.home__number');
const todayCounter = document.querySelector('.today__number');
const weekCounter = document.querySelector('.week__number');

  const isToday = () => {
    const today = `0${new Date().toLocaleDateString().replace(/\//g, '-')}`;
    const parts = today.split('-');
    return `${parts[2]}-${parts[0]}-${parts[1]}` === dateValue;
  };

  const isDateThisWeek = (date) => {
    date = new Date(`${date}T00:00:00`);
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
    const increaseHomeCounter = () => {
        homeCounter.textContent = parseInt(homeCounter.textContent) + 1;
        homeCounter.classList.remove('hide');
    };

    const increaseTodayCounter = () => {
        if (isToday()) {
            todayCounter.textContent = parseInt(todayCounter.textContent) + 1;
            todayCounter.classList.remove('hide');
        }
    }

    const increaseWeekCounter = () => {
        if (isDateThisWeek(dateValue)) {
        weekCounter.textContent = parseInt(weekCounter.textContent) + 1;
        weekCounter.classList.remove('hide');
        }
    }

    const increaseAllCounters = () => {
        increaseHomeCounter();
        increaseTodayCounter();
        increaseWeekCounter();
    }

    return { increaseAllCounters, increaseTodayCounter, increaseWeekCounter };
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
    

    const decreaseTodayCounter = () => {
        if (!isCounterZero(todayCounter) && isToday()) {
        todayCounter.textContent = parseInt(todayCounter.textContent) - 1;
        if (isCounterZero(todayCounter)) hide(todayCounter);
        }
    }

    const decreaseWeekCounter = () => {
            if (
              !isCounterZero(weekCounter) &&
              isDateThisWeek(dateValue)
            ) {
              weekCounter.textContent = parseInt(weekCounter.textContent) - 1;
              if (isCounterZero(weekCounter)) hide(weekCounter);
            }
    }

    const decreaseAllCounters = () => {
        decreaseHomeCounter();
        decreaseTodayCounter();
        decreaseWeekCounter();
    }

    return { decreaseAllCounters, decreaseTodayCounter, decreaseWeekCounter }
  };

  return {
    homeCounter,
    todayCounter,
    weekCounter,
    decreaseCounters,
    increaseCounters,
    isToday,
    isDateThisWeek,
  };
}

export function checkboxCounter(dateValue) {
  const box = document.querySelectorAll('.check-box');
  box[box.length - 1].addEventListener('click', changeCounters)
  
  function changeCounters(){
    dateValue = array[box.length - 1].dueDate;
    if (box[box.length - 1].classList.contains('checked')) {
      manipulateCounters(dateValue).decreaseCounters().decreaseAllCounters();
    } else {
      manipulateCounters(dateValue).increaseCounters().increaseAllCounters();
    }
  };
}

export function adjustCounters(oldDate, newDate) {
    if (oldDate === newDate) return;
    if (
      manipulateCounters(newDate).isToday() &&
      !manipulateCounters(oldDate).isDateThisWeek(oldDate)
    ) {
      manipulateCounters(newDate).increaseCounters().increaseTodayCounter();
      manipulateCounters(newDate).increaseCounters().increaseWeekCounter();
    } else if (
      manipulateCounters(newDate).isToday() &&
      manipulateCounters(oldDate).isDateThisWeek(oldDate)
    ) {
      manipulateCounters(newDate).increaseCounters().increaseTodayCounter();
    } else if (
      manipulateCounters(oldDate).isToday() &&
      !manipulateCounters(newDate).isDateThisWeek(newDate)
    ) {
      manipulateCounters(oldDate).decreaseCounters().decreaseTodayCounter();
      manipulateCounters(oldDate).decreaseCounters().decreaseWeekCounter();
    } else if (
      manipulateCounters(oldDate).isToday() &&
      manipulateCounters(newDate).isDateThisWeek(newDate)
    ) {
      manipulateCounters(oldDate).decreaseCounters().decreaseTodayCounter();
    } else if (
      manipulateCounters(oldDate).isDateThisWeek(oldDate) &&
      !manipulateCounters(newDate).isDateThisWeek(newDate)
    ) {
      manipulateCounters(oldDate).decreaseCounters().decreaseWeekCounter();
    } else if (
      manipulateCounters(newDate).isDateThisWeek(newDate) &&
      !manipulateCounters(oldDate).isDateThisWeek(oldDate)
    ) {
      manipulateCounters(oldDate).increaseCounters().increaseWeekCounter();
    }
}
  