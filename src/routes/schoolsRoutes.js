const Router = require('../../framework/Router');
const controller = require('../controllers/schoolsController');

const router = new Router();

router.get('/schools', controller.getAll);
router.get('/schools/:id', controller.getById);
router.post('/schools', controller.create);
router.put('/schools/:id', controller.update);
router.delete('/schools/:id', controller.delete);

module.exports = router;