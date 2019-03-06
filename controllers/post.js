const 
  db = require('../models')

module.exports = {
  findAllPostsByUser: (req,res) => {
    console.log('display posts for a specific user')
    let userId = req.body.userId;
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

  findAllPostsByCity: (req,res) => {
    console.log('display posts for a specific city')
    let cityId = req.body.city;
    console.log(req.body);
    db.Post.find({ city: cityId })
      .populate('city')
      .exec((err, foundCities) => {
        if (err) {
          console.log('error retrieving posts', err)
        } 
        res.json(foundCities)
    })
  },

  }
// editCity: (req,res)=>{
//   console.log('update city', req.params);
//   console.log(`the body is${req.body}`);
//   const cityId = req.params.id;
//   db.City.findOneAndUpdate(
//       {_id:cityId},
//       req.body,
//       // {name: req.params.name},
//       {new: true},
//       (err, updateCity) => {
//           if(err) {throw err;}
//           res.json(updateCity);
//   });
//   //////////////////////
// },
// findById: (req, res)=>{
//   db.City.find({_id: req.params.id}, (error, cities) => {
//       res.json(cities);
//     }); 

// },
// createCity: (req,res)=>{
//   let newCity = new db.City({
//       name: req.body.name,
//       country: req.body.country,
//       state: req.body.state,
//       image: req.body.image
//     });
//     newCity.save((error, city) => {
//       res.json(city);
//     });
// },
// deleteCity: (req, res)=>{
//   const cityId = req.params.id;
//   console.log('delete user ', cityId);
//   db.City.findOneAndDelete({_id: cityId}, (err, deletedCity) => {
//       if(err) { throw err; }
//       res.json(deletedCity);
//     });
// }
// router.get('/user/:id/posts', controllers.post.findAllByUser);
// router.get('/cities/:id/posts', controllers.post.findAllByCity);

//router.post('/cities/:id/user/:id/post', controllers.post.createPost);
// router.put('/post/:id', controllers.post.editPost);
// router.delete('/post/:id', controllers.post.deletePost);