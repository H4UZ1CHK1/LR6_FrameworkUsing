const express = require("express");
const bodyParser = require("body-parser");
const philosophersRoutes = require("./src/routes/philosophersRoutes");
const conceptsRoutes = require("./src/routes/conceptsRoutes");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/api/philosophers", philosophersRoutes);
app.use("/api/concepts", conceptsRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Ошибка" });
});

app.listen(PORT, () => console.log(`Порт сервера: http://localhost:${PORT}`));

const errorMiddleware = require("./src/middlewares/errorMiddleware");
app.use(errorMiddleware);

