const 
  db = require('../models')

module.exports = {
  findAllPostsByUser: (req,res) => {
    console.log('display posts for a specific user')
    let userId = req.userId;
    console.log(req.body);
    db.Post.find({ author: userId })
      .populate('author')
      .exec((err, foundPosts) => {
        if (err) {
          console.log('error retrieving posts', err)
        } 
        res.json(foundPosts)
    })
  },
  
    

  }

// router.get('/user/:id/posts', controllers.post.findAllByUser);
// router.get('/cities/:id/posts', controllers.post.findAllByCity);

//router.post('/cities/:id/user/:id/post', controllers.post.createPost);
// router.put('/post/:id', controllers.post.editPost);
// router.delete('/post/:id', controllers.post.deletePost);