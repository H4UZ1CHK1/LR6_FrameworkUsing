const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "db.json");

const readDb = () => JSON.parse(fs.readFileSync(FILE, "utf-8"));

const readData = (key) => {
  const db = readDb();
  return db[key] || [];
};

const writeData = (key, data) => {
  const db = readDb();
  db[key] = data;
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2), "utf-8");
};

module.exports = { readData, writeData };