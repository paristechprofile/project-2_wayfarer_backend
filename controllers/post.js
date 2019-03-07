const 
  db = require('../models')

module.exports = {
  findAllPostsByUser: (req,res) => {
    console.log('display all posts for a specific user')
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
  findSinglePost: (req,res) => {
    console.log('display one post for a specific user')
    let postId = req.params.id;
    console.log(postId);
    db.Post.find({ _id: postId })
      .populate('city')
      .populate('author')
      .exec((err, selectedPost) => {
        if (err) {
          console.log('error retrieving posts', err)
        } 
        res.json(selectedPost)
    })
  }

  }

// router.get('/user/:id/posts', controllers.post.findAllByUser);
// router.get('/cities/:id/posts', controllers.post.findAllByCity);

//router.post('/cities/:id/user/:id/post', controllers.post.createPost);
// router.put('/post/:id', con