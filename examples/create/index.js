const card = document.querySelector('.card');

// card.innerHTML = '<h3>Hello World!</>';

const heading = document.createElement('h3');
heading.innerText = 'Hello World!';
card.appendChild(heading);

card.removeChild(heading);

const wrapper = document.createElement('ul');

let family = ['Monk', 'Fish', 'Jade', 'Michael'];

family.forEach((member) => {
  const li = document.createElement('li');
  li.innerText = member;
  wrapper.appendChild(li);
});

card.appendChild(wrapper);
