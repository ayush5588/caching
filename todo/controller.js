const axios = require('axios');
const redis_client = require('../redis/connection');

exports.todo = (req,res,next)=>{
    const { id } = req.params;
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((reply)=>{
        let todo_data = reply.data;
        redis_client.setex(id,3600,JSON.stringify(todo_data));
        res.json(todo_data);
    }).catch((e)=>{
        res.json({code: 1,message: `Error in getting the data -> ${e}`});
    })
};