const 
    express = require('express'),
    router = express.Router(),
    jwt = require('jsonwebtoken'),
    controllers = require('../controllers')
    

// //get all posts by users. will show on profile page

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
});

router.get('/', controllers.post.findAllPostsByUser);
router.get('/:id', controllers.post.findSinglePost);

//.get('/',controllers.post.findAllPostsByCity)
// router.get('/cities/:id/posts', controllers.post.findAllByCity);
//  router.post('/cities/:id/post', controllers.post.createPost);
// router.put('/post/:id', controllers.post.editPost);
// router.delete('/post/:id', controllers.post.deletePost);

module.exports = router;