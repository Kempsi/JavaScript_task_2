let phonebookArray = {
  array: [],
};

let input = require("readline-sync");
let isRunning = true;

// Ikuinen looppi, jossa pääohjelma pyörii
while (isRunning) {
  let action = input.question(
    "Mitä haluat tehdä? 1 = Lisää, 2 = Etsi, 3 = Lopeta) "
  );

  // Valinnan perusteella suoritetaan jokin toiminto
  // 1 = Lisää uusi henkilö , 2 = Etsi henkilön numero nimen perusteella, 3 = Sulje sovellus
  switch (action) {
    case "1":
      3;
      let name = input.question("Syötä nimi: ");
      let phonenumber = input.question("Syötä puhelinnumero: ");

      let person = { etunimi: name.toLowerCase(), puhelinnumero: phonenumber };
      phonebookArray.array.push(person);
      console.log("Henkilö lisätty puhelinluetteloon!");
      break;
    case "2":
      let nameToSearch = input.question(
        "Syötä haettavan numeron omistajan nimi: "
      );

      nameToSearch = nameToSearch.toLowerCase();

      console.log(SearchByName(phonebookArray, nameToSearch));

      break;

    case "3":
      console.log("Ohjelma sulkeutuu...");
      isRunning = false;
      break;
  }

  console.log(action);
}

// Funktio, joka etsii puhelinluettelosta nimen perusteella puhelinnumeron
// Palauttaa numeron, jos se löytyy ja muutoin virhetekstin
function SearchByName(phonebookArray, name) {
  let person = phonebookArray.array.find((person) => {
    return person.etunimi === name;
  });

  if (person) {
    return person.puhelinnumero;
  } else {
    return "Henkilöä ei löytynyt!";
  }
}
