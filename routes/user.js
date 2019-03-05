const 
    express = require('express'),
    router = express.Router(),
    // jwt = require('jsonwebtoken'),
    controllers = require('../controllers');
    
//get all users
router.get('/all', controllers.user.findAll)

// //get one user
// router.get('/', controllers.user.findById)

// //create user
router.post('/signup', controllers.user.signup)

// //edit user profile
// router.put('/user/:id', controllers.user.editProfile)

// //delete user
// router.delete('/user/:id', controllers.user.delete)

// //middleware to add token to request/response
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

module.exports = router;