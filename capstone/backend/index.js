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

const Product = require('./Service/Products')
const TestRouter = require('./Router/testRouter')


const Motivation = require('./Service/Motivation')
const Toinvestors = require ('./Service/toinvestors')
const Summary = require('./Service/summary') 
const Advantage = require('./Service/Advantage')
const About = require ('./Service/about')

const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);

const cors = require('cors');

app.use(cors());
app.use(auth.initialize());
app.use(bodyParser.json());

let product = new Product(knex);
let motivation = new Motivation(knex);
let toinvestors= new Toinvestors(knex);
let summary = new Summary(knex);
let advantage = new Advantage(knex);
let about = new About(knex);
 
let test = new Test(knex);
let user = new Users(knex);


app.get('/', function(req, res){
    res.send('Welcome to Capstone backend')
})

app.use('/api/product', (new TestRouter(product)).router());
app.use('/api/motivation', (new TestRouter(motivation)).router());
app.use('/api/toinvestors', (new TestRouter(toinvestors)).router());
app.use('/api/summary', (new TestRouter(summary)).router());
app.use('/api/advantage', (new TestRouter(advantage)).router());
app.use('/api/about', (new TestRouter(about)).router());
// app.use('/api/summary', )
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