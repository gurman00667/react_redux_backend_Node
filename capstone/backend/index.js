const express = require('express');
const bodyParser = require('body-parser');

const app = express();

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
app.use(bodyParser.json());

let product = new Product(knex);
let motivation = new Motivation(knex);
let toinvestors= new Toinvestors(knex);
let summary = new Summary(knex);
let advantage = new Advantage(knex);
let about = new About(knex);
 

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

app.listen(8080, ()=>{
    console.log('Port number is 8080')
})