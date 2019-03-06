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
}

// router.get('/cities', controllers.cities.findAll);

// router.get('/cities/:id', controllers.cities.findById);

// router.post('/cities', controllers.cities.create);

// router.put('/cities/:id', controllers.cities.edit);

// router.delete('/cities/:id', controllers.cities.delete);