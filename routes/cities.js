const 
    express = require('express'),
    router = express.Router(),
    controllers = require('../controllers')

router.get('/', controllers.cities.findAll);
// router.get('/:id', controllers.cities.findById);
// router.post('/', controllers.cities.create);
// router.put('/:id', controllers.cities.edit);
// router.delete('/:id', controllers.cities.delete);

module.exports = router;