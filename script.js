const binId = "6836c98a8a456b7966a657de";
const apiKey = "$2a$10$cEC9UMYDjgPs5bqVeFHXqOU8EaKOGZAnvhz6xxmJ2LX4iGdeAsIrS";
const url = `https://api.jsonbin.io/v3/b/${binId}/latest`;

fetch(url, {
  headers: {
    "X-Master-Key": apiKey
  }
})
  .then(response => response.json())
  .then(data => {
    const deeds = data.record.skutky || [];
    if (deeds.length > 0) {
      const randomIndex = Math.floor(Math.random() * deeds.length);
      const randomDeed = deeds[randomIndex];
      document.getElementById("goodDeedsContainer").textContent = randomDeed;
    } else {
      document.getElementById("goodDeedsContainer").textContent = "Žádné skutky nenalezeny.";
    }
  })
  .catch(error => {
    console.error("Chyba při načítání dat:", error);
    document.getElementById("goodDeedsContainer").textContent = "Nepodařilo se načíst data.";
  });
