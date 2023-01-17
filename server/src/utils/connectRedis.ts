import { createClient } from "redis"

const redisUrl = "redis-19745.c1.ap-southeast-1-1.ec2.cloud.redislabs.com:19745"
const redisClient = createClient({
    url: redisUrl
})

const connectRedis = async () => {
    try {
        await redisClient.connect();
        console.log('Redis connect successfully');

        redisClient.set("try", "Hello Welcome to Express with TypeORM")
    } catch (error) {
        console.log(error)
        setTimeout(connectRedis, 5000)
    }
}

connectRedis();

export default redisClient;