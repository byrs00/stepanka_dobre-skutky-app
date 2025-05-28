const apiKey = '$2a$10$cEC9UMYDjgPs5bqVeFHXqOU8EaKOGZAnvhz6xxmJ2LX4iGdeAsIrS';
const binId = '6836c98a8a456b7966a657de';

async function fetchGoodDeeds() {
  try {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
      headers: {
        'X-Master-Key': apiKey
      }
    });

    if (!response.ok) {
      throw new Error('Nepodařilo se načíst data.');
    }

    const data = await response.json();
    const deeds = data.record.goodDeeds; // předpokládám, že seznam je v tomto klíči

    // Vyber náhodný skutek
    const randomIndex = Math.floor(Math.random() * deeds.length);
    const randomDeed = deeds[randomIndex];

    // Vypiš do HTML
    const container = document.getElementById('goodDeedsContainer');
    container.textContent = randomDeed;

  } catch (error) {
    console.error('Chyba:', error);
  }
}

window.onload = fetchGoodDeeds;
