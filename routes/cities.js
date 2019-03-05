const 
    express = require('express'),
    router = express.Router(),
    controllers = require('../controllers')

router.get('/', controllers.cities.index)

module.exports = router;