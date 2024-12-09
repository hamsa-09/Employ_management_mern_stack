const express = require('express')
const dotenv=require('dotenv')
const path=require('path')
const cors=require('cors')
const connectDb =require('./config/connectDb')
const  employRoute=require('./routes/employRoute')
const app = express()


dotenv.config({
    path: path.join(__dirname,'config','config.env')
})
const port = process.env.PORT

app.use(express.json())
app.use(cors())
app.use("/api/v1/",employRoute)

connectDb()
app.listen(port, () => console.log(`Server listening at port ${port}`))