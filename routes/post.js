const 
    express = require('express'),
    router = express.Router(),
    controllers = require('../controllers')

router.get('/', controllers.post.index)

module.exports = router;