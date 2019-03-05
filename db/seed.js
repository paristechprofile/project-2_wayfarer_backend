const 
    data = require('./user'),
    db = require('../models')


db.User.remove({})
console.log()
    .then(() => {
        db.User.collection.insert(data)
            .then(seededEntries => {
                console.log(seededEntries)
                process.exit()
            })
    })
    .catch(err => {
        console.log(err)
    })