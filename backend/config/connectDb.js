const { connect } = require('http2');
const mongoose=require('mongoose');

const connectDb=()=>{
    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log("Connected to MongoDB:"+con.connection.host);
    })
}

module.exports=connectDb;