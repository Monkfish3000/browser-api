const findMe = document.querySelector('#find_me');
// console.log(findMe);
const findById = document.getElementById('find_me');
// console.log(findById);

const changeMe = document.getElementById('change_me');
changeMe.innerText = 'Changed';

const changeHtml = document.getElementById('add_html');
changeHtml.innerHTML = '<h2>This has been added via JS</h2>';

const findAll = document.querySelectorAll('.change-all');

findAll.forEach((el, idx) => {
  el.innerText = 'Javascript rocks! 🎸' + (parseInt(idx) + 1);
});
