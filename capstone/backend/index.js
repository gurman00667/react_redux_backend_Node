const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jwt-simple');
const axios = require ('axios')
const authClass = require('./auth');
const config = require('./config');
const Users = require('./Service/users');
const AuthRouter = require('./Router/authRouter');

const app = express();
const auth = authClass();

const Test = require('./Service/test')
const TestRouter = require('./Router/testRouter')

const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);

const cors = require('cors');

app.use(cors());
app.use(auth.initialize());
app.use(bodyParser.json());

let test = new Test(knex);
let user = new Users(knex);


app.get('/', function(req, res){
    res.send('Welcome to Capstone backend')
})

// app.get('/api/users',auth.authenticate(),(req,res)=>{
//     res.json(users);
// });

// app.post("/api/login", function(req, res) {  
//     console.log('Logging In')
//     console.log(req.body)
//     if (req.body.email && req.body.password) {
//         var email = req.body.email;
//         var password = req.body.password;
//         console.log(email, password)
//         console.log(users)
//         var user = users.find((u)=> {
//             return u.email === email && u.password === password;
//         });
//         if (user) {
//             var payload = {
//                 id: user.id
//             };
//             var token = jwt.encode(payload, config.jwtSecret);
//             console.log('working')
//             res.json({
//                 token: token
//             });
//         } else {
//             console.log('Failure')

//             res.sendStatus(401);
//         }
//     } else {
//         console.log('1')

//         res.sendStatus(401);

//     }
// });

app.use('/api/test/', (new TestRouter(test)).router());
app.use('/api/users/', (new AuthRouter(user)).router());

app.listen(8080, ()=>{
    console.log('Port number is 8080')
})