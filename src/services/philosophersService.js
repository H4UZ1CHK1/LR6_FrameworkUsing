const { readData, writeData } = require("../db/db");
const { v4: uuidv4 } = require("uuid");

const KEY = "philosophers";

const getAll = () => readData(KEY);
const getById = (id) => getAll().find((i) => i.id === id);
const create = (item) => {
  const data = getAll();
  const newItem = { id: uuidv4(), ...item };
  data.push(newItem);
  writeData(KEY, data);
  return newItem;
};
// остальные — без изменений, просто используют KEY
