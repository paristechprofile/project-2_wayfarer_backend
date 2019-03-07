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
          .exec((err, allPosts) => {
            if (err) {
              console.log('error retrieving posts', err)
            } 
            res.json(allPosts)
        })
      },
}


// router.get('/cities', controllers.cities.findAll);

// router.get('/cities/:id', controllers.cities.findById);

// router.post('/cities', controllers.cities.create);

// router.put('/cities/:id', controllers.cities.edit);

// router.delete('/cities/:id', controllers.cities.delete);