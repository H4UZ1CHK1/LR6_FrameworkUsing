const { readData, writeData } = require("../db/db");
const { v4: uuidv4 } = require("uuid");

const KEY = "concepts";

const getAll = () => readData(KEY);

const getById = (id) => getAll().find((c) => c.id === id);

const create = (item) => {
  const data = getAll();
  const newItem = { id: uuidv4(), ...item };
  data.push(newItem);
  writeData(KEY, data);
  return newItem;
};

const update = (id, body) => {
  const data = getAll();
  const index = data.findIndex((c) => c.id === id);
  if (index === -1) throw new Error("Не найдено");
  data[index] = { ...data[index], ...body };
  writeData(KEY, data);
  return data[index];
};

const partialUpdate = update;

const remove = (id) => {
  const data = getAll();
  const newData = data.filter((c) => c.id !== id);
  writeData(KEY, newData);
  return { deleted: id };
};

module.exports = { getAll, getById, create, update, partialUpdate, remove };
