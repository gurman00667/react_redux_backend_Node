const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const Test = require('./Service/test')
const TestRouter = require('./Router/testRouter')

const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

let test = new Test(knex);


app.get('/', function(req, res){
    res.send('Welcome to Capstone backend')
})

app.use('/api/test/', (new TestRouter(test)).router());

app.listen(8080, ()=>{
    console.log('Port number is 8080')
})