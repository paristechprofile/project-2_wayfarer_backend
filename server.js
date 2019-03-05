const 
    express = require('express'),
    cors = require('cors'),
    dogRoutes = require('./routes/dogs'),
    userRoutes = require('./routes/user'),
    bodyParser = require('body-parser')


const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

app.use('/api/dogs', dogRoutes)
app.use('/user', userRoutes)

app.listen(3001, () => console.log('Listening on port 3001 :)'))