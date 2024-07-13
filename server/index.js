const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const router=express.Router()
const cors = require('cors');

dotenv.config()
app.use(router)
app.use(express.json())
app.use(cors());

const productRoute=require('./Route/route.js')


mongoose.connect(process.env.mongoDB_URL,{dbName:"ecomm"}).then(()=>{
    console.log("DB Connected");
}).catch((err)=>{console.log(err);})



app.use('/api',productRoute)

const port = process.env.port||5000

app.listen(port,()=>{

    console.log(`server running at ${port}`);
})