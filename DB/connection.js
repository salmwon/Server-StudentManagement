const mongoose=require('mongoose')

const connectionString=process.env.connectionString
mongoose.connect(connectionString).then(
    ()=>{
        console.log("MongoDb Atlas Connected with SMServer");
    }
).catch((err)=>{
    console.log('MongoDb connection failed !!',err);
})

