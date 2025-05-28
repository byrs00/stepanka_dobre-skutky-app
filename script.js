const apiKey = '$2a$10$cEC9UMYDjgPs5bqVeFHXqOU8EaKOGZAnvhz6xxmJ2LX4iGdeAsIrS';
const binId = '6836c98a8a456b7966a657de';

const deedsList = document.getElementById('good-deeds-list');
const newDeedBtn = document.getElementById('new-deed-btn');
const completeDeedBtn = document.getElementById('complete-deed-btn');

let goodDeeds = [];
let currentDeed = '';

async function fetchGoodDeeds() {
  deedsList.textContent = 'Načítám skutek...';
  try {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
      headers: {
        'X-Master-Key': apiKey,
      },
    });
    const json = await response.json();
    goodDeeds = json.record.goodDeeds;
    showRandomDeed();
  } catch (error) {
    deedsList.textContent = 'Nepodařilo se načíst skutky.';
    console.error(error);
  }
}

function showRandomDeed() {
  if (goodDeeds.length === 0) {
    deedsList.textContent = 'Žádné dobré skutky k zobrazení.';
    return;
  }
  const randomIndex = Math.floor(Math.random() * goodDeeds.length);
  currentDeed = goodDeeds[randomIndex];
  deedsList.textContent = currentDeed;
}

newDeedBtn.addEventListener('click', () => {
  showRandomDeed();
});

completeDeedBtn.addEventListener('click', () => {
  alert(`Gratuluji! Splnil(a) jsi skutek: "${currentDeed}"`);
  showRandomDeed();
});

// Načti skutky při startu
fetchGoodDeeds();
