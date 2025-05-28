const BIN_ID = "6836c98a8a456b7966a657de";
const API_KEY = "$2a$10$cEC9UMYDjgPs5bqVeFHXqOU8EaKOGZAnvhz6xxmJ2LX4iGdeAsIrS";

async function fetchGoodDeeds() {
  const url = `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`;
  try {
    const response = await fetch(url, {
      headers: {
        'X-Master-Key': API_KEY,
      },
    });
    if (!response.ok) {
      console.error("Chyba při načítání dat:", response.statusText);
      return [];
    }
    const data = await response.json();
    return data.record.goodDeeds || [];
  } catch (error) {
    console.error("Chyba při fetch:", error);
    return [];
  }
}

function displayGoodDeeds(deeds) {
  const listEl = document.getElementById('good-deeds-list');
  listEl.innerHTML = "";
  deeds.forEach(deed => {
    const li = document.createElement('li');
    li.textContent = deed;
    listEl.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  const deeds = await fetchGoodDeeds();
  displayGoodDeeds(deeds);
});
