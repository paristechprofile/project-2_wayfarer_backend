const 
  db = require('../models')

module.exports = {
    index: (req,res)=>{
        db.city.find({}, (err,cities)=>{
            res.json(cities)
        })
    },
}