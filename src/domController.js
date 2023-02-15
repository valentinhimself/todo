const DomController = (() => {
  const bodyContainer = document.querySelector('.body-container');
  const createBtn = document.querySelector('.add-todo');
  const prompt = document.querySelector('.prompt__div');
  const exit = document.querySelector('.exit');
  const priorityLabels = document.querySelectorAll('label');
  const submitBtn = document.querySelector('#submit__btn');
  const priorityBtns = document.querySelectorAll('#low, #med, #high');

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
    exit.click();
  });
  return { priorityBtns, submitBtn };
})();

export default DomController;
