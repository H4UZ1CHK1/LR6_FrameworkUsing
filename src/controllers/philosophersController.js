const service = require('../services/philosophersService');

module.exports = {
  getAll: (req, res) => res.json(service.getAll()),

  getById: (req, res) => {
    const id = parseInt(req.params.id);
    const item = service.getById(id);
    if (item) res.json(item);
    else res.status(404).send('Философ не найден');
  },

  create: (req, res) => {
    const item = service.create(req.body);
    res.status(201).json(item);
  },

  update: (req, res) => {
    const id = parseInt(req.params.id);
    const item = service.update(id, req.body);
    res.json(item);
  },

  delete: (req, res) => {
    const id = parseInt(req.params.id);
    service.remove(id);
    res.send('Удалено');
  }
};