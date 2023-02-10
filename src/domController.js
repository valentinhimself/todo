const DomController = (() => {
  const bodyContainer = document.querySelector('.body-container');
  const createBtn = document.querySelector('.add-todo');
  const prompt = document.querySelector('.prompt__div');
  const exit = document.querySelector('.exit');

  createBtn.addEventListener('click', () => {
    bodyContainer.classList.add('blur');
    prompt.classList.remove('collapse');
  });

  exit.addEventListener('click', () => {
    bodyContainer.classList.remove('blur');
    prompt.classList.add('collapse');
  });
})();

export default DomController;
