const 
    express = require('express'),
    router = express.Router(),
    controllers = require('../controllers')

// //get all posts by users. will show on profile page
 router.get('/', controllers.post.findAllPostsByUser);
 router.get('/',controllers.post.findAllPostsByCity)
// router.get('/cities/:id/posts', controllers.post.findAllByCity);
// router.post('/cities/:id/user/:id/post', controllers.post.createPost);
// router.put('/post/:id', controllers.post.editPost);
// router.delete('/post/:id', controllers.post.deletePost);

module.exports = router;