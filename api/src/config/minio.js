import Minio from "minio";

const minioClient = new Minio.Client({
    endPoint:  process.env.MINIO_ENDPOINT,
    port: 1 * process.env.MINIO_PORT,
    useSSL: true,
    accessKey: process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY
});


const createBucketIfNotExists = (name, cb) => {
    minioClient.bucketExists(name, (err, exists) => { 
        if(err){
            throw err
        }     
        if(!exists){
            minioClient.makeBucket(name, process.env.MINIO_REGION, (err) => {
                cb(err)
            })
        }
        cb();
    })
}

export {minioClient, createBucketIfNotExists}