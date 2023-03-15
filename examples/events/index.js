const clickMeBtn = document.getElementById('click_me');
const clickValue = document.getElementById('click_value');
const changeMe = document.getElementById('change_me');
const card = document.querySelector('.card');

clickMeBtn.addEventListener('click', () => clickValue.value++);

changeMe.addEventListener('blur', () =>
  console.log('on blur ' + changeMe.value)
);
changeMe.addEventListener('input', (event) =>
  console.log('any input change ' + event.target.value)
);

card.addEventListener('click', (event) => {
  console.log(event.composedPath());
});
