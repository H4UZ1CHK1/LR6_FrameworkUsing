const { readJSON, writeJSON } = require('../db/db');
const file = 'philosophers.json';

function getAll() {
  return readJSON(file);
}

function getById(id) {
  const list = readJSON(file);
  return list.find((item) => item.id === id);
}

function create(data) {
  const list = readJSON(file);
  data.id = Date.now();
  list.push(data);
  writeJSON(file, list);
  return data;
}

function update(id, data) {
  let list = readJSON(file);
  list = list.map((item) => item.id === id ? { ...item, ...data } : item);
  writeJSON(file, list);
  return getById(id);
}

function remove(id) {
  let list = readJSON(file);
  list = list.filter((item) => item.id !== id);
  writeJSON(file, list);
}

module.exports = { getAll, getById, create, update, remove };