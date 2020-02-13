const redis_client = require('./connection');

const check_cache = (req,res,next)=>{
    const { id } = req.params;

    redis_client.get(id,(e,data)=>{
        if(e){
            res.json({code: 1,message: `Error in getting the data from the cache -> ${e}`});
        }else{
            if(data!=null){
                res.send(data);
            }else{
                next();
            }
        }
    });
};

module.exports = check_cache;