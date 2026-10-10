// import necessary libraries
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//configuring and starting web server
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.end('Welcome to weather app')
});

app.get('/weather', (request, response) => {
    
});

app.listen(port, () => {
    console.log('server is started')
});
