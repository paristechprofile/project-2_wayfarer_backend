const 
    express = require('express'),
    cors = require('cors'),
    userRoutes = require('./routes/user'),
    citiesRoutes = require('./routes/cities'),
    // postRoutes = require('./routes/post'),
    bodyParser = require('body-parser');


const 
    app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

app.use('/user', userRoutes)
app.use('/cities', citiesRoutes)
// app.use('/post', postRoutes)

app.listen(3001, () => console.log('Listening on port 3001'))
