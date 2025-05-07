const service = require("../services/conceptsService");

exports.getAll = (req, res) => res.json(service.getAll());

exports.getById = (req, res) => {
  const item = service.getById(req.params.id);
  item ? res.json(item) : res.status(404).json({ error: "Not found" });
};

exports.create = (req, res) => {
  const created = service.create(req.body);
  res.status(201).json(created);
};

exports.update = (req, res) => {
  try {
    const updated = service.update(req.params.id, req.body);
    res.json(updated);
  } catch {
    res.status(404).json({ error: "Not found" });
  }
};

exports.partialUpdate = (req, res) => {
  try {
    const updated = service.partialUpdate(req.params.id, req.body);
    res.json(updated);
  } catch {
    res.status(404).json({ error: "Not found" });
  }
};

exports.remove = (req, res) => res.json(service.remove(req.params.id));
