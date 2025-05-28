const form = document.getElementById('skutekForm');
const input = document.getElementById('skutekInput');
const list = document.getElementById('skutekList');

// Načti uložené skutky z localStorage při načtení stránky
let skutky = JSON.parse(localStorage.getItem('skutky')) || [];
skutky.forEach(skutek => addSkutekToList(skutek));

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const newSkutek = input.value.trim();
  if(newSkutek) {
    skutky.push(newSkutek);
    localStorage.setItem('skutky', JSON.stringify(skutky));
    addSkutekToList(newSkutek);
    input.value = '';
  }
});

function addSkutekToList(skutek) {
  const li = document.createElement('li');
  li.textContent = skutek;
  list.appendChild(li);
}
