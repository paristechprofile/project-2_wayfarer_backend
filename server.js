const 
    express = require('express'),
    cors = require('cors'),
    userRoutes = require('./routes/user'),
    citiesRoutes = require('./routes/cities'),
    postRoutes = require('./routes/post'),
    bodyParser = require('body-parser');


const 
    app = express();

app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

app.use('/user', userRoutes)
app.use('/cities', citiesRoutes)
app.use('/post', postRoutes)

app.listen(process.env.PORT || 3001, () => console.log('Listening on port 3001'))
