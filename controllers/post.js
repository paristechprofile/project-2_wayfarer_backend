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
  },
  editPost: (req,res) => {
    console.log('display one post for a specific user')
    let postId = req.params.id;
    console.log(postId);
    db.Post.findOneAndUpdate({ _id: postId}, req.body, (err,updatedPost) => {
      if (err) {
        console.log('error editing posts', err)
      } 
      res.json(updatedPost)
    })
  },
  deletePost: (req,res) => {
    console.log('delete post triggered')
    let postId = req.params.id;
    console.log(postId);
    db.Post.findOneAndDelete({ _id: postId}, (err,deletedPost) => {
      if (err) {
        console.log('error deleting posts', err)
      } 
      res.json(deletedPost)
    })
  }
}

// router.get('/user/:id/posts', controllers.post.findAllByUser);
// router.get('/cities/:id/posts', controllers.post.findAllByCity);

//router.post('/cities/:id/user/:id/post', controllers.post.createPost);