const service = require("../services/philosophersService");

exports.getAll = (req, res) => res.json(service.getAll());
exports.getById = (req, res) => {
  const item = service.getById(req.params.id);
  item ? res.json(item) : res.status(404).json({ error: "Not found" });
};
exports.create = (req, res) => res.status(201).json(service.create(req.body));
exports.update = (req, res) => res.json(service.update(req.params.id, req.body));
exports.partialUpdate = (req, res) => res.json(service.partialUpdate(req.params.id, req.body));
exports.remove = (req, res) => res.json(service.remove(req.params.id));