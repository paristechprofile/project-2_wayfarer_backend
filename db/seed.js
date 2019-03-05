const 
    data = require('./data'),
    db = require('../models')


db.User.remove({})
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