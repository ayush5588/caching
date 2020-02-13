const express = require('express');

const app = express();

require('dotenv/config');
require('./redis/connection');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const starship_controller = require('./starship/index');
app.use('/json',starship_controller);

const portnum = process.env.PORT;
app.listen(portnum,()=>{
    console.log(`Server running on port ${portnum}`);
});

