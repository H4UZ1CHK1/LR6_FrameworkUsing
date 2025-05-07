const Framework = require('./framework/Application');
const philosophersRoutes = require('./src/routes/philosophersRoutes');
const schoolsRoutes = require('./src/routes/schoolsRoutes');
const logger = require('./src/middlewares/logger');

const app = new Framework();
const PORT = 3000;

app.use(logger);
app.addRouter(philosophersRoutes);
app.addRouter(schoolsRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});