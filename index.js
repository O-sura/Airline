const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const path = require('path');


let PORT = process.env.PORT | 8000

//in-built middleware for json
app.use(bodyParser.json())

//in-built middleware to handle urlencoded data
app.use(express.urlencoded({extended:false}));


app.use('/api/v1/flight_info', require('./route/flight_info_route'));


//Server configs
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

