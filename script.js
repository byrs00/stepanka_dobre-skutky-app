const binId = "6836c98a8a456b7966a657de";
const apiKey = "$2a$10$cEC9UMYDjgPs5bqVeFHXqOU8EaKOGZAnvhz6xxmJ2LX4iGdeAsIrS";
const apiUrl = `https://api.jsonbin.io/v3/b/${binId}`;

async function getSkutky() {
  const response = await fetch(apiUrl + "/latest", {
    headers: {
      "X-Master-Key": apiKey
    }
  });
  const data = await response.json();
  return data.record.skutky;
}

async function addSkutek(novySkutek) {
  const skutky = await getSkutky();
  skutky.push(novySkutek);

  const response = await fetch(apiUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": apiKey,
      "X-Bin-Versioning": "false"
    },
    body: JSON.stringify({ skutky })
  });
  return await response.json();
}

// Příklad přidání skutku:
addSkutek("Usmál jsem se na cizího člověka dnes ráno.")
  .then(data => console.log("Uloženo:", data))
  .catch(err => console.error("Chyba:", err));
