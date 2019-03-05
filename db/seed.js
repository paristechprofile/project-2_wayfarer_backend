const 
    data = require('./user'),
    db = require('../models')


db.User.remove({}, (err) =>{
    db.User.create(data, (err, users) =>{
        if (err) {
            console.log('cannot create user', err)
        } console.log(users)
    })
});