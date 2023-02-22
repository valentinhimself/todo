const DomController = (() => {
  const bodyContainer = document.querySelector('.body-container');
  const createBtn = document.querySelector('.add-todo');
  const prompt = document.querySelector('.prompt__div');
  const exit = document.querySelector('.exit');
  const priorityLabels = document.querySelectorAll('label');
  const submitBtn = document.querySelector('#submit__btn');

  createBtn.addEventListener('click', () => {
    bodyContainer.classList.add('blur');
    prompt.classList.remove('collapse');
  });

  exit.addEventListener('click', () => {
    bodyContainer.classList.remove('blur');
    prompt.classList.add('collapse');
  });

  priorityLabels.forEach((label) => {
    label.addEventListener('click', (e) => {
      label.classList.add('priority-active');
      priorityLabels.forEach((lbl) => {
        if (e.target !== lbl) lbl.classList.remove('priority-active');
      });
    });
  });

  submitBtn.addEventListener('click', () => {
    if (isFilledOut()) {
      exit.click();
      priorityLabels.forEach((label) =>
        label.classList.remove('priority-active')
      );
    }
  });

  function getFormTitle() {
    return document.querySelector('#title');
  }
  function getFormDetails() {
    return document.querySelector('#details');
  }

  function getFormPriority() {
    return document.querySelector('.priority-btns input:checked');
  }

  function getFormDueDate() {
    return document.querySelector('#date');
  }

  function isFilledOut() {
    if (
      getFormTitle().value &&
      getFormDetails().value &&
      getFormPriority().id &&
      getFormDueDate().value
    )
      return true;
    return false;
  }

  function resetInputs() {
    getFormTitle().value = '';
    getFormDetails().value = '';
    getFormDueDate().value = '';
  }

  return {
    submitBtn,
    isFilledOut,
    getFormTitle,
    getFormDetails,
    getFormPriority,
    getFormDueDate,
    resetInputs,
  };
})();

export default DomController;
