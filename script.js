const binId = "6836c98a8a456b7966a657de";
const apiKey = "$2a$10$cEC9UMYDjgPs5bqVeFHXqOU8EaKOGZAnvhz6xxmJ2LX4iGdeAsIrS";
const url = `https://api.jsonbin.io/v3/b/${binId}/latest`;

const deedContainer = document.getElementById("goodDeedsContainer");
const completeButton = document.getElementById("completeButton");

let deeds = [];

// Vrátí index skutku pro dnešní den
function getTodayDeedIndex(total) {
  const today = new Date().toISOString().split("T")[0]; // yyyy-mm-dd
  const saved = JSON.parse(localStorage.getItem("dailyDeed")) || {};
  
  if (saved.date === today && saved.index < total) {
    return saved.index;
  }

  const randomIndex = Math.floor(Math.random() * total);
  localStorage.setItem("dailyDeed", JSON.stringify({ date: today, index: randomIndex }));
  return randomIndex;
}

function showDeed(index) {
  deedContainer.textContent = deeds[index];
  completeButton.style.display = "inline";
}

function markDeedCompleted() {
  deedContainer.textContent = "Děkujeme, že jste splnili dobrý skutek!";
  completeButton.style.display = "none";
}

fetch(url, {
  headers: {
    "X-Master-Key": apiKey
  }
})
  .then(response => response.json())
  .then(data => {
    deeds = data.record.skutky || [];
    const index = getTodayDeedIndex(deeds.length);
    showDeed(index);
  })
  .catch(error => {
    console.error("Chyba při načítání dat:", error);
    deedContainer.textContent = "Nepodařilo se načíst skutek.";
  });

completeButton.addEventListener("click", markDeedCompleted);
