const 
    bcrypt = require('bcrypt'),
    db = require('../models'),
    jwt = require('jsonwebtoken');

//edit user profile
// router.put('/user/:id', controllers.user.editProfile)

//delete user
// router.delete('/user/:id', controllers.user.delete)


module.exports = {
    
    findAll: (req,res)=>{
        console.log('display all users triggered')
        db.User.find({},(err, foundUsers) =>{
            if (err) {
                console.log('error retrieving users', err)
            } res.json(foundUsers)
        })
    },
    findById: (req,res)=>{
        console.log('display single user triggered', req.userId)
        if(req.userId){
            db.User.findById(req.userId, (err, foundUser)=>{
            res.json(foundUser)
            })
        } else {
            res.json('Unable to retrieve user with that Id')
        }
    },

    signup: (req, res) => {
    console.log(req.body);
    // Check to see if username is already in db
    db.User.find({username: req.body.username})
        .exec()
        .then( user => {
        // if a user is found with that username
        if (user.length >= 1) {
            // send an error and let the user know that the username already exists
            return res.status(409).json({
            message: "username already exists"
            })
        // if we don't have this user's username in our db, lets get them set up!
        } else {
            // lets hash our plaintext pw
            bcrypt.hash(req.body.pw, 10, (err, hash) => {
            if(err){ 
                console.log("hashing error:", err);
                res.status(200).json({error: err})
            // we now have a successful hashed pw
            } else {
                // we are creating a User object with their username and OUR hashed pw
                db.User.create({
                username: req.body.username,
                pw: hash
                }, (err, newUser) => {
                    console.log('here is the result',newUser)
                // if(err){ return res.status(500).json({err})}
                // we send our new data back to user or whatever you want to do.
                let user ={
                    username: newUser.username,
                    _id: newUser._id
                } 
                
                jwt.sign(
                    user,
                    "fantastic4",
                    {
                    // its good practice to have an expiration amount for jwt tokens.
                    expiresIn: "1h"
                    },
                    (err, signedJwt) => {
                    res.status(200).json({
                    message: 'User Created',
                    user,
                    signedJwt
                    })
                });
                // send success back to user, along with a token.
                })
            }
            })
        }
        })
        .catch( err => {
        console.log(err);
        res.status(500).json({err})
        })
    },
    
    login: (req, res) => {
    console.log("LOGIN CALLED");
    // find the user in our user db
    console.log("body", req.body)
    db.User.find({username: req.body.username})
        .select('+pw')
        .exec()
        // if we have found a user
        .then( users => {
        // if there is not username in our db
        console.log("USERS: ", users);
        if(users.length < 1) {
            return res.status(401).json({
            message: "username/pw incorrect"
            })
        }
        // we have an username in our db that matches what they gave us
        // now we have to compare their hashed pw to what we have in our db
        console.log("body", req.body);
        console.log("hash", users[0].pw);
        bcrypt.compare(req.body.pw, users[0].pw, (err, match) => {
            console.log(match)
            // If the compare function breaks, let them know
            if(err){console.log(err);return res.status(500).json({err})}
            // If match is true (their pw matches our db pw)
            if(match){
            console.log("MATCH: ", match)
            // create a json web token

            let user = {
                username: users[0].username,
                _id: users[0]._id
            } 
            jwt.sign(
                user,
                "fantastic4",
                {
                // its good practice to have an expiration amount for jwt tokens.
                expiresIn: "1h"
                },
                (err, signedJwt) => {
                res.status(200).json({
                message: 'Auth successful',
                user,
                signedJwt
                })
            });
            // the pw provided does not match the pw on file.
            } else {
            console.log("NOT A MATCH")
            res.status(401).json({message: "username/pw incorrect"})
            }
        })
        })
        .catch( err => {
        console.log("OUTSIDE ERROR_")
        console.log(err);
        res.status(500).json({err})
        })
        
    },
    editProfile: (req, res) => {
        console.log('edit profile controller triggered');
        let userId = req.userId
        console.log(userId);
        db.User.findOneAndUpdate({_id: userId}, req.body, (err, updatedProfile) => {
            if (err){
                console.log(`Sorry, there was an error editing your profile`, err);
            } 
            res.json(updatedProfile);  
            console.log(`updated profile`, updatedProfile);
        });
        // db.User.find({username: req.body.username}) example in todo

    }
    
}
