// Seznam dobrých skutků
const dobreSkutky = [
  "Pomoci sousedovi s nákupem",
  "Napsat někomu povzbudivý vzkaz",
  "Pochválit kolegu v práci",
  "Uklidit odpadky v parku",
  "Darovat oblečení potřebným",
  "Poslat děkovný e-mail učiteli nebo trenérovi",
  "Připravit snídani rodině",
  "Udělat radost kamarádovi malým dárkem",
  "Poděkovat řidiči autobusu",
  "Usmát se na cizího člověka",
  "Pomoct někomu nést těžké věci",
  "Sdílet zajímavý článek o pozitivních zprávách",
  "Vysadit květinu nebo strom",
  "Napsat děkovný dopis rodičům",
  "Věnovat čas poslouchání přítele",
  "Darovat krev",
  "Pomoct při dobrovolnické akci",
  "Zaplatit kávu někomu v kavárně",
  "Uklidit svůj pracovní prostor a nabídnout pomoc kolegům",
  "Naučit někoho novou dovednost"
];

// Funkce pro zobrazení seznamu skutků
function zobrazSkutky() {
  const container = document.getElementById('seznamSkutku');
  container.innerHTML = ''; // vyčistit obsah
  dobreSkutky.forEach((skutek, index) => {
    const p = document.createElement('p');
    p.textContent = `${index + 1}. ${skutek}`;
    container.appendChild(p);
  });
}

// Spustit po načtení stránky
window.onload = function() {
  zobrazSkutky();
};
