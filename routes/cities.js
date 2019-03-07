const 
    express = require('express'),
    router = express.Router(),
    controllers = require('../controllers')

router.get('/', controllers.cities.findAll);
router.get('/:id', controllers.cities.findById);
router.get('/:id/posts', controllers.cities.getPosts);
router.post('/', controllers.cities.createCity);
router.put('/:id', controllers.cities.editCity);
router.delete('/:id', controllers.cities.deleteCity);

module.exports = router;