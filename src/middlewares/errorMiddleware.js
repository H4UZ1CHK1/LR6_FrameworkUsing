module.exports = (err, req, res, next) => {
    console.error("💥 Ошибка:", err.message);
    res.status(500).json({ error: "Ошибка на стороне сервера" });
  };
  