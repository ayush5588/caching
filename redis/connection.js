const redis = require('redis');

const redis_port =6379
const redis_client = redis.createClient(redis_port);

module.exports = redis_client;