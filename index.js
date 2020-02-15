const express = require('express');

const app = express();

require('dotenv/config');
require('./redis/connection');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const todo_controller = require('./todo/index');
app.use('/json',todo_controller);

const portnum = process.env.PORT;
app.listen(portnum,()=>{
    console.log(`Server running on port ${portnum}`);
});

