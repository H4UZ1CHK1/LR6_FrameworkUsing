const Router = require('../../framework/Router');
const controller = require('../controllers/philosophersController');

const router = new Router();

router.get('/philosophers', controller.getAll);
router.get('/philosophers/:id', controller.getById);
router.post('/philosophers', controller.create);
router.put('/philosophers/:id', controller.update);
router.delete('/philosophers/:id', controller.delete);

module.exports = router;