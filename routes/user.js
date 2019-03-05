const 
    express = require('express'),
    router = express.Router(),
    jwt = require('jsonwebtoken'),
    controller = require('../controllers');

    router.use((req, res, next) => {
        console.log('user.js route activated router.use')
        const bearerHeader = req.headers['authorization'];
        console.log('user.js triggered token check', bearerHeader)

        if(typeof bearerHeader !== 'undefined'){
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            req.token = bearerToken; 
            let verified = jwt.verify(req.token, 'fantastic4');
            console.log('here is the verified', verified)
            req.userId = verified._id
            next();
        }
        else {
            res.sendStatus(403);
        }
    })

    router.get('/', controllers.user.show)

    module.exports = router;