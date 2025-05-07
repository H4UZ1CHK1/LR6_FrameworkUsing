const fs = require('fs');
const path = require('path');

function readJSON(file) {
  const data = fs.readFileSync(path.resolve(__dirname, file), 'utf-8');
  return JSON.parse(data);
}

function writeJSON(file, data) {
  fs.writeFileSync(path.resolve(__dirname, file), JSON.stringify(data, null, 2));
}

module.exports = { readJSON, writeJSON };