const 
    express = require('express'),
    router = express.Router(),
    jwt = require('jsonwebtoken'),
    controllers = require('../controllers')

router.get('/', controllers.cities.findAll);
router.get('/:id', controllers.cities.findById);
router.get('/:id/posts', controllers.cities.getPosts);

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
        console.log(req.userId)
        next();
    }
    else {
        res.sendStatus(403);
    }
})

router.post('/:id/posts', controllers.cities.createPost);

// router.post('/', controllers.cities.createCity);//not needed
// router.put('/:id', controllers.cities.editCity);//not needed
// router.delete('/:id', controllers.cities.deleteCity);//not neededß

module.exports = router;