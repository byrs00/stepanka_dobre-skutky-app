const binId = "6836c98a8a456b7966a657de";
const apiKey = "$2a$10$cEC9UMYDjgPs5bqVeFHXqOU8EaKOGZAnvhz6xxmJ2LX4iGdeAsIrS";
const url = `https://api.jsonbin.io/v3/b/${binId}/latest`;

let deeds = [];

fetch(url, {
  headers: {
    "X-Master-Key": apiKey
  }
})
  .then(response => response.json())
  .then(data => {
    deeds = data.record.skutky || [];
  })
  .catch(error => {
    console.error("Chyba při načítání dat:", error);
    document.getElementById("goodDeedsContainer").textContent = "Nepodařilo se načíst data.";
  });

document.getElementById("generateButton").addEventListener("click", () => {
  if (deeds.length > 0) {
    const randomIndex = Math.floor(Math.random() * deeds.length);
    const randomDeed = deeds[randomIndex];
    document.getElementById("goodDeedsContainer").textContent = randomDeed;
  } else {
    document.getElementById("goodDeedsContainer").textContent = "Skutky nejsou dostupné.";
  }
});
