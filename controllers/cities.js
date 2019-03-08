const 
    db = require('../models')

module.exports = {
    findAll: (req,res)=>{
        console.log('display cities triggered')
        db.City.find({},(err, foundCities) =>{
            if (err) {
                console.log('error retrieving users', err)
            } res.json(foundCities)
        })
    },
    editCity: (req,res)=>{
        console.log('update city', req.params);
        console.log(`the body is${req.body}`);
        const cityId = req.params.id;
        db.City.findOneAndUpdate(
            {_id:cityId},
            req.body,
            // {name: req.params.name},
            {new: true},
            (err, updateCity) => {
                if(err) {throw err;}
                res.json(updateCity);
        });
        //////////////////////
    },
    findById: (req, res)=>{
        db.City.find({_id: req.params.id}, (error, cities) => {
            res.json(cities);
          }); 

    },
    createCity: (req,res)=>{
        let newCity = new db.City({
            name: req.body.name,
            country: req.body.country,
            state: req.body.state,
            image: req.body.image
          });
          newCity.save((error, city) => {
            res.json(city);
          });
    },
    deleteCity: (req, res)=>{
        const cityId = req.params.id;
        console.log('delete user ', cityId);
        db.City.findOneAndDelete({_id: cityId}, (err, deletedCity) => {
            if(err) { throw err; }
            res.json(deletedCity);
          });
    },
    getPosts: (req,res) => {
        console.log('display posts for a specific city')
        let city = req.params.id;
        console.log(req.body);
        db.Post.find({ city: city })
          //.populate('city')
          .populate('user')
          .exec((err, allPosts) => {
            if (err) {
              console.log('error retrieving posts', err)
            } 
            res.json(allPosts)
        })
      },
      
      findById: (req, res)=>{
        let cityId = req.params.id;
        db.City.find({_id: cityId})
        .exec((err, myCity) => {
            if (err) {
              console.log('error retrieving city', err)
            } 
            res.json(myCity)
        })
      },
      createPost: (req,res)=>{
          console.log('triggered create', req.body)
        let cityId = req.params.id;
        let userId = req.userId;

        let newPost = new db.Post({
            text: req.body.text,
            date: req.body.date,
            city: cityId
            }); 
            console.log("user id is ", userId)
        db.User.find({_id: userId}, (err, foundUser)=>{
          if(err){ console.log('cant find user',err) }
          newPost.author = foundUser[0]
          console.log("city id is : ", cityId)
         
        db.City.find({ _id: cityId}, (err, foundCity) => {
            if (err) { 
                console.log('cant find city',err) 
            }
           
            console.log("the foud city is :::",foundCity); 
            newPost.city = foundCity[0];
            console.log( "the city id is :",newPost.city )
            console.log('newPost:', newPost)
    
            newPost.save((err, savedPost) => {
                if (err) { console.log("can't save post to database",err) }
                console.log("saved post:", savedPost);
                console.log('saved the post!!!!');
            });

            res.json(newPost);
        });

    });// db.user
}};


// router.get('/cities', controllers.cities.findAll);

// router.get('/cities/:id', controllers.cities.findById);

// router.post('/cities', controllers.cities.create);

// router.put('/cities/:id', controllers.cities.edit);

// router.delete('/cities/:id', controllers.cities.delete);