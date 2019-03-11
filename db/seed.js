const 
    data = require('./usermodel'), // we may need to change data to user
    db = require('./models'),
    city = require('./citymodel'),
    post = require('./postmodel')


// db.User.remove({}, (err) =>{
//     db.User.create(data, (err, users) =>{
//         if (err) {
//             console.log('cannot create user', err)
//         } console.log(users)
//     })
// });

// db.City.remove({}, (err) =>{
//     db.City.create(city, (err, cities) =>{
//         if (err) {
//             console.log('cannot create city', err)
//         } console.log(cities)
//     })
// });


db.City.deleteMany({}, (err, cities) => {
    console.log('remove all cities');
    //create the cities first
    db.City.create(city, (err, cities) => {
      if(err) { console.log(err); }
      console.log('created all cities');
      console.log(`created ${cities.length} cities`);
      console.log(cities);
    
      /// create the users
      db.User.deleteMany({},(err, users) => {
        if (err) { console.log('Error occurred in removing users', err) } 
        console.log('removed all users from the users list');
        
        db.User.create(data, function(err, users){
          if (err) { return console.log('err', err) }
          console.log("created", users.length, "users");
          console.log(users);
  
          db.Post.deleteMany({}, (err, posts)=>{
            if(err) { console.log('Error occurred in removing posts', err) } 
            console.log('removed all posts');
        
            post.forEach(postData => {
              let newPost = new db.Post({
                text: postData.text,
                date: postData.date
              });  

              // look for city
              db.City.findOne({ name: postData.city}, (err, foundCity)=>{
                if (err) { console.log(err) }
                newPost.city = foundCity;
        
                /// look for user
                db.User.findOne({ username: postData.author}, (err, foundUser) => {
                  if (err) { console.log(err) }
                  newPost.author = foundUser;
        
                  newPost.save((err, savedPost) => {
                    if (err) { console.log(err) }
                    console.log(savedPost);
                    console.log('saved!!!');
                  });
                });
              });
            });
          });
        });
      });
    });
  });