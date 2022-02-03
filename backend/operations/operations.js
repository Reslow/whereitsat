const nedb = require("nedb-promise");
const database = new nedb({ filename: "accounts.db", autoload: true });

const eventList = {
  type: "events",
  events: [
    {
      title: "Lasse-Stefanz",
      location: "Kjell Härnqvistsalen",
      time: "19:00 - 21:00",
      date: "21 mars",
      price: 350,
    },
    {
      title: "Pelle trubadu",
      location: "pubelipuben",
      time: "22:00 - 00:00",
      date: "29 mars",
      price: 110,
    },
    {
      title: "Kajsas Kör",
      location: "Göta Platsen",
      time: "15:00 - 16:00",
      date: "10 april",
      price: 99,
    },
    {
      title: "Klubben Untz",
      location: "Din favoritkällare",
      time: "22:00 - du tröttnar",
      date: "17 april",
      price: 150,
    },
  ],
};

function saveEvent() {
  database.insert(eventList);
}

async function getEvent() {
  const eventItems = await database.find({ type: "events" });
  return eventItems;
}

async function getAccountByTitle(title) {
  const account = await database.find({ "events.title": title });

  return account;
}

module.exports = { saveEvent, getEvent, getAccountByTitle };
