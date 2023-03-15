const clickMeBtn = document.getElementById('click_me');
const clickValue = document.getElementById('click_value');

clickMeBtn.addEventListener('click', () => clickValue.value++);
