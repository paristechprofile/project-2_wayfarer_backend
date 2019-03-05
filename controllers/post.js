const 
  db = require('../models')

module.exports = {
    index: (req,res)=>{
        db.post.find({}, (err,posts)=>{
            res.json(posts)
        })
    },
}